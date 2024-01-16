const {Router} = require('express');
const router = Router()

const controlador = require('../controllers/index.controller')()["recursos.controller"];

router.get("/recursos", controlador.getRecursos);

module.exports = router
