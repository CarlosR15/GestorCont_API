const express = require('express');
const router = express.Router();

// Importar rutas específicas
const usuariosRoute = require('./usuariosRoute');
const sitiosRoute = require('./sitiosRoute');
const contraseniasRoute = require('./contraseniasRoute');

// Rutas específicas para usuarios
router.use('/usuarios', usuariosRoute);
router.use('/sitios', sitiosRoute);
router.use('/contrasenias', contraseniasRoute);

module.exports = router;
