let router = (nbreRecurso) => {
    return `const {Router} = require('express');
    const router = Router()
    
    const controlador = require('../controllers/index.controller')()["`+`${nbreRecurso}`+`.controller"];
    
    router.get("/${nbreRecurso}/:id/id", controlador.get`+`${nbreRecurso}`+`Id);
    
    router.get("/${nbreRecurso}/create", controlador.get`+`${nbreRecurso}`+`Create);
    
    router.post("/${nbreRecurso}/", controlador.post`+`${nbreRecurso}`+`);
    
    router.get("/${nbreRecurso}/", controlador.get`+`${nbreRecurso}`+`);
    
    router.get("/${nbreRecurso}/:id/edit", controlador.get`+`${nbreRecurso}`+`IdEdit);
    
    router.put("/${nbreRecurso}/:id", controlador.put`+`${nbreRecurso}`+`);
    
    router.delete("/${nbreRecurso}/:id", controlador.delete`+`${nbreRecurso}`+`);
    
    
    module.exports = router
                            `
}

module.exports = router;