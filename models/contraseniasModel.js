const { obtenerConexion } = require('../database/conexion');

async function obtenerContPorId(usuarioId) {
    const conexion = await obtenerConexion();
    try {
        const [results] = await conexion.query('SELECT * FROM contrasenias WHERE usuario_id = ?', [usuarioId]);
        return results[0];
    } catch (error) {
        console.error('Error al obtener contraseñas por id en el modelo:', error);
        throw error;
    } finally {
        conexion.release(); // Liberar la conexión al finalizar
    }
}

module.exports = {
    obtenerContPorId
};
