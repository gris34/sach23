class Horario {
    constructor(id, horaInicio, horaFin, diaSemana, cursoId, profesorId) {
      this.id = id;
      this.horaInicio = horaInicio;
      this.horaFin = horaFin;
      this.diaSemana = diaSemana;
      this.cursoId = cursoId;
      this.profesorId = profesorId;
    }
  
    getId() {
      return this.id;
    }
  
    getHoraInicio() {
      return this.horaInicio;
    }
  
    getHoraFin() {
      return this.horaFin;
    }
  
    getDiaSemana() {
      return this.diaSemana;
    }
  
    getCursoId() {
      return this.cursoId;
    }
  
    getProfesorId() {
      return this.profesorId;
    }
  
    setId(id) {
      this.id = id;
    }
  
    setHoraInicio(horaInicio) {
      this.horaInicio = horaInicio;
    }
  
    setHoraFin(horaFin) {
      this.horaFin = horaFin;
    }
  
    setDiaSemana(diaSemana) {
      this.diaSemana = diaSemana;
    }
  
    setCursoId(cursoId) {
      this.cursoId = cursoId;
    }
  
    setProfesorId(profesorId) {
      this.profesorId = profesorId;
    }
  }
  
  module.exports = Horario;
  
