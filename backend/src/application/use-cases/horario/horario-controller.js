const HorarioService = require('../../../domain/entities/horario');
const HttpStatus = require('http-status-codes');

exports.getAll = async (req, res) => {
  try {
    const horarios = await HorarioService.getAll();
    res.status(HttpStatus.OK).json(horarios);
  } catch (error) {
    console.error(error);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
  }
};

exports.getById = async (req, res) => {
  try {
    const horario = await HorarioService.getById(req.params.id);
    res.status(HttpStatus.OK).json(horario);
  } catch (error) {
    console.error(error);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
  }
};

exports.create = async (req, res) => {
  try {
    const horario = await HorarioService.create(req.body);
    res.status(HttpStatus.CREATED).json(horario);
  } catch (error) {
    console.error(error);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
  }
};

exports.update = async (req, res) => {
  try {
    const horario = await HorarioService.update(req.params.id, req.body);
    res.status(HttpStatus.OK).json(horario);
  } catch (error) {
    console.error(error);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
  }
};

exports.delete = async (req, res) => {
  try {
    await HorarioService.delete(req.params.id);
    res.status(HttpStatus.NO_CONTENT).send();
  } catch (error) {
    console.error(error);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
  }
};
