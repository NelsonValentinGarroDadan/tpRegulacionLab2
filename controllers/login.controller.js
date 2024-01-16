const login = {}

    login.getLogin = async(req,res,next)=>{
        const pug = require('pug');
        let html = pug.renderFile(`${__dirname.replace("controllers","public")}/views/page/login.pug`);

        res.write(html);
        res.statusCode = 200;
        res.end()
        return next()
    }

    login.postRegister = async(req,res,next)=>{
        const bcryp = require('bcrypt');
        const salt = await bcryp.genSalt(10);
        let validaciones = require('../helpdesk/validaciones');
        const models = require('../models/index')().sequelize.models;
        try{
            if(!req.body){
                res.statusCode=400;
                res.send("No se recibio lo esperado");
                res.end();
                return next()
            }
            const data = req.body;
            const nbre = data.nombre;
            const psw = data.psw;
            const mail = data.email;
            if(validaciones("NAME",nbre)||validaciones("PSW",psw)||validaciones("EMAIL",mail)){
                res.statusCode=400;
                res.send("Debe andar algo mal con el nombre o el mail o la contraseña");
                res.end();
                return next()
            }
            let existe =  await models["usuarios"].findOne({where : {mail:await bcryp.hash(mail,salt)}});
            if(existe != null){
                res.statusCode=400;
                res.send("EL mail ya esta asociado a un usuario");
                res.end();
                return next()
            }
            let newUsuario = models["usuarios"].build({nombre:nbre,pasw:await bcryp.hash(psw,salt),mail:mail});
            await newUsuario.save();

            res.statusCOde = 200;
            res.send("Se registro con exito");
            res.end();
            return next()
        }catch(err){
            console.log(err);
            res.statusCode = 500;
            res.send("Ocurrio un error!");
            res.end()
            return next()
        }
        
    }

    login.postLogin = async(req,res,next)=>{
        const bcryp = require('bcrypt');
        let validaciones = require('../helpdesk/validaciones');
        const models = require('../models/index')().sequelize.models;
        try{
            if(!req.body){
                res.statusCode = 400;
                res.send("No se recibio lo esperado");
                res.end();
                return next()
            }
            const data = req.body;
            const email = data.email;
            const psw = data.psw;
            if(validaciones("EMAIL",email) || validaciones("PSW",psw)){
                res.statusCode = 400;
                res.send("El email o la contraseña son incorrectos");
                res.end();
                return next()
            }
            let usuario = await models["usuarios"].findOne({where: {mail: email}})

            
            if(usuario == null ){
                res.statusCode = 400;
                res.send("El email o la contraseña son incorrectos");
                res.end();
                return next()
            }
            let validarP = bcryp.compareSync( psw.toString(), usuario.dataValues.pasw);
            if(!validarP){
                res.statusCode = 400;
                res.send("El email o la contraseña son incorrectos");
                res.end();
                return next()
            }
            req.session.User=usuario.dataValues.id;
            res.send('/recursos');
            res.statusCode = 200;
            res.end()
            return next()
        }catch(err){
            console.log(err);
            res.statusCode = 500;
            res.send("Ocurrio un error!");
            res.end();
            return next()
        }
        
    }

    login.deleteSession = async(req,res,next)=>{
        req.session.User = undefined;
        res.statusCode = 200;
        res.send('Sesion cerrada');
        res.end()
        return next()
    }

module.exports = login;