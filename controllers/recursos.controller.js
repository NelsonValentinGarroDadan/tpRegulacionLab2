const recursos = {}
    recursos.getRecursos = async(req,res,next) => {
        const models = require('../models/index')().sequelize.models;
        if(!req.session.User){
            res.redirect('/login')
            res.end();
            return next();
        }
        const permisos = await models["permisos"].findAll({where:{id_usuario:req.session.User}});
        if(permisos.length == 0){
            res.redirect('/login')
            res.end();
            return next();
        }

        const pug = require('pug');
        let html = pug.renderFile(`${__dirname.replace("controllers","public")}/views/page/recursos.pug`);

        res.write(html);
        res.statusCode = 200;
        res.end();
        return next();
    }
module.exports = recursos;