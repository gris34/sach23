const CursoRepository = require("../../interfaces/repositories/curso-repository");

async function crearCurso(curso) {
  try {
    // Agregar el curso a la base de datos
    const result = await CursoRepository.addCurso(curso);

    // Retornar el id del nuevo curso
    return result.id;
  } catch (error) {
    console.error(error);
    throw new Error("Error al crear el curso");
  }
}

module.exports = crearCurso;
