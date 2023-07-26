// Importar las dependencias necesarias
const MateriaRepository = require("../../interfaces/repositories/materia-repository");

// Definir la función que eliminará una materia existente
async function eliminarMateria(idMateria) {
  try {
    // Obtener la materia existente
    const materiaExistente = await MateriaRepository.getMateriaById(idMateria);

    // Verificar si la materia existe
    if (!materiaExistente) {
      throw new Error("La materia no existe");
    }

    // Eliminar la materia de la base de datos
    await MateriaRepository.deleteMateria(materiaExistente);

    // Retornar un mensaje de éxito
    return "Materia eliminada exitosamente";
  } catch (error) {
    // Si ocurre un error, lanzar una excepción con el mensaje de error
    console.error(error);
    throw new Error("Error al eliminar la materia");
  }
}

// Exportar la función para su uso en otros archivos
module.exports = eliminarMateria;
