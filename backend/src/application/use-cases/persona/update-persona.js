// Importar las dependencias necesarias
const PersonaRepository = require("../../interfaces/repositories/persona-repository");

// Definir la función que actualizará los datos de la persona
async function updatePersona(idPersona, newData) {
  try {
    // Buscar la persona en la base de datos
    const persona = await PersonaRepository.getPersonaById(idPersona);

    // Verificar que la persona exista
    if (!persona) {
      return "No se encontró la persona especificada";
    }

    // Actualizar los datos de la persona
    Object.assign(persona, newData);

    // Guardar los cambios en la base de datos
    await PersonaRepository.updatePersona(persona);

    // Retornar un mensaje de éxito
    return "Datos de la persona actualizados exitosamente";
  } catch (error) {
    // Si ocurre un error, retornar un mensaje de error
    console.error(error);
    return "Error al actualizar los datos de la persona";
  }
}

// Exportar la función
module.exports = updatePersona;
