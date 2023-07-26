const { Usuario } = require('../../../domain/entities/usuario');

class UsuarioRepository {
  constructor(db) {
    this.db = db;
  }

  async getById(id) {
    const query = 'SELECT * FROM usuarios WHERE id = ?';
    const params = [id];
    const [row] = await this.db.query(query, params);
    if (!row) return null;

    return new Usuario({
      id: row.id,
      nombre: row.nombre,
      email: row.email,
      rol: row.rol,
      password: row.password
    });
  }

  async getByEmail(email) {
    const query = 'SELECT * FROM usuarios WHERE email = ?';
      const params = [email];
      const [row] = await this.db.query(query, params);
      if (!row) return null;

    return new Usuario({
      id: row.id,
      nombre: row.nombre,
      email: row.email,
      rol: row.rol,
      password: row.password
    });
  }

  async create(usuario) {
    const query = 'INSERT INTO usuarios (nombre, email, rol, password) VALUES (?, ?, ?, ?)';
    const params = [usuario.nombre, usuario.email, usuario.rol, usuario.password];
    const { insertId } = await this.db.query(query, params);

    return new Usuario({ ...usuario, id: insertId });
  }

  async delete(id) {
    const query = 'DELETE FROM usuarios WHERE id = ?';
    const params = [id];
    await this.db.query(query, params);
  }
}

module.exports = UsuarioRepository;

