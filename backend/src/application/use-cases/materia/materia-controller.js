const MateriaService = require('../../../domain/entities/materia');
const HttpStatus = require('http-status-codes');

exports.getAll = async (req, res) => {
  try {
    const materias = await MateriaService.getAll();
    res.status(HttpStatus.OK).json(materias);
  } catch (error) {
    console.error(error);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
  }
};

exports.getById = async (req, res) => {
  try {
    const materia = await MateriaService.getById(req.params.id);
    res.status(HttpStatus.OK).json(materia);
  } catch (error) {
    console.error(error);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
  }
};

exports.create = async (req, res) => {
  try {
    const materia = await MateriaService.create(req.body);
    res.status(HttpStatus.CREATED).json(materia);
  } catch (error) {
    console.error(error);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
  }
};

exports.update = async (req, res) => {
  try {
    const materia = await MateriaService.update(req.params.id, req.body);
    res.status(HttpStatus.OK).json(materia);
  } catch (error) {
    console.error(error);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
  }
};

exports.delete = async (req, res) => {
  try {
    await MateriaService.delete(req.params.id);
    res.status(HttpStatus.NO_CONTENT).send();
  } catch (error) {
    console.error(error);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
  }
};
