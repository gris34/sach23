const db = require('./connection');

async function createHorario(horario) {
  const result = await db.query('INSERT INTO horarios (dia, hora_inicio, hora_fin, curso_id) VALUES ($1, $2, $3, $4) RETURNING id', [horario.dia, horario.horaInicio, horario.horaFin, horario.cursoId]);
  return result.rows[0].id;
}

async function updateHorario(id, horario) {
  await db.query('UPDATE horarios SET dia = $1, hora_inicio = $2, hora_fin = $3, curso_id = $4 WHERE id = $5', [horario.dia, horario.horaInicio, horario.horaFin, horario.cursoId, id]);
}

async function deleteHorario(id) {
  await db.query('DELETE FROM horarios WHERE id = $1', [id]);
}

async function getHorarioById(id) {
  const result = await db.query('SELECT * FROM horarios WHERE id = $1', [id]);
  return result.rows[0];
}

async function getHorariosByCurso(cursoId) {
  const result = await db.query('SELECT * FROM horarios WHERE curso_id = $1', [cursoId]);
  return result.rows;
}

module.exports = { createHorario, updateHorario, deleteHorario, getHorarioById, getHorariosByCurso };

