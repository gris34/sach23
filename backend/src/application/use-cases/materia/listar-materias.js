// Importar las dependencias necesarias
const MateriaRepository = require("../../interfaces/repositories/materia-repository");

// Definir la función que lista todas las materias
async function listarMaterias() {
  try {
    // Obtener todas las materias
    const materias = await MateriaRepository.getAllMaterias();

    // Retornar todas las materias
    return materias;
  } catch (error) {
    // Si ocurre un error, retornar un mensaje de error
    console.error(error);
    return "Error al obtener las materias";
  }
}

// Exportar la función para que pueda ser usada desde otros archivos
module.exports = listarMaterias;
