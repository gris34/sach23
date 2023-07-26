const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');

const swaggerSetup = require('./swagger');
const cursoRouter = require('./routes/curso');

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cors());
app.use(helmet());
app.use(compression());

// Routes
app.use('/cursos', cursoRouter);

// Swagger
swaggerSetup(app);

// Error handling
app.use((error, req, res, next) => {
  console.error(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message, data });
});

module.exports = app;
