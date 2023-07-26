const express = require('express');
const { HorarioController } = require('../../../../src/application/use-cases/horario/horario-controller.js');
const { authMiddleware } = require('../../../../src/application/middlewares/auth');

const router = express.Router();

// GET /horarios
router.get('/', authMiddleware, async (req, res, next) => {
  try {
    const horarios = await HorarioController.getAll();
    res.json(horarios);
  } catch (error) {
    next(error);
  }
});

// GET /horarios/:id
router.get('/:id', authMiddleware, async (req, res, next) => {
  const { id } = req.params;
  try {
    const horario = await HorarioController.getById(id);
    res.json(horario);
  } catch (error) {
    next(error);
  }
});

// POST /horarios
router.post('/', authMiddleware, async (req, res, next) => {
  const { nombre, dia, horaInicio, horaFin } = req.body;
  try {
    const newHorario = await HorarioController.create({ nombre, dia, horaInicio, horaFin });
    res.json(newHorario);
  } catch (error) {
    next(error);
  }
});

// PUT /horarios/:id
router.put('/:id', authMiddleware, async (req, res, next) => {
  const { id } = req.params;
  const { nombre, dia, horaInicio, horaFin } = req.body;
  try {
    const updatedHorario = await HorarioController.updateById(id, { nombre, dia, horaInicio, horaFin });
    res.json(updatedHorario);
  } catch (error) {
    next(error);
  }
});

// DELETE /horarios/:id
router.delete('/:id', authMiddleware, async (req, res, next) => {
  const { id } = req.params;
  try {
    await HorarioController.deleteById(id);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

module.exports = router;

