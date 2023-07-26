const UsuarioService = require('../../../domain/entities/usuario');
const HttpStatus = require('http-status-codes');

exports.getAll = async (req, res) => {
  try {
    const usuarios = await UsuarioService.getAll();
    res.status(HttpStatus.OK).json(usuarios);
  } catch (error) {
    console.error(error);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
  }
};

exports.getById = async (req, res) => {
  try {
    const usuario = await UsuarioService.getById(req.params.id);
    res.status(HttpStatus.OK).json(usuario);
  } catch (error) {
    console.error(error);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
  }
};

exports.create = async (req, res) => {
  try {
    const usuario = await UsuarioService.create(req.body);
    res.status(HttpStatus.CREATED).json(usuario);
  } catch (error) {
    console.error(error);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
  }
};

exports.update = async (req, res) => {
  try {
    const usuario = await UsuarioService.update(req.params.id, req.body);
    res.status(HttpStatus.OK).json(usuario);
  } catch (error) {
    console.error(error);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
  }
};

exports.delete = async (req, res) => {
  try {
    await UsuarioService.delete(req.params.id);
    res.status(HttpStatus.NO_CONTENT).send();
  } catch (error) {
    console.error(error);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
  }
};
