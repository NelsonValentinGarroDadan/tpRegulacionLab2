const {Router} = require('express');
const router = Router()

const controlador = require('../controllers/index.controller')()["login.controller"];

router.get("/login", controlador.getLogin);

router.post("/register", controlador.postRegister);

router.post("/login", controlador.postLogin);

router.get("/cerrarSesion", controlador.deleteSession);

module.exports = router
