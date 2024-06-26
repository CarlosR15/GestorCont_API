const contraseniasModel = require('../models/contraseniasModel');

async function obtenerContPorId(usuarioId) {
    return await contraseniasModel.obtenerContPorId(usuarioId);
}

async function agregarCont(id_usuario, sitio_id, usuario, contrasenia) {
    try {
        await contraseniasModel.agregarCont(id_usuario, sitio_id, usuario, contrasenia);
    } catch (error) {
        console.error('Error al registrar contraseña en el servicio:', error);
        throw error;
    }
};

async function eliminarCont(idContrasenia) {
    return await contraseniasModel.eliminarCont(idContrasenia);
}


module.exports = {
    obtenerContPorId,
    agregarCont,
    eliminarCont
};