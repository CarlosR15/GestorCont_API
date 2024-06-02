const contraseniasService = require('../services/contraseniasService');

async function obtenerContPorId(req, res) {
    const { usuarioId } = req.body;
    console.log('Id usado para obtener Contrasenias por Id:', usuarioId);
    try {
        const sitios = await contraseniasService.obtenerContPorId(usuarioId);
        res.json(sitios);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las contrasenias por Id' });
    }
}

async function agregarCont(req, res) {
    const { id_usuario, sitio_id, usuario, contrasenia } = req.body.contrasenias;
    try {
        await contraseniasService.agregarCont(id_usuario, sitio_id, usuario, contrasenia);
        res.status(201).send('Contraseña agregada correctamente');
    } catch (error) {
        console.error('Error al agregar contraseña:', error);
        res.status(500).send('Error interno del servidor');
    }
}

module.exports = {
    obtenerContPorId,
    agregarCont
};