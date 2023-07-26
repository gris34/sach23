const express = require('express');
const router = express.Router();
const materiaController = require('../../../application/use-cases/materia/materia-controller.js');

router.get('/', async (req, res) => {
  try {
    const materias = await materiaController.getAll();
    res.status(200).json(materias);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const materia = await materiaController.getById(req.params.id);
    if (!materia) {
      return res.status(404).json({ error: 'Materia not found' });
    }
    res.status(200).json(materia);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const materia = await materiaController.create(req.body);
    res.status(201).json(materia);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const materia = await materiaController.update(req.params.id, req.body);
    if (!materia) {
      return res.status(404).json({ error: 'Materia not found' });
    }
    res.status(200).json(materia);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const materia = await materiaController.delete(req.params.id);
    if (!materia) {
      return res.status(404).json({ error: 'Materia not found' });
    }
    res.status(200).json(materia);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

