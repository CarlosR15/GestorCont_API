const express = require('express');
const router = express.Router();
const contraseniasController = require('../controllers/contraseniasCont');

// Rutas para los productos
router.get('/obtenerContPorId', contraseniasController.obtenerContPorId);
router.post('/agregarCont', contraseniasController.agregarCont);
router.delete('/eliminarCont/:idContrasenia', contraseniasController.eliminarCont);

module.exports = router;