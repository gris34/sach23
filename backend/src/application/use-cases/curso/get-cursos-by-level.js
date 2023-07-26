const CursoRepository = require('../../interfaces/repositories/curso-repository');

async function getCursosByLevel(nivel) {
  try {
    return await CursoRepository.getCursosByLevel(nivel);
  } catch (error) {
    console.error(error);
    throw new Error('Error obteniendo los cursos');
  }
}

module.exports = getCursosByLevel;
