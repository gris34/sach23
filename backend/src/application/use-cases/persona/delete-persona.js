// Importar las dependencias necesarias
const PersonaRepository = require("../../interfaces/repositories/persona-repository");

// Definir la función que eliminará una persona del sistema
async function deletePersona(idPersona) {
  try {
    // Eliminar la persona de la base de datos
    const personaEliminada = await PersonaRepository.deletePersona(idPersona);

    // Retornar un mensaje de éxito
    return "Persona eliminada exitosamente";
  } catch (error) {
    // Si ocurre un error, retornar un mensaje de error
    console.error(error);
    return "Error al eliminar la persona";
  }
}

// Exportar la función para ser utilizada en otros archivos
module.exports = deletePersona;
