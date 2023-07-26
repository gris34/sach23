class Materia {
    constructor(nombre, descripcion) {
      this.nombre = nombre;
      this.descripcion = descripcion;
    }
  
    setNombre(nombre) {
      this.nombre = nombre;
    }
  
    setDescripcion(descripcion) {
      this.descripcion = descripcion;
    }
  
    getNombre() {
      return this.nombre;
    }
  
    getDescripcion() {
      return this.descripcion;
    }
  }
  
  module.exports = Materia;
  
