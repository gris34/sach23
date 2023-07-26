// Importar las dependencias necesarias
const PersonaRepository = require("../../interfaces/repositories/persona-repository");

// Definir la función que obtendrá los datos de una persona por su ID
async function getPersonaById(idPersona) {
  try {
    // Obtener los datos de la persona de la base de datos
    const persona = await PersonaRepository.getPersonaById(idPersona);

    // Retornar los datos de la persona
    return persona;
  } catch (error) {
    // Si ocurre un error, retornar un mensaje de error
    console.error(error);
    return "Error al obtener la persona";
  }
}

// Exportar la función para ser utilizada en otros archivos
module.exports = getPersonaById;
