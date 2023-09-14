drop database if exists gestmatriculados;

create database gestmatriculados;
use gestmatriculados;

drop table if exists matricula;
drop table if exists imparte;
drop table if exists alumno;
drop table if exists asignatura;
drop table if exists profesor;

create table profesor (  
	dni int NOT NULL,
	nombre varchar(50),
	apellido1 varchar(50),
	apellido2 varchar(50),
	email varchar(50),
	departamento int NOT NULL,
	PRIMARY KEY (dni)
);

create table alumno (  
	dni int NOT NULL,
	nombre varchar(50),
	apellido1 varchar(50),
	apellido2 varchar(50),
	email varchar(50),
	telefono varchar(15),
	PRIMARY KEY (dni)
);

create table asignatura (  
	codigo int NOT NULL,
	nombre varchar(30),
	horas int,
	curso int,
	PRIMARY KEY (codigo)
);

create table imparte (  
	dniprofesor int NOT NULL,
	codigoasignatura int NOT NULL,
	FOREIGN KEY (dniprofesor) REFERENCES profesor(dni),
	FOREIGN KEY (codigoasignatura) REFERENCES asignatura(codigo),
	PRIMARY KEY (dniprofesor, codigoasignatura)
);

create table matricula (
	dnialumno int NOT NULL,
	codigoasignatura int NOT NULL,
	calificacion float,
	FOREIGN KEY (dnialumno) REFERENCES alumno(dni),
	FOREIGN KEY (codigoasignatura) REFERENCES asignatura(codigo),
	PRIMARY KEY (codigoasignatura, dnialumno)
);


create table felicitaciones (
	dni int NOT NULL,
	email varchar(50) NOT NULL,
	felicitacion varchar(50),
	PRIMARY KEY (dni)
);

commit;

insert into profesor(dni,nombre,apellido1,apellido2,email,departamento) values(21111111,'Pascual','Lorente','Arencibia','plorente@cifpzonzamas.es','2');
insert into profesor(dni,nombre,apellido1,apellido2,email,departamento) values(11111112,'Francisco','Atoche','Bethencourt','fatoche@cifpzonzamas.es','1');
insert into profesor(dni,nombre,apellido1,apellido2,email,departamento) values(21111113,'Borja','Brisson','Vega','bbrisson@cifpzonzamas.es','2');
insert into profesor(dni,nombre,apellido1,apellido2,email,departamento) values(21111114,'Laura','Auton','Garcia','lauton@cifpzonzamas.es','2');
insert into profesor(dni,nombre,apellido1,apellido2,email,departamento) values(11111114,'Etiel','Dominguez','Sanchez','edominguez@cifpzonzamas.es','1');
insert into profesor(dni,nombre,apellido1,apellido2,email,departamento) values(11111115,'Ana','Martin','Tenorio','atenorio@cifpzonzamas.es','1');

insert into asignatura(codigo,nombre,horas,curso) values(1,'Programacion',350,1);
insert into asignatura(codigo,nombre,horas,curso) values(2,'Redes',300,1);
insert into asignatura(codigo,nombre,horas,curso) values(3,'Hardware',200,1);
insert into asignatura(codigo,nombre,horas,curso) values(4,'Sistemas',200,2);
insert into asignatura(codigo,nombre,horas,curso) values(5,'Servicios',300,2);

insert into alumno(dni,nombre,apellido1,apellido2,email,telefono) values(31111111,'Angel','Merino','Sastre','amerino@alumno.cifpzonzamas.es','928123456');
insert into alumno(dni,nombre,apellido1,apellido2,email,telefono) values(31111112,'Aitor','Lozano','Bordon','alozano@alumno.cifpzonzamas.es','928222222');
insert into alumno(dni,nombre,apellido1,apellido2,email,telefono) values(31111113,'Ruben','Lopez','Navarro','rlopez@alumno.cifpzonzamas.es','928333333');
insert into alumno(dni,nombre,apellido1,apellido2,email,telefono) values(31111114,'Cristabel','Sosa','Perez','csosa@alumno.cifpzonzamas.es','928124356');
insert into alumno(dni,nombre,apellido1,apellido2,email,telefono) values(31111115,'Elena','Armas','Ramos','earmas@alumno.cifpzonzamas.es','928112222');
insert into alumno(dni,nombre,apellido1,apellido2,email,telefono) values(31111116,'Esther','Gonzalez','Perez','egonza@alumno.cifpzonzamas.es','928223333');
insert into alumno(dni,nombre,apellido1,apellido2,email,telefono) values(31111117,'Cristina','Avila','Fernandez','cavila@alumno.cifpzonzamas.es','928223456');
insert into alumno(dni,nombre,apellido1,apellido2,email,telefono) values(31111118,'Ruben','Alvarez','Fernandez','ralvarez@alumno.cifpzonzamas.es','928222992');
insert into alumno(dni,nombre,apellido1,apellido2,email,telefono) values(31111119,'Lorena','Valdivia','Cabrera','lvaldivia@alumno.cifpzonzamas.es','928336633');
insert into alumno(dni,nombre,apellido1,apellido2,email,telefono) values(31111121,'Melina','Segura','Pastor','msegura@alumno.cifpzonzamas.es','928123457');
insert into alumno(dni,nombre,apellido1,apellido2,email,telefono) values(31111122,'Celia','Romo','Perez','cromo@alumno.cifpzonzamas.es','928211222');
insert into alumno(dni,nombre,apellido1,apellido2,email,telefono) values(31111123,'Andres','Lopez','Betancort','alopez@alumno.cifpzonzamas.es','928322333');

insert into imparte(dniprofesor, codigoasignatura) values(21111111,2);
insert into imparte(dniprofesor, codigoasignatura) values(21111113,2);
insert into imparte(dniprofesor, codigoasignatura) values(21111114,3);
insert into imparte(dniprofesor, codigoasignatura) values(11111115,4);
insert into imparte(dniprofesor, codigoasignatura) values(11111114,5);
insert into imparte(dniprofesor, codigoasignatura) values(21111113,5);
insert into imparte(dniprofesor, codigoasignatura) values(11111115,5);
insert into imparte(dniprofesor, codigoasignatura) values(11111115,3);

insert into matricula(dnialumno,codigoasignatura,calificacion) values(31111111,2,4.0);
insert into matricula(dnialumno,codigoasignatura,calificacion) values(31111112,2,9.5);
insert into matricula(dnialumno,codigoasignatura,calificacion) values(31111113,2,8.5);
insert into matricula(dnialumno,codigoasignatura,calificacion) values(31111114,2,7.5);
insert into matricula(dnialumno,codigoasignatura,calificacion) values(31111115,2,3.5);
insert into matricula(dnialumno,codigoasignatura,calificacion) values(31111116,2,3.5);
insert into matricula(dnialumno,codigoasignatura,calificacion) values(31111117,2,7.5);
insert into matricula(dnialumno,codigoasignatura,calificacion) values(31111118,2,3.5);
insert into matricula(dnialumno,codigoasignatura,calificacion) values(31111119,2,7.5);
insert into matricula(dnialumno,codigoasignatura,calificacion) values(31111111,3,6.5);
insert into matricula(dnialumno,codigoasignatura,calificacion) values(31111112,3,5.5);
insert into matricula(dnialumno,codigoasignatura,calificacion) values(31111111,4,7.5);
insert into matricula(dnialumno,codigoasignatura,calificacion) values(31111112,4,5.5);
insert into matricula(dnialumno,codigoasignatura,calificacion) values(31111113,4,7.5);
insert into matricula(dnialumno,codigoasignatura,calificacion) values(31111114,4,1.5);
insert into matricula(dnialumno,codigoasignatura,calificacion) values(31111111,5,6.5);
insert into matricula(dnialumno,codigoasignatura,calificacion) values(31111114,5,1.5);
insert into matricula(dnialumno,codigoasignatura,calificacion) values(31111115,5,3.5);
insert into matricula(dnialumno,codigoasignatura,calificacion) values(31111116,5,4.5);