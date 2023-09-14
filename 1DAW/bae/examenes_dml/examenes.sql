drop database if exists sistemaventas;
create database sistemaventas;
use sistemaventas;




create table Alumno (
    num_matricula int primary key AUTO_INCREMENT,
    nombre varchar(20) not null,
    grupo varchar(2)
);

create table Escrito (
    num_examen int primary key AUTO_INCREMENT,
    num_preguntas int,
    fecha date
);

create table Practico (
    codigo_practica int primary key AUTO_INCREMENT,
    modalidad varchar(20),
    dificultad varchar(10) not null check(dificultad in('Facil', 'Medio', 'Dificil'))
);

create table Profesor ( 
    CI int primary key AUTO_INCREMENT,
    nombre varchar(20)
);

create table Diseña (
    codigo_practica int,
    CI int,
    fecha_diseño date,
    foreign key (codigo_practica) references Practico(codigo_practica) on delete cascade,
    foreign key (CI) references Profesor(CI) on delete cascade,
    primary key (codigo_practica,CI,fecha_diseño)
);

create table realizaPractico (
    codigo_practica int,
    num_matricula int,
    fecha date,
    nota decimal(2,2),
    foreign key (codigo_practica) references Practico(codigo_practica) on delete cascade,
    foreign key (num_matricula) references Alumno(num_matricula) on delete cascade,
    primary key (codigo_practica,num_matricula)
);

alter table Alumno AUTO_INCREMENT = 100;
alter table Escrito AUTO_INCREMENT = 200;
alter table Profesor AUTO_INCREMENT = 300;


insert into Alumno (nombre, grupo)
values ("Miguel Alejandro", "1C"),("Fran Atocha", "2B");