const express = require('express');
const CursoController = require('../../../application/use-cases/curso/curso-controller');

const router = express.Router();

router.get('/cursos', CursoController.getAll);
router.get('/cursos/:id', CursoController.getById);
router.post('/cursos', CursoController.create);
router.put('/cursos/:id', CursoController.update);
router.delete('/cursos/:id', CursoController.delete);

module.exports = router;

