// Importar las dependencias necesarias
const createPersona = require("./create-persona");
const deletePersona = require("./delete-persona");
const getPersonaById = require("./get-persona-by-id");
const updatePersona = require("./update-persona");

// Exportar las funciones
module.exports = {
  createPersona,
  deletePersona,
  getPersonaById,
  updatePersona,
};
