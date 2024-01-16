const {Router} = require('express');
    const router = Router()
    
    const controlador = require('../controllers/index.controller')()["personas.controller"];
    
    router.get("/personas/:id/id", controlador.getpersonasId);
    
    router.get("/personas/create", controlador.getpersonasCreate);
    
    router.post("/personas/", controlador.postpersonas);
    
    router.get("/personas/", controlador.getpersonas);
    
    router.get("/personas/:id/edit", controlador.getpersonasIdEdit);
    
    router.put("/personas/:id", controlador.putpersonas);
    
    router.delete("/personas/:id", controlador.deletepersonas);
    
    
    module.exports = router
                            