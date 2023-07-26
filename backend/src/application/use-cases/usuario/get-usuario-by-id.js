// Importar las dependencias necesarias
const UsuarioRepository = require("../../interfaces/repositories/usuario-repository");

// Definir la función que buscará un usuario por su id
async function getUsuarioById(idUsuario) {
  try {
    // Buscar el usuario en la base de datos
    const usuario = await UsuarioRepository.getUsuarioById(idUsuario);

    // Si el usuario no existe, lanzar una excepción con el mensaje correspondiente
    if (!usuario) {
      throw new Error("El usuario no existe");
    }

    // Retornar el usuario encontrado
    return usuario;
  } catch (error) {
    // Si ocurre un error, lanzar una excepción con el mensaje correspondiente
    console.error(error);
    throw new Error("Error al buscar el usuario");
  }
}

// Exportar la función para poder utilizarla desde otros archivos de la aplicación
module.exports = getUsuarioById;
