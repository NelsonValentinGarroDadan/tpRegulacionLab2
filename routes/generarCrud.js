const {Router} = require('express');
const router = Router()

const controlador = require('../controllers/index.controller')()["generarCRUD.controller"];

router.get("/generarCRUD", controlador.getGenerarCrud);

router.post("/generarCRUD", controlador.postGenerarCrud);

module.exports = router



