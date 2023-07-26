class Usuario {
    constructor(id, nombre, apellido, correo, contrasena, rol) {
      this.id = id;
      this.nombre = nombre;
      this.apellido = apellido;
      this.correo = correo;
      this.contrasena = contrasena;
      this.rol = rol;
    }
  
    // Métodos getter y setter para cada propiedad
    get id() {
      return this._id;
    }
    set id(value) {
      this._id = value;
    }
  
    get nombre() {
      return this._nombre;
    }
    set nombre(value) {
      this._nombre = value;
    }
  
    get apellido() {
      return this._apellido;
    }
    set apellido(value) {
      this._apellido = value;
    }
  
    get correo() {
      return this._correo;
    }
    set correo(value) {
      this._correo = value;
    }
  
    get contrasena() {
      return this._contrasena;
    }
    set contrasena(value) {
      this._contrasena = value;
    }
  
    get rol() {
      return this._rol;
    }
    set rol(value) {
      this._rol = value;
    }
  }
  
  module.exports = Usuario;
  
