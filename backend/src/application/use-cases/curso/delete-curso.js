const CursoRepository = require('../../interfaces/repositories/curso-repository');

async function deleteCurso(id) {
  try {
    return await CursoRepository.deleteCurso(id);
  } catch (error) {
    console.error(error);
    throw new Error('Error eliminando el curso');
  }
}

module.exports = deleteCurso;
