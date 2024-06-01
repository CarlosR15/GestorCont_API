const express = require('express');
const router = express.Router();
const sitiosController = require('../controllers/sitiosCont');

// Rutas para los productos
router.get('/obtenerSitios', sitiosController.obtenerSitios);
router.post('/agregarSitio', sitiosController.agregarSitio);
router.get('/obtenerSitioNomPorId', sitiosController.obtenerSitioNomPorId);

module.exports = router;