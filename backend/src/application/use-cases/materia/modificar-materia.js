// Importar las dependencias necesarias
const MateriaRepository = require("../../interfaces/repositories/materia-repository");

// Definir la función que modificará una materia existente
async function modificarMateria(idMateria, nuevaDataMateria) {
  try {
    // Obtener la materia existente
    const materiaExistente = await MateriaRepository.getMateriaById(idMateria);

    // Verificar si la materia existe
    if (!materiaExistente) {
      throw new Error("La materia no existe");
    }

    // Modificar los datos de la materia
    materiaExistente.nombre = nuevaDataMateria.nombre;
    materiaExistente.descripcion = nuevaDataMateria.descripcion;

    // Actualizar la materia en la base de datos
    const materiaActualizada = await MateriaRepository.updateMateria(
      materiaExistente
    );

    // Retornar la materia actualizada
    return materiaActualizada;
  } catch (error) {
    // Si ocurre un error, lanzar una excepción con el mensaje de error
    console.error(error);
    throw new Error("Error al modificar la materia");
  }
}

// Exportar la función para su uso en otros archivos
module.exports = modificarMateria;
