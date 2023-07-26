const express = require('express');
const router = express.Router();

const { createPersona, getPersonas, getPersonaById, updatePersona, deletePersona } = require('../../application/use_cases/persona');

// Ruta para crear una nueva persona
router.post('/', async (req, res, next) => {
  try {
    const persona = await createPersona(req.body);
    res.status(201).json(persona);
  } catch (error) {
    next(error);
  }
});

// Ruta para obtener todas las personas
router.get('/', async (req, res, next) => {
  try {
    const personas = await getPersonas();
    res.status(200).json(personas);
  } catch (error) {
    next(error);
  }
});

// Ruta para obtener una persona por su ID
router.get('/:id', async (req, res, next) => {
  try {
    const persona = await getPersonaById(req.params.id);
    res.status(200).json(persona);
  } catch (error) {
    next(error);
  }
});

// Ruta para actualizar una persona por su ID
router.put('/:id', async (req, res, next) => {
  try {
    const persona = await updatePersona(req.params.id, req.body);
    res.status(200).json(persona);
  } catch (error) {
    next(error);
  }
});

// Ruta para eliminar una persona por su ID
router.delete('/:id', async (req, res, next) => {
  try {
    await deletePersona(req.params.id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
});

module.exports = router;
