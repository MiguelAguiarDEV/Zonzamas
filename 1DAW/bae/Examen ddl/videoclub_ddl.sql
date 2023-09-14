drop database if exists videoclub;
create database videoclub;
use videoclub;


create table Director (
    id_director int auto_increment,
    nombre varchar(30),
    nacionalidad varchar(30) not null,
    constraint dir_id_pk primary key (id_director),
    constraint dir_nom_uq unique (nombre)
);

alter table Director auto_increment = 101;

create table Actor (
    id_actor int auto_increment,
    nombre varchar(30),
    nacionalidad varchar(30) not null,
    sexo varchar(30) check (sexo in ("hombre","mujer","no binario")),
    constraint act_id_pk primary key (id_actor),
    constraint act_nom_uq unique (nombre)
) ;

alter table Actor auto_increment = 201;

create table Pelicula (
    id_pelicula int auto_increment, 
    titulo varchar(30) not null,
    nacionalidad varchar(30) not null,
    productor varchar(30) not null,
    fecha date not null,
    director int,
    constraint pel_dir_fk foreign key (director) references Director(id_director) on delete cascade,
    constraint pel_id_pk primary key (id_pelicula)
);

alter table Pelicula auto_increment = 301;

create table Participa (
    id_pelicula int,
    id_actor int,
    personaje varchar(30) not null,
    constraint par_idpel_fk1 foreign key (id_pelicula) references Pelicula(id_pelicula),
    constraint par_idact_fk2 foreign key (id_actor) references Actor(id_actor),
    constraint par_pel_act_pk primary key (id_pelicula,id_actor)
);

create table Socio (
    dni varchar(30),
    nombre varchar(30),
    direccion varchar(30),
    telefono varchar(30),
    dni_avalador varchar(30),
    constraint soc_dni_pk primary key (dni),
    constraint soc_nom_uq unique (nombre),
    constraint soc_tlf_uq unique (telefono),
    constraint soc_dniav_fk1 foreign key (dni_avalador) references Socio(dni) on delete set null
);

create table Ejemplar (
    id_pelicula int,
    id_ejemplar int,
    conservacion varchar(30) not null check (conservacion in ('bueno', 'malo', 'regular')),
    constraint eje_idpel_fk1 foreign key (id_pelicula) references Pelicula(id_pelicula),
    constraint eje_peleje_pk primary key (id_pelicula,id_ejemplar)
);

create table Alquilado (
    id_pelicula int,
    id_ejemplar int,
    dni_socio varchar(30),
    fecha_inicio date not null,
    fecha_devolu date not null,
    constraint alq_fech_ck check (fecha_inicio < fecha_devolu),
    constraint alq_peleje_fk1 foreign key (id_pelicula,id_ejemplar) references Ejemplar(id_pelicula,id_ejemplar),
    constraint alq_dni_fk2 foreign key (dni_socio) references Socio(dni),
    constraint alq_pelejedni_pk primary key (id_pelicula,id_ejemplar,dni_socio)
);

