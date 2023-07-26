const CursoRepository = require('../../interfaces/repositories/curso-repository');

async function updateCurso(curso) {
  try {
    return await CursoRepository.updateCurso(curso);
  } catch (error) {
    console.error(error);
    throw new Error('Error actualizando el curso');
  }
}

module.exports = updateCurso;
