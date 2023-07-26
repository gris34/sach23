const jwt = require('jsonwebtoken');
const { ROLES } = require('../../infrastructure/data_sources/database/usuario-repository');

const authMiddleware = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: 'No se proporcionó un token de autorización.' });
  }

  const [type, token] = authorization.split(' ');

  if (type !== 'Bearer') {
    return res.status(401).json({ error: 'Token de autorización inválido.' });
  }

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    if (!decodedToken) {
      return res.status(401).json({ error: 'Token de autorización inválido.' });
    }

    const { rol } = decodedToken;

    switch (rol) {
      case ROLES.PROFESOR:
        // solo se permite acceso a las rutas para leer QR y marcar entrada/salida del curso asignado
        if (req.path !== '/leerqr' && req.path !== '/marcar-asistencia') {
          return res.status(403).json({ error: 'Acceso denegado.' });
        }
        break;
      case ROLES.ALUMNO:
        // solo se permite acceso a la ruta para ver el horario de cursos
        if (req.path !== '/ver-horario') {
          return res.status(403).json({ error: 'Acceso denegado.' });
        }
        break;
      case ROLES.CELADOR:
        // se permite acceso a las rutas para ABM cursos, materias, profesores y asignación de horarios de cursos
        if (req.path !== '/abm-cursos' && req.path !== '/abm-materias' && req.path !== '/abm-profesores' && req.path !== '/asignar-horarios') {
          return res.status(403).json({ error: 'Acceso denegado.' });
        }
        break;
      default:
        return res.status(403).json({ error: 'Acceso denegado.' });
    }

    req.user = decodedToken;
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ error: 'Token de autorización inválido.' });
  }
};

module.exports = authMiddleware;

