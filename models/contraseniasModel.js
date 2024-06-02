const { obtenerConexion } = require('../database/conexion');

async function obtenerContPorId(usuarioId) {
    const conexion = await obtenerConexion();
    try {
        const [results] = await conexion.query('SELECT * FROM contrasenias WHERE usuario_id = ?', [usuarioId]);
        return results;
    } catch (error) {
        console.error('Error al obtener contraseñas por id en el modelo:', error);
        throw error;
    } finally {
        conexion.release(); // Liberar la conexión al finalizar
    }
}

async function agregarCont(id_usuario, sitio_id, usuario, contrasenia) {
    const conexion = await obtenerConexion();
    try {
        await conexion.query('INSERT INTO contrasenias (usuario_id, sitio_id, usuario, contrasenia) VALUES (?, ?, ?, ?)', [id_usuario, sitio_id, usuario, contrasenia]);
        console.log('Contraseña insertada correctamente');
    } catch (error) {
        console.error('Error al insertar contraseña en el modelo:', error);
        throw error;
    } finally {
        conexion.release(); // Liberar la conexión al finalizar
    }
}

module.exports = {
    obtenerContPorId,
    agregarCont
};
