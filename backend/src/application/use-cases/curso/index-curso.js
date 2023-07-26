const createCurso = require('./create-curso');
const deleteCurso = require('./delete-curso');
const getCursoById = require('./get-curso-by-id');
const getCursosByLevel = require('./get-cursos-by-level');
const updateCurso = require('./update-curso');

module.exports = {
  createCurso,
  deleteCurso,
  getCursoById,
  getCursosByLevel,
  updateCurso,
};
