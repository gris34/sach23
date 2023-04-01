CREATE TABLE [Curso] (
  [id] Int PRIMARY KEY,
  [nivel] Varchar,
  [grado] Int,
  [especialidad] Varchar,
  [codigo_qr] Varchar
)
GO

CREATE TABLE [Materia] (
  [id] Int PRIMARY KEY,
  [nombre] Varchar,
  [descripcion] Varchar
)
GO

CREATE TABLE [Profesor_Curso_Materia] (
  [id] Int PRIMARY KEY,
  [profesor_id] Int,
  [curso_id] Int,
  [materia_id] Int,
  [limite_horario] Int
)
GO

CREATE TABLE [Horario] (
  [id] Int PRIMARY KEY,
  [profesor_curso_materia_id] Int,
  [dia_semana] Varchar,
  [hora_inicio] Time,
  [hora_fin] Time
)
GO

CREATE TABLE [Usuario] (
  [id] Int PRIMARY KEY,
  [id_persona] int,
  [email] Varchar,
  [contrasenha] Varchar,
  [rol] Varchar
)
GO

CREATE TABLE [Persona] (
  [id] Int PRIMARY KEY,
  [Nombre] Varchar,
  [Apellido] Varchar,
  [NumeroDocumento] Varchar,
  [Foto] blob,
  [correo] Varchar
)
GO

ALTER TABLE [Profesor_Curso_Materia] ADD FOREIGN KEY ([profesor_id]) REFERENCES [Usuario] ([id])
GO

ALTER TABLE [Profesor_Curso_Materia] ADD FOREIGN KEY ([curso_id]) REFERENCES [Curso] ([id])
GO

ALTER TABLE [Profesor_Curso_Materia] ADD FOREIGN KEY ([materia_id]) REFERENCES [Materia] ([id])
GO

ALTER TABLE [Horario] ADD FOREIGN KEY ([profesor_curso_materia_id]) REFERENCES [Profesor_Curso_Materia] ([id])
GO

ALTER TABLE [Persona] ADD FOREIGN KEY ([id]) REFERENCES [Usuario] ([id_persona])
GO
