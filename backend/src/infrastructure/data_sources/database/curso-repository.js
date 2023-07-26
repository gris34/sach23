const CursoModel = require('../../models/curso');

class CursoRepository {
  async create(cursoData) {
    const curso = new CursoModel(cursoData);
    await curso.save();
    return curso.toObject();
  }

  async update(cursoId, cursoData) {
    const updatedCurso = await CursoModel.findByIdAndUpdate(cursoId, cursoData, { new: true });
    return updatedCurso.toObject();
  }

  async delete(cursoId) {
    await CursoModel.findByIdAndDelete(cursoId);
  }

  async getById(cursoId) {
    const curso = await CursoModel.findById(cursoId).populate('materia');
    return curso ? curso.toObject() : null;
  }

  async getByLevel(nivel) {
    const cursos = await CursoModel.find({ nivel }).populate('materia');
    return cursos.map((curso) => curso.toObject());
  }
}

module.exports = CursoRepository;

