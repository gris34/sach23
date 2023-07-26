const { QueryTypes } = require('sequelize');
const { Materia } = require('../models');

class MateriaRepository {
  async create(nombre, descripcion) {
    try {
      const materia = await Materia.create({ nombre, descripcion });
      return materia.toJSON();
    } catch (error) {
      throw error;
    }
  }

  async findById(id) {
    try {
      const materia = await Materia.findByPk(id);
      if (!materia) {
        throw new Error('Materia no encontrada');
      }
      return materia.toJSON();
    } catch (error) {
      throw error;
    }
  }

  async findAll() {
    try {
      const materias = await Materia.findAll();
      return materias.map((materia) => materia.toJSON());
    } catch (error) {
      throw error;
    }
  }

  async updateById(id, nombre, descripcion) {
    try {
      const materia = await Materia.findByPk(id);
      if (!materia) {
        throw new Error('Materia no encontrada');
      }
      const updatedMateria = await materia.update({ nombre, descripcion });
      return updatedMateria.toJSON();
    } catch (error) {
      throw error;
    }
  }

  async deleteById(id) {
    try {
      const materia = await Materia.findByPk(id);
      if (!materia) {
        throw new Error('Materia no encontrada');
      }
      await materia.destroy();
      return true;
    } catch (error) {
      throw error;
    }
  }

  async findByCursoId(cursoId) {
    try {
      const materias = await Materia.sequelize.query(
        'SELECT m.* FROM materias m JOIN cursos_materias cm ON m.id = cm.materia_id WHERE cm.curso_id = :cursoId',
        {
          type: QueryTypes.SELECT,
          replacements: { cursoId },
          model: Materia,
        }
      );
      return materias.map((materia) => materia.toJSON());
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new MateriaRepository();

