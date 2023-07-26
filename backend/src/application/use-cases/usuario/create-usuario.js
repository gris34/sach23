// Importar las dependencias necesarias
const UsuarioRepository = require("../../interfaces/repositories/usuario-repository");

// Definir la función que creará un nuevo usuario
async function createUsuario(usuario) {
  try {
    // Validar los datos del usuario
    if (!usuario.nombre || !usuario.correo || !usuario.contrasena) {
      throw new Error("Faltan datos obligatorios del usuario");
    }

    // Crear el usuario en la base de datos
    const newUsuario = await UsuarioRepository.createUsuario(usuario);

    // Retornar el nuevo usuario creado
    return newUsuario;
  } catch (error) {
    // Si ocurre un error, lanzar una excepción con el mensaje correspondiente
    console.error(error);
    throw new Error("Error al crear el usuario");
  }
}

// Exportar la función para poder utilizarla desde otros archivos de la aplicación
module.exports = createUsuario;
