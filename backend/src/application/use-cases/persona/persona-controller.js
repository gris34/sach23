const PersonaService = require('../../../domain/entities/persona');
const HttpStatus = require('http-status-codes');

exports.getAll = async (req, res) => {
  try {
    const personas = await PersonaService.getAll();
    res.status(HttpStatus.OK).json(personas);
  } catch (error) {
    console.error(error);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
  }
};

exports.getById = async (req, res) => {
  try {
    const persona = await PersonaService.getById(req.params.id);
    res.status(HttpStatus.OK).json(persona);
  } catch (error) {
    console.error(error);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
  }
};

exports.create = async (req, res) => {
  try {
    const persona = await PersonaService.create(req.body);
    res.status(HttpStatus.CREATED).json(persona);
  } catch (error) {
    console.error(error);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
  }
};

exports.update = async (req, res) => {
  try {
    const persona = await PersonaService.update(req.params.id, req.body);
    res.status(HttpStatus.OK).json(persona);
  } catch (error) {
    console.error(error);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
  }
};

exports.delete = async (req, res) => {
  try {
    await PersonaService.delete(req.params.id);
    res.status(HttpStatus.NO_CONTENT).send();
  } catch (error) {
    console.error(error);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
  }
};
