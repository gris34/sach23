const CursoRepository = require('../../interfaces/repositories/curso-repository');

async function getCursoById(id) {
  try {
    return await CursoRepository.getCursoById(id);
  } catch (error) {
    console.error(error);
    throw new Error('Error obteniendo el curso');
  }
}

module.exports = getCursoById;
