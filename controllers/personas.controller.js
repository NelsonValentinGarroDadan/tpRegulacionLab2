const personas = {}
    personas.getpersonasId = async(req,res,next)=>{
        const nroPermiso = 1;
        const models = require('../models/index')().sequelize.models;
        try{
            if(!req.session.User){
                 res.redirect('/login');
                 res.end();
                 return next();
            }
            const permisos = await models["permisos"].findAll({where:{id_usuario:req.session.User}});
            if(permisos.length == 0){
                res.redirect('/login')
                res.end();
                return next();
            }
            let condicion = false;
            for(let i = 0; i<permisos.length;i++){
                let idRP = permisos[i].dataValues.id_recurso;
                let tP = permisos[i].dataValues.id_tipo_permiso;
                let recursos = await models["recursos"].findOne({where:{nombre:personas}});
                for(let j = 0; j<recursos.length;j++){
                    let idRR =recursos[j].datavalues.id;
                    if(idRP == idRR && tP == nroPermiso){
                        condicion = true;
                        break;
                    }
                }
            }
            if(!condicion){
                res.redirect('/login')
                res.end();
                return next();
            }
            if(!req.params.id){
                res.statusCode = 400;
                res.send("No se recibio ningun id");
                 res.end(); 
                return next();  
            }else{
                const id = req.params.id
                if(id=="Create"){
                    res.redirect("personas/Create");
                     res.end();
                     return next();
                }else{
                    let resultado = await models["personas"].findByPk(id);

                    if (resultado == null){ 
                        res.statusCode = 404;
                        res.send(`No se encontro el recurso con id: ${id}`);
                         res.end();
                        return next();  
                    }else{
                        res.statusCode = 200;
                        res.send(resultado);
                         res.end();
                        return next(); 
                    } 
                }
                

                
            }

            

        }catch(err){
            console.log(err);
            res.statusCode = 500;
            res.send(err);
             res.end();    
            return next();
        }
        
        
    }
    personas.getpersonasCreate = async(req,res,next)=>{
        const nroPermiso = 4;
        if(!req.session.User){
            res.redirect('/login');
            res.end();
            return next();
       }
       const permisos = await models["permisos"].findAll({where:{id_usuario:req.session.User}});
       if(permisos.length == 0){
           res.redirect('/login')
           res.end();
           return next();
       }
       let condicion = false;
       for(let i = 0; i<permisos.length;i++){
           let idRP = permisos[i].dataValues.id_recurso;
           let tP = permisos[i].dataValues.id_tipo_permiso;
           let recursos = await models["recursos"].findOne({where:{nombre:personas}});
           for(let j = 0; j<recursos.length;j++){
               let idRR =recursos[j].datavalues.id;
               if(idRP == idRR && tP == nroPermiso){
                   condicion = true;
                   break;
               }
           }
       }
       if(!condicion){
           res.redirect('/login')
           res.end();
           return next();
       }
        let attrO = JSON.parse(`{"dni":{"type":"INTEGER","allowNull":false,"primaryKey":true,"autoIncrement":false},"nombre":{"type":"STRING","allowNull":false,"primaryKey":false,"autoIncrement":false}}`);
        const pug = require('pug');
        try{
            const html = pug.renderFile(`${__dirname.replace('controllers','public')}/views/page/viewCreatepersonas.pug`,{
                nbreRecurso: "personas",
                attr : attrO,
            })
            res.write(html);
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
    personas.postpersonas = async(req,res,next)=>{
        const nroPermiso = 4;
        if(!req.session.User){
            res.redirect('/login');
            res.end();
            return next();
       }
       const permisos = await models["permisos"].findAll({where:{id_usuario:req.session.User}});
       if(permisos.length == 0){
           res.redirect('/login')
           res.end();
           return next();
       }
       let condicion = false;
       for(let i = 0; i<permisos.length;i++){
           let idRP = permisos[i].dataValues.id_recurso;
           let tP = permisos[i].dataValues.id_tipo_permiso;
           let recursos = await models["recursos"].findOne({where:{nombre:personas}});
           for(let j = 0; j<recursos.length;j++){
               let idRR =recursos[j].datavalues.id;
               if(idRP == idRR && tP == nroPermiso){
                   condicion = true;
                   break;
               }
           }
       }
       if(!condicion){
           res.redirect('/login')
           res.end();
           return next();
       }
        const models = require('../models/index')().sequelize.models;
        try{
            if(!req.body.attr){
                res.statusCode = 400;
                res.send("No se enviaron datos para la consulta");
                 res.end();
                return next();  
            }else{
                const attrN = req.body.attr
                const attrO = JSON.parse(`{"dni":{"type":"INTEGER","allowNull":false,"primaryKey":true,"autoIncrement":false},"nombre":{"type":"STRING","allowNull":false,"primaryKey":false,"autoIncrement":false}}`)
                const validaciones = require('../helpdesk/validaciones')

                for(let nbreAttr in attrO){
                    if(validaciones("STRING",attrN[nbreAttr])&&validaciones("INTEGER",attrN[nbreAttr])){
                        res.statusCode = 400;
                        res.send("Los tipos de datos no coiciden con los declarados en la BD");
                         res.end();
                        return next();
                    } 
                }

                let existe = await models["personas"].findByPk(attrN[Object.keys(attrN)[0]]);
                if(existe != null){
                    res.statusCode = 400;
                    res.send("Ya existe ese recurso");
                     res.end();
                    return next();
                }else{
                    const newpersonas = await models["personas"].build(attrN);
                    await newpersonas.save();
                    
                    res.status = 200;
                    res.send("Se creo con exito el recurso")
                     res.end();
                    return next();
                }

                
            } 
            

        }catch(err){
            console.log(err);
            res.statusCode = 500;
            res.send(err);
             res.end();
            return next();
        }
        
    }
    personas.getpersonas = async(req,res,next)=>{
        const nroPermiso = 1;
        if(!req.session.User){
            res.redirect('/login');
            res.end();
            return next();
       }
       const permisos = await models["permisos"].findAll({where:{id_usuario:req.session.User}});
       if(permisos.length == 0){
           res.redirect('/login')
           res.end();
           return next();
       }
       let condicion = false;
       for(let i = 0; i<permisos.length;i++){
           let idRP = permisos[i].dataValues.id_recurso;
           let tP = permisos[i].dataValues.id_tipo_permiso;
           let recursos = await models["recursos"].findOne({where:{nombre:personas}});
           for(let j = 0; j<recursos.length;j++){
               let idRR =recursos[j].datavalues.id;
               if(idRP == idRR && tP == nroPermiso){
                   condicion = true;
                   break;
               }
           }
       }
       if(!condicion){
           res.redirect('/login')
           res.end();
           return next();
       }
        const models = require('../models/index')().sequelize.models;
        try{
            const resultado = await models["personas"].findAll();

            res.send(resultado)
            res.end();
            return next();
        }catch(err){
            console.log(err);
            res.statusCode = 500;
            res.send("Ocurrio un error");
            res.end();
            return next();
        }
    }   
    personas.getpersonasIdEdit = async(req,res,next)=>{
        const nroPermiso = 3;
        if(!req.session.User){
            res.redirect('/login');
            res.end();
            return next();
       }
       const permisos = await models["permisos"].findAll({where:{id_usuario:req.session.User}});
       if(permisos.length == 0){
           res.redirect('/login')
           res.end();
           return next();
       }
       let condicion = false;
       for(let i = 0; i<permisos.length;i++){
           let idRP = permisos[i].dataValues.id_recurso;
           let tP = permisos[i].dataValues.id_tipo_permiso;
           let recursos = await models["recursos"].findOne({where:{nombre:personas}});
           for(let j = 0; j<recursos.length;j++){
               let idRR =recursos[j].datavalues.id;
               if(idRP == idRR && tP == nroPermiso){
                   condicion = true;
                   break;
               }
           }
       }
       if(!condicion){
           res.redirect('/login')
           res.end();
           return next();
       }
        const models = require('../models/index')().sequelize.models;
        let attrO = JSON.parse(`{"dni":{"type":"INTEGER","allowNull":false,"primaryKey":true,"autoIncrement":false},"nombre":{"type":"STRING","allowNull":false,"primaryKey":false,"autoIncrement":false}}`);
        const pug = require('pug');
        try{
            if(!req.params.id){
                res.statusCode = 400;
                res.send("No se recibio ningun id");
                 res.end();
                return next();
            }
            
            const id = req.params.id
            let resultado = await models["personas"].findByPk(id);
            
            if (resultado === null){
                res.statusCode = 404;
                res.send(`No se encontro el recurso con id: ${id}`);
                 res.end();
                return next();
            } 
            
            const html = pug.renderFile(`${__dirname.replace('controllers','public')}/views/page/viewEditpersonas.pug`,{
                personas : resultado,
                    attr : attrO,
                })
    
            res.send(html)
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
    personas.putpersonas = async(req,res,next)=>{
        const nroPermiso = 3;
        if(!req.session.User){
            res.redirect('/login');
            res.end();
            return next();
       }
       const permisos = await models["permisos"].findAll({where:{id_usuario:req.session.User}});
       if(permisos.length == 0){
           res.redirect('/login')
           res.end();
           return next();
       }
       let condicion = false;
       for(let i = 0; i<permisos.length;i++){
           let idRP = permisos[i].dataValues.id_recurso;
           let tP = permisos[i].dataValues.id_tipo_permiso;
           let recursos = await models["recursos"].findOne({where:{nombre:personas}});
           for(let j = 0; j<recursos.length;j++){
               let idRR =recursos[j].datavalues.id;
               if(idRP == idRR && tP == nroPermiso){
                   condicion = true;
                   break;
               }
           }
       }
       if(!condicion){
           res.redirect('/login')
           res.end();
           return next();
       }
        const models = require('../models/index')().sequelize.models;
        try{
            if(!req.body.attr){
                res.statusCode = 400;
                res.send("No se enviaron datos para la consulta");
                 res.end();
                return next();
            } 
            const attrN = req.body.attr
            const attrO = {"dni":{"type":"INTEGER","allowNull":false,"primaryKey":true,"autoIncrement":false},"nombre":{"type":"STRING","allowNull":false,"primaryKey":false,"autoIncrement":false}};
            const validaciones = require('../helpdesk/validaciones')

            for(let nbreAttr in attrO){
                if(validaciones(attrO[nbreAttr].type,attrN[nbreAttr])){
                    res.statusCode = 400;
                    res.send("Los tipos de datos no coiciden con los declarados en la BD");
                     res.end();
                    return next();
                }
            }

            let resultado = await models["personas"].findByPk(attrN[Object.keys(attrN)[0]]);
            if (resultado === null){
                res.statusCode = 400;
                res.send(`No se encontro el recurso con id: ${attrN[Object.keys(attrN)[0]]}`);
                 res.end();
                return next();
            } 

            for(let indice in attrN){
                resultado[indice] = attrN[indice];
            }
            resultado.reload();
            
            res.statusCode = 200;
            res.send(`Se actualizo con exito el recurso con id ${attrN[Object.keys(attrN)[0]]}`);
             res.end();
            next()
            
        }catch(err){
            console.log(err);
            res.statusCode = 500;
            res.send(err);
             res.end();
            return next();
        }
        
    }
    personas.deletepersonas = async(req,res,next)=>{
        const nroPermiso = 2;
        if(!req.session.User){
            res.redirect('/login');
            res.end();
            return next();
       }
       const permisos = await models["permisos"].findAll({where:{id_usuario:req.session.User}});
       if(permisos.length == 0){
           res.redirect('/login')
           res.end();
           return next();
       }
       let condicion = false;
       for(let i = 0; i<permisos.length;i++){
           let idRP = permisos[i].dataValues.id_recurso;
           let tP = permisos[i].dataValues.id_tipo_permiso;
           let recursos = await models["recursos"].findOne({where:{nombre:personas}});
           for(let j = 0; j<recursos.length;j++){
               let idRR =recursos[j].datavalues.id;
               if(idRP == idRR && tP == nroPermiso){
                   condicion = true;
                   break;
               }
           }
       }
       if(!condicion){
           res.redirect('/login')
           res.end();
           return next();
       }
        const models = require('../models/index')().sequelize.models;
        try{
            if(!req.params.id){
                res.statusCode = 400;
                res.send("No se recibio ningun id");
                 res.end();
                return next();
            } 

            const id = req.params.id;
            let resultado = await models["personas"].findByPk(id);
            
            if (resultado === null){
                res.statusCode = 404;
                res.send(`No se encontro el recurso con id: ${id}`);
                 res.end();
                return next();
            } 
            
            await resultado.destroy();
            
            res.statusCode = 200;
            res.send(`Se elimino con exito el recurso con id ${id}`);
             res.end();
            next()
            
        }catch(err){
            console.log(err);
            res.statusCode = 500;
            res.send(err);
             res.end();  
            return next();
        }  
    }

module.exports = personas;
    