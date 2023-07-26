const express = require('express');
const router = express.Router();
const personaController = require('../../../application/use-cases/persona/persona-controller');

router.get('/personas', personaController.getAll);
router.get('/personas/:id', personaController.getById);
router.post('/personas', personaController.create);
router.put('/personas/:id', personaController.update);
router.delete('/personas/:id', personaController.delete);

module.exports = router;

