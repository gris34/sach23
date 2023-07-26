// Importar las dependencias necesarias
const CursoRepository = require("../../interfaces/repositories/curso-repository");

// Definir la función que eliminará el horario del profesor
async function eliminarHorario(idProfesor) {
  try {
    // Obtener los cursos asignados al profesor
    const cursos = await CursoRepository.getCursosByProfesor(idProfesor);

    // Para cada curso, eliminar su horario
    for (const curso of cursos) {
      curso.horario = null;
      await CursoRepository.updateCurso(curso);
    }

    // Retornar un mensaje de éxito
    return "Horario eliminado exitosamente";
} catch (error) {
    console.error(error);
    return "Error";
  }
}
module.exports = eliminarHorario;

