class HorarioRepository {
    constructor(database) {
      this.db = database;
    }
  
    async marcarEntradaCurso(idCurso, idProfesor, idMateria) {
      // validar que el curso existe
      const curso = await this.db.findCursoById(idCurso);
      if (!curso) {
        throw new Error('El curso no existe');
      }
  
      // validar que el profesor está asignado al curso
      const asignacionProfesor = await this.db.findAsignacionProfesorCurso(idCurso, idProfesor);
      if (!asignacionProfesor) {
        throw new Error('El profesor no está asignado al curso');
      }
  
      // validar que la materia está asignada al curso
      const asignacionMateria = await this.db.findAsignacionMateriaCurso(idCurso, idMateria);
      if (!asignacionMateria) {
        throw new Error('La materia no está asignada al curso');
      }
  
      // marcar la entrada del profesor al curso en la base de datos
      const entradaCurso = { idCurso, idProfesor, idMateria, fechaHora: new Date(), tipo: 'entrada' };
      await this.db.saveEntradaCurso(entradaCurso);
  
      return entradaCurso;
    }
  
    async marcarSalidaCurso(idCurso, idProfesor, idMateria) {
      // validar que el curso existe
      const curso = await this.db.findCursoById(idCurso);
      if (!curso) {
        throw new Error('El curso no existe');
      }
  
      // validar que el profesor está asignado al curso
      const asignacionProfesor = await this.db.findAsignacionProfesorCurso(idCurso, idProfesor);
      if (!asignacionProfesor) {
        throw new Error('El profesor no está asignado al curso');
      }
  
      // validar que la materia está asignada al curso
      const asignacionMateria = await this.db.findAsignacionMateriaCurso(idCurso, idMateria);
      if (!asignacionMateria) {
        throw new Error('La materia no está asignada al curso');
      }
  
      // marcar la salida del profesor del curso en la base de datos
      const salidaCurso = { idCurso, idProfesor, idMateria, fechaHora: new Date(), tipo: 'salida' };
      await this.db.saveSalidaCurso(salidaCurso);
  
      return salidaCurso;
    }
  
    async getHorarioCursos(idProfesor) {
      // validar que el profesor existe
      const profesor = await this.db.findProfesorById(idProfesor);
      if (!profesor) {
        throw new Error('El profesor no existe');
      }
  
      // obtener el horario de cursos del profesor
      const cursos = await this.db.findCursosByProfesorId(idProfesor);
      const horarioCursos = cursos.map((curso) => {
        const horarioCurso = { curso };
        horarioCurso.horario = this.db.findHorarioCursoByCursoId(curso.id);
        return horarioCurso;
      });
  
      return horarioCursos;
    }
  }
  