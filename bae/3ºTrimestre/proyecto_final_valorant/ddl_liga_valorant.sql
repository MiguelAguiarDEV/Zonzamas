DROP DATABASE IF EXISTS liga_valorant;

CREATE DATABASE liga_valorant;

USE liga_valorant;

DROP TABLE IF EXISTS persona;

DROP TABLE IF EXISTS jugador;


COMMIT;


CREATE TABLE personas (
    cod_persona INT AUTO_INCREMENT,
    nombre VARCHAR(30),
    apellido1 VARCHAR(30),
    apellido2 VARCHAR(30),
    edad INT,
    nacionalidad VARCHAR(30),
    CONSTRAINT pk_persona PRIMARY KEY (cod_persona)
);

ALTER TABLE personas AUTO_INCREMENT = 0;


CREATE TABLE jugadores (
    cod_jugador INT,
    nick VARCHAR(20),
    CONSTRAINT pk_cod_jugador PRIMARY KEY (cod_jugador),
    CONSTRAINT fk_cod_jugador FOREIGN KEY (cod_jugador) REFERENCES personas(cod_persona)
);


CREATE TABLE entrendores (
    cod_entrenador INT,
    nombre VARCHAR(30),
    CONSTRAINT pk_cod_entrenador PRIMARY KEY (cod_entrenador),
    CONSTRAINT fk_cod_entrenador FOREIGN KEY (cod_entrenador) REFERENCES personas(cod_persona)
);

CREATE TABLE equipos (
    cod_equipo INT,
    nombre_equipo VARCHAR(30),
    cod_jugador1 INT default NULL,
    cod_jugador2 INT default NULL,
    cod_jugador3 INT default NULL,
    cod_jugador4 INT default NULL,
    cod_jugador5 INT default NULL,
    cod_suplente6 INT default NULL,
    cod_entrenador INT default NULL,
    CONSTRAINT pk_cod_eq PRIMARY KEY (cod_equipo)
);



CREATE TABLE partidos (
    cod_equipo_1 INT,
    cod_equipo_2 INT,
    fecha DATE,
    rondas_equipo1 INT,
    rondas_equipo2 INT,
    CONSTRAINT pk_cod_eq1_eq2_fecha PRIMARY KEY (cod_equipo_1,cod_equipo_2,fecha),
    CONSTRAINT fk_eq1 FOREIGN KEY (cod_equipo_1) REFERENCES equipos(cod_equipo),
    CONSTRAINT fk_eq2 FOREIGN KEY (cod_equipo_2) REFERENCES equipos(cod_equipo)    
);


CREATE TABLE clasificacion (
    posicion INT,
    cod_equipo INT,
    nombre_eq VARCHAR(30),
    CONSTRAINT fk_cod_eq PRIMARY KEY (cod_equipo)
);

COMMIT;

