Table Curso {
  id Int [primary key]
  nivel Varchar
  grado Int
  especialidad Varchar
  codigo_qr Varchar
}

Table Materia {
  id Int [primary key]
  nombre Varchar
  descripcion Varchar
}



Table Profesor_Curso_Materia {
  id Int [primary key]
  profesor_id Int
  curso_id Int
  materia_id Int
  limite_horario Int

}

Table Horario {
  id Int [primary key]
  profesor_curso_materia_id Int
  dia_semana Varchar
  hora_inicio Time
  hora_fin Time
}

Table Usuario {
  id Int [primary key]
  id_persona int
  email Varchar
  contrasenha Varchar
  rol Varchar
}

Table Persona {
  id Int [primary key]
  Nombre Varchar
  Apellido Varchar
  NumeroDocumento Varchar
  Foto blob
  correo Varchar
}


Ref: Profesor_Curso_Materia.profesor_id > Usuario.id
Ref: Profesor_Curso_Materia.curso_id > Curso.id
Ref: Profesor_Curso_Materia.materia_id > Materia.id
Ref: Horario.profesor_curso_materia_id > Profesor_Curso_Materia.id
Ref: Persona.id > Usuario.id_persona


