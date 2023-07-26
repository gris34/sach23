// Importar las dependencias necesarias
const UsuarioRepository = require("../../interfaces/repositories/usuario-repository");

// Definir la función que buscará usuarios por su rol
async function getUsuariosByRol(rol) {
  try {
    // Buscar los usuarios en la base de datos
    const usuarios = await UsuarioRepository.getUsuariosByRol(rol);

    // Retornar los usuarios encontrados
    return usuarios;
  } catch (error) {
    // Si ocurre un error, lanzar una excepción con el mensaje correspondiente
    console.error(error);
    throw new Error("Error al buscar los usuarios");
  }
}

// Exportar la función para poder utilizarla desde otros archivos de la aplicación
module.exports = getUsuarioByRol;

