const { obtenerConexion } = require('../database/conexion');

async function obtenerSitios() {
    const conexion = await obtenerConexion();
    try {
        var [results] = await conexion.query('SELECT * FROM sitiosWeb');
        console.log('Resultados de obtenerSitios en sitiosModel:', results);
        return results;
    } catch (error) {
        console.error('Error al obtener los sitios:', error.message);
        throw error;
    } finally {
        conexion.release();
    }
}


async function agregarSite(id_usuario, nombre, url) {
    const conexion = await obtenerConexion();
    try {
        await conexion.query('INSERT INTO sitiosWeb (usuario_id, nombre, url) VALUES (?, ?, ?)', [id_usuario, nombre, url]);
        console.log('Sitio insertado correctamente');
    } catch (error) {
        console.error('Error al insertar sitio en el modelo:', error);
        throw error;
    } finally {
        conexion.release(); // Liberar la conexión al finalizar
    }
}

async function obtenerSitioNomPorId(usuarioId) {
    const conexion = await obtenerConexion();
    try {
        const [results] = await conexion.query('SELECT * FROM sitiosWeb WHERE usuario_id = ?', [usuarioId]);
        return results;
    } catch (error) {
        console.error('Error al obtener contraseñas por id en el modelo:', error);
        throw error;
    } finally {
        conexion.release(); // Liberar la conexión al finalizar
    }
}


module.exports = {
    obtenerSitios,
    agregarSite,
    obtenerSitioNomPorId
};