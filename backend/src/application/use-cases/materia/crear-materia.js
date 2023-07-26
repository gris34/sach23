// Importar las dependencias necesarias
const MateriaRepository = require("../../interfaces/repositories/materia-repository");

// Definir la función que creará una nueva materia
async function crearMateria(materiaData) {
  try {
    // Crear la nueva materia en la base de datos
    const nuevaMateria = await MateriaRepository.createMateria(materiaData);

    // Retornar la nueva materia creada
    return nuevaMateria;
  } catch (error) {
    // Si ocurre un error, lanzar una excepción con el mensaje de error
    console.error(error);
    throw new Error("Error al crear la materia");
  }
}

// Exportar la función para su uso en otros archivos
module.exports = crearMateria;
