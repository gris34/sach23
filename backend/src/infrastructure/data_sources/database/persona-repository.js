const { pool } = require('./connection');

async function crearPersona(persona) {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const queryPersona = 'INSERT INTO personas (nombre, apellido, dni, correo, telefono) VALUES ($1, $2, $3, $4, $5) RETURNING *';
    const resPersona = await client.query(queryPersona, [persona.nombre, persona.apellido, persona.dni, persona.correo, persona.telefono]);
    const personaId = resPersona.rows[0].id;
    const queryUsuario = 'INSERT INTO usuarios (rol, contrasena, persona_id) VALUES ($1, $2, $3) RETURNING *';
    const resUsuario = await client.query(queryUsuario, [persona.rol, persona.contrasena, personaId]);
    await client.query('COMMIT');
    return { persona: resPersona.rows[0], usuario: resUsuario.rows[0] };
  } catch (e) {
    await client.query('ROLLBACK');
    throw e;
  } finally {
    client.release();
  }
}

async function getPersonaById(personaId) {
  const query = 'SELECT p.*, u.rol FROM personas p INNER JOIN usuarios u ON p.id = u.persona_id WHERE p.id = $1';
  const values = [personaId];
  const { rows } = await pool.query(query, values);
  return rows[0];
}

async function deletePersonaById(personaId) {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const query = 'DELETE FROM personas WHERE id = $1 RETURNING *';
    const { rows } = await client.query(query, [personaId]);
    const queryUsuario = 'DELETE FROM usuarios WHERE persona_id = $1 RETURNING *';
    const { rows: usuarioRows } = await client.query(queryUsuario, [personaId]);
    await client.query('COMMIT');
    return { persona: rows[0], usuario: usuarioRows[0] };
  } catch (e) {
    await client.query('ROLLBACK');
    throw e;
  } finally {
    client.release();
  }
}

async function updatePersona(persona) {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const queryPersona = 'UPDATE personas SET nombre = $1, apellido = $2, dni = $3, correo = $4, telefono = $5 WHERE id = $6 RETURNING *';
    const resPersona = await client.query(queryPersona, [persona.nombre, persona.apellido, persona.dni, persona.correo, persona.telefono, persona.id]);
    const queryUsuario = 'UPDATE usuarios SET rol = $1, contrasena = $2 WHERE persona_id = $3 RETURNING *';
    const resUsuario = await client.query(queryUsuario, [persona.rol, persona.contrasena, persona.id]);
    await client.query('COMMIT');
    return { persona: resPersona.rows[0], usuario: resUsuario.rows[0] };
  } catch (e) {
    await client.query('ROLLBACK');
    throw e;
  } finally {
    client.release();
  }
}

module.exports = {
  crearPersona,
  getPersonaById,
  deletePersonaById,
  updatePersona,
};

