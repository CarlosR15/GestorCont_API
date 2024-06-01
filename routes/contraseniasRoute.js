const express = require('express');
const router = express.Router();
const contraseniasController = require('../controllers/contraseniasCont');

// Rutas para los productos
router.get('/obtenerContPorId', contraseniasController.obtenerContPorId);

module.exports = router;