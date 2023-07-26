class Persona {
    constructor(nombre, apellido, email, rol) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.email = email;
      this.rol = rol;
    }
  
    getNombre() {
      return this.nombre;
    }
  
    getApellido() {
      return this.apellido;
    }
  
    getEmail() {
      return this.email;
    }
  
    getRol() {
      return this.rol;
    }
  
    setNombre(nombre) {
      this.nombre = nombre;
    }
  
    setApellido(apellido) {
      this.apellido = apellido;
    }
  
    setEmail(email) {
      this.email = email;
    }
  
    setRol(rol) {
      this.rol = rol;
    }
  }
  
  module.exports = Persona;
  
