const express = require('express');
const router = express.Router();
const usuarioController = require('../../application/use-cases/usuario/usuario-controller');
const authMiddleware = require('../../application/middlewares/auth');

router.get('/', authMiddleware, async (req, res, next) => {
  try {
    const usuarios = await usuarioController.getAllUsuarios();
    res.status(200).json(usuarios);
  } catch (error) {
    next(error);
  }
});

router.get('/by-role', authMiddleware, async (req, res, next) => {
  try {
    const { rol } = req.query;
    const usuarios = await usuarioController.getUsuariosByRol(rol);
    res.status(200).json(usuarios);
  } catch (error) {
    next(error);
  }
});

router.post('/', authMiddleware, async (req, res, next) => {
  try {
    const { username, email, password, personaId, rol } = req.body;
    const usuario = await usuarioController.createUsuario(username, email, password, personaId, rol);
    res.status(201).json(usuario);
  } catch (error) {
    next(error);
  }
});

module.exports = router;

