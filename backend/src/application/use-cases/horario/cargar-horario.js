// Importar las dependencias necesarias
const CursoRepository = require("../../interfaces/repositories/curso-repository");

// Definir la función que cargará el horario del profesor
async function cargarHorario(idProfesor, horario) {
  try {
    // Obtener los cursos asignados al profesor
    const cursos = await CursoRepository.getCursosByProfesor(idProfesor);

    // Para cada curso, actualizar su horario con el que se recibió como parámetro
    for (const curso of cursos) {
      curso.horario = horario;
      await CursoRepository.updateCurso(curso);
    }

    // Retornar un mensaje de éxito
    return "Horario actualizado exitosamente";
  } catch (error) {
    // Si ocurre un error, retornar un mensaje de error
    console.error(error);
    return "Error al cargar el horario";
  }
}

// Exportar la función para que pueda ser utilizada en otros archivos
module.exports = cargarHorario;
