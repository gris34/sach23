// Importar las dependencias necesarias
const UsuarioRepository = require("../../interfaces/repositories/usuario-repository");

// Definir la función que eliminará un usuario
async function deleteUsuario(idUsuario) {
  try {
    // Eliminar el usuario de la base de datos
    const deletedUsuario = await UsuarioRepository.deleteUsuario(idUsuario);

    // Retornar el usuario eliminado
    return deletedUsuario;
  } catch (error) {
    // Si ocurre un error, lanzar una excepción con el mensaje correspondiente
    console.error(error);
    throw new Error("Error al eliminar el usuario");
  }
}

// Exportar la función para poder utilizarla desde otros archivos de la aplicación
module.exports = deleteUsuario;
