// Importar las dependencias necesarias
const PersonaRepository = require("../../interfaces/repositories/persona-repository");

// Definir la función que creará una nueva persona en el sistema
async function createPersona(personaData) {
  try {
    // Crear la persona en la base de datos
    const personaCreada = await PersonaRepository.createPersona(personaData);

    // Retornar la persona creada
    return personaCreada;
  } catch (error) {
    // Si ocurre un error, retornar un mensaje de error
    console.error(error);
    return "Error al crear la persona";
  }
}

// Exportar la función para ser utilizada en otros archivos
module.exports = createPersona;
