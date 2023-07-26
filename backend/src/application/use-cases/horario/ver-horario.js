// Importar las dependencias necesarias
const CursoRepository = require("../../interfaces/repositories/curso-repository");

// Definir la función que mostrará el horario del profesor
async function verHorario(idProfesor) {
  try {
    // Obtener los cursos asignados al profesor
    const cursos = await CursoRepository.getCursosByProfesor(idProfesor);

    // Retornar el horario de cada curso
    return cursos.map((curso) => ({
      curso: curso.nombre,
      horario: curso.horario,
    }));
  } catch (error) {
    // Si ocurre un error, retornar un mensaje de error
    console.error(error);
    return "Error al obtener el horario";
  }
}

// Exportar la función para que pueda ser utilizada en otros archivos
module.exports = verHorario;
