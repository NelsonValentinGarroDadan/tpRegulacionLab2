const generarCrud= {}
    generarCrud.postGenerarCrud = async(req,res,next)=>{
        const fs = require('fs');
        const models = require('../models/index')().sequelize.models;
            try{
            //Tomando los datos
                let nbreRecurso = req.body.nombreRecurso;
                
                let attrRecurso = req.body.atributos;
                attrRecurso = JSON.stringify(attrRecurso);
        
                let permRecurso = req.body.permisos;
            // validando 
                let existe = await models.recursos.findAll({where: {nombre : `${nbreRecurso}`}});

                if(!nbreRecurso || !attrRecurso){
                    res.statusCode = 400;
                    res.send("No se recibio lo esperado");
                     res.end();
                     return next();
                }
            
                if(require('../helpdesk/validaciones')("NAME",nbreRecurso) ){
                    res.statusCode = 400;
                    res.send("El nombre debe ser una sola palabra en minuscula")
                     res.end();
                     return next();
                }
            
                if(existe.length != 0){
                    res.statusCode = 400;
                    res.send("Ya existe el crud de ese recurso");
                    res.end()
                    return next();
                }
            //Generando el modelo
                let modelo = require('../helpdesk/modelo')(nbreRecurso,attrRecurso)
                
                fs.writeFileSync(`${__dirname.replace("controllers","models")}/${nbreRecurso}.js`,modelo,{encoding: "utf8"});
            //generado controlador           
                let controlador = require('../helpdesk/controlador')(nbreRecurso,attrRecurso);
              
                fs.writeFileSync(`${__dirname}/${nbreRecurso}.controller.js`,controlador,{encoding: "utf8"});
            //generando routers 
                let router = require('../helpdesk/router')(nbreRecurso);

                fs.writeFileSync(`${__dirname.replace("controllers","routes")}/${nbreRecurso}.routes.js`,router,{encoding: "utf8"});
            //generando Vistas
                let viewCreat = require('../helpdesk/viewCreate')(nbreRecurso);

                fs.writeFileSync(`${__dirname.replace("controllers","public")}/views/page/viewCreate${nbreRecurso}.pug`,viewCreat,{encoding: "utf8"});

                let viewEdit = require('../helpdesk/viewEdit')(nbreRecurso);

                fs.writeFileSync(`${__dirname.replace("controllers","public")}/views/page/viewEdit${nbreRecurso}.pug`,viewEdit,{encoding: "utf8"});
            //inserando js de las vistas
                let jsCreate = require('../helpdesk/jsCreate')(nbreRecurso);
                
                fs.writeFileSync(`${__dirname.replace("controllers","public")}/js/jsCreate${nbreRecurso}.js`,jsCreate,{encoding: "utf8"});

                let jsEdit = require('../helpdesk/jsEdit')(nbreRecurso);
                
                fs.writeFileSync(`${__dirname.replace("controllers","public")}/js/jsEdit${nbreRecurso}.js`,jsEdit,{encoding: "utf8"});
            //Insertando el nombre en la tabla recursos
                let newRecurso = models.recursos.build({nombre: nbreRecurso});
                
                await newRecurso.save();
            //Subiendo permisos
                let newPermiso
                for(let indice in permRecurso){
                    permRecurso[indice]["id_recurso"] = newRecurso.dataValues.id;
                    newPermiso = models.permisos.build(permRecurso[indice]);
                    console.log(permRecurso[indice]);
                    await newPermiso.save();
                }
           //subiendo el modelo
                let modelsNew = require('../models/index')().sequelize.models;
                await modelsNew[`${nbreRecurso}`].sync();

                res.statusCode = 200;
                res.send("Se genero con exito el crud");
                res.end()  
                return next();

            }catch(err){
                console.log(err);
                res.statusCode = 500;
                res.send(err);
                res.end();
                return next();
            }
        }

    generarCrud.getGenerarCrud = async(req,res,next)=>{
        const pug = require('pug');
        //modelos
        const models = require('../models/index')().sequelize.models;
        let resultado = await models.usuarios.findAll();
        const htmlListo = pug.renderFile(`${__dirname.replace("controllers","public")}/views/page/generarCRUD.pug`,{
            title: `${req.path.replace("/","")}`,
            Usuarios: resultado
        });
        res.write(htmlListo);
        res.status = 200;
        res.end();
        return next();
    }

module.exports = generarCrud;

