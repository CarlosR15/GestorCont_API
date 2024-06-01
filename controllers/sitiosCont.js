const sitiosService = require('../services/sitiosService');

async function obtenerSitios(req, res) {
    try {
        const sitios = await sitiosService.obtenerSitios();
        res.json(sitios);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los sitios' });
    }
}

async function agregarSitio(req, res) {
    const { sitioWeb } = req.body;
    console.log(sitioWeb);
    try {
        await sitiosService.agregarSite(sitioWeb.id_usuario, sitioWeb.name, sitioWeb.url);
        res.status(201).send('Sitio agregado correctamente');
    } catch (error) {
        console.error('Error al agregar sitio web:', error);
        res.status(500).send('Error interno del servidor');
    }
}

async function obtenerSitioNomPorId(req, res) {
    const { usuarioId } = req.body;
    console.log(usuarioId);
    try {
        const sitios = await sitiosService.obtenerSitioNomPorId(usuarioId);
        console.log(sitios);
        res.json(sitios);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los sitios por Id' });
    }
}



module.exports = {
    obtenerSitios,
    agregarSitio,
    obtenerSitioNomPorId
};