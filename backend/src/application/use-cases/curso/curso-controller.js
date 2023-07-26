console.log("El archivo curso-controller se ha cargado correctamente.");

const CursoService = require('../../../domain/entities/curso');
const HttpStatus = require('http-status-codes');


/**
 * 
 * @swagger
 * tags:
 *   name: Cursos
 *   description: Operaciones con cursos
 */

/**
 * @swagger
 * /cursos:
 *   get:
 *     summary: Obtener todos los cursos
 *     tags: [Cursos]
 *     responses:
 *       200:
 *         description: Lista de cursos obtenida correctamente
 *       500:
 *         description: Error interno del servidor
 */
exports.getAll = async (req, res) => {
  try {
    const cursos = await CursoService.getAll();
    res.status(HttpStatus.OK).json(cursos);
  } catch (error) {
    console.error(error);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
  }
};

/**
 * @swagger
 * /cursos/{id}:
 *   get:
 *     summary: Obtener un curso por ID
 *     tags: [Cursos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del curso a obtener
 *     responses:
 *       200:
 *         description: Curso obtenido correctamente
 *       404:
 *         description: Curso no encontrado
 *       500:
 *         description: Error interno del servidor
 */

exports.getById = async (req, res) => {
  try {
    const curso = await CursoService.getById(req.params.id);
    res.status(HttpStatus.OK).json(curso);
  } catch (error) {
    console.error(error);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
  }
};

exports.create = async (req, res) => {
  try {
    const curso = await CursoService.create(req.body);
    res.status(HttpStatus.CREATED).json(curso);
  } catch (error) {
    console.error(error);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
  }
};

exports.update = async (req, res) => {
  try {
    const curso = await CursoService.update(req.params.id, req.body);
    res.status(HttpStatus.OK).json(curso);
  } catch (error) {
    console.error(error);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
  }
};

exports.delete = async (req, res) => {
  try {
    await CursoService.delete(req.params.id);
    res.status(HttpStatus.NO_CONTENT).send();
  } catch (error) {
    console.error(error);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
  }
};
