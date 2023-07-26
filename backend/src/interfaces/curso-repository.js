const Curso = require('../../domain/entities/curso');

class CursoRepository {
  constructor(database) {
    this.database = database;
  }

  async save(curso) {
    const cursoData = {
      nombre: curso.nombre,
      descripcion: curso.descripcion,
      duracion: curso.duracion,
    };
    const result = await this.database.query('INSERT INTO cursos SET ?', cursoData);
    return new Curso(result.insertId, curso.nombre, curso.descripcion, curso.duracion);
  }

  async getById(cursoId) {
    const result = await this.database.query('SELECT * FROM cursos WHERE id = ?', cursoId);
    if (result.length === 0) {
      return null;
    }
    const cursoData = result[0];
    return new Curso(cursoData.id, cursoData.nombre, cursoData.descripcion, cursoData.duracion);
  }

  async getAll() {
    const result = await this.database.query('SELECT * FROM cursos');
    return result.map((cursoData) => new Curso(cursoData.id, cursoData.nombre, cursoData.descripcion, cursoData.duracion));
  }

  async update(curso) {
    const cursoData = {
      nombre: curso.nombre,
      descripcion: curso.descripcion,
      duracion: curso.duracion,
    };
    await this.database.query('UPDATE cursos SET ? WHERE id = ?', [cursoData, curso.id]);
  }

  async delete(cursoId) {
    await this.database.query('DELETE FROM cursos WHERE id = ?', cursoId);
  }
}

module.exports = CursoRepository;
