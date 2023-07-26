const mongoose = require('mongoose');

const MONGO_URI = 'mongodb://localhost:27017/sach23';

const connectToDatabase = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('Connected to database');
  } catch (error) {
    console.log('Error connecting to database', error);
  }
};

module.exports = connectToDatabase;

module.exports = {
  dbConfig: {
    user: 'usuario',
    password: 'contraseña',
    server: 'localhost\\SQLEXPRESS',
    database: 'nombre_de_la_base_de_datos',
    options: {
      encrypt: true // si tu base de datos SQL Express está configurada para usar SSL
    }
  }
};


