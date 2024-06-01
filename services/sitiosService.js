const sitiosModel = require('../models/sitiosModel');

async function obtenerSitios() {
    return await sitiosModel.obtenerSitios();
}

async function agregarSite(id_usuario, nombre, url) {
    try {
        await sitiosModel.agregarSite(id_usuario, nombre, url);
    } catch (error) {
        console.error('Error al registrar usuario en el servicio:', error);
        throw error;
    }
};

async function obtenerSitioNomPorId(usuarioId) {
    return await sitiosModel.obtenerSitioNomPorId(usuarioId);
};

module.exports = {
    obtenerSitios,
    agregarSite,
    obtenerSitioNomPorId
};

