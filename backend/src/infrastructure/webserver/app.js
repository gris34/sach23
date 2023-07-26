const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json'); // o el nombre de tu archivo de configuración de Swagger


const app = express();

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());

const cursoRouter = require('./routes/curso-routes');
const materiaRouter = require('./routes/materia-routes');
const horarioRouter = require('./routes/horario-routes');
const usuarioRouter = require('./routes/usuario-routes');
const personaRouter = require('./routes/persona-routes');

app.use('/api/curso', cursoRouter);

app.use('/api/materia', materiaRouter);
app.use('/api/horario', horarioRouter);
app.use('/api/usuario', usuarioRouter);
app.use('/api/persona', personaRouter);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo se rompio!');
});

module.exports = app;
const sql = require('mssql');
const config = require('./connection.js');

const dbConfig = config.dbConfig;

// Configurar la conexión a la base de datos
sql.connect(dbConfig, err => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
  } else {
    console.log('Conexión exitosa a la base de datos');
  }
});


