const bcrypt = require('bcrypt');
const SALT_ROUNDS = 10;

function hashPassword(password) {
  return bcrypt.hash(password, SALT_ROUNDS);
}

function comparePasswords(password, hashedPassword) {
  return bcrypt.compare(password, hashedPassword);
}

module.exports = {
  hashPassword,
  comparePasswords,
};

