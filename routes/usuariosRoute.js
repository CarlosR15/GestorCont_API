const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');

// Rutas para usuarios
router.post('/register', usuariosController.registrarUsuario);
router.post('/login', usuariosController.loginUsuario);

module.exports = router;
