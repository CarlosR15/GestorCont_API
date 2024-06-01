const contraseniasService = require('../services/contraseniasService');

async function obtenerContPorId(req, res) {
    const { usuarioId } = req.body;
    try {
        const sitios = await contraseniasService.obtenerContPorId(usuarioId);
        res.json(sitios);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las contrasenias por Id' });
    }
}

module.exports = {
    obtenerContPorId
};