DROP DATABASE IF EXISTS liga_valorant;

CREATE DATABASE liga_valorant;

USE liga_valorant;

DROP TABLE IF EXISTS personas;

DROP TABLE IF EXISTS jugadores;

DROP TABLE IF EXISTS partidas;

DROP TABLE IF EXISTS equipos;

DROP TABLE IF EXISTS entrenadores;

DROP TABLE IF EXISTS clasificacion;

COMMIT;

CREATE TABLE personas (
    cod_persona INT AUTO_INCREMENT,
    nombre VARCHAR(30),
    apellido1 VARCHAR(30),
    apellido2 VARCHAR(30),
    edad INT,
    nacionalidad VARCHAR(30),
    CONSTRAINT pk_personas PRIMARY KEY (cod_persona)
);

ALTER TABLE personas AUTO_INCREMENT = 1;

CREATE TABLE jugadores (
    cod_jugador INT,
    nick VARCHAR(20),
    CONSTRAINT pk_jugadores PRIMARY KEY (cod_jugador),
    COANSTRAINT fk_jugadores_cod_persona FOREIGN KEY (cod_jugador) REFERENCES personas(cod_persona)
);

CREATE TABLE entrenadores (
    cod_entrenador INT,
    nombre VARCHAR(30),
    CONSTRAINT pk_entrenadores PRIMARY KEY (cod_entrenador),
    CONSTRAINT fk_entrenadores_cod_persona FOREIGN KEY (cod_entrenador) REFERENCES personas(cod_persona)
);

CREATE TABLE equipos (
    cod_equipo INT AUTO_INCREMENT,
    nombre_equipo VARCHAR(30),
    cod_jugador1 INT DEFAULT NULL,
    cod_jugador2 INT DEFAULT NULL,
    cod_jugador3 INT DEFAULT NULL,
    cod_jugador4 INT DEFAULT NULL,
    cod_jugador5 INT DEFAULT NULL,
    cod_suplente6 INT DEFAULT NULL,
    cod_entrenador INT DEFAULT NULL,
    CONSTRAINT pk_equipos PRIMARY KEY (cod_equipo)
);

ALTER TABLE equipos AUTO_INCREMENT = 500;

CREATE TABLE BO3 (
    cod_bo3 INT AUTO_INCREMENT,
    cod_equipo_1 INT,
    cod_equipo_2 INT,
    fecha DATE,
    CONSTRAINT fk_bo3_equipo_1 FOREIGN KEY (cod_equipo_1) REFERENCES equipos(cod_equipo),
    CONSTRAINT fk_bo3_equipo_2 FOREIGN KEY (cod_equipo_2) REFERENCES equipos(cod_equipo),
    CONSTRAINT pk_bo3 PRIMARY KEY (cod_bo3)
);

ALTER TABLE BO3 AUTO_INCREMENT = 1000;

CREATE TABLE partidas (
    cod_bo3 INT,
    cod_equipo_1 INT,
    cod_equipo_2 INT,
    num_partida INT,
    rondas_equipo1 INT,
    rondas_equipo2 INT,
    cod_mapa VARCHAR(20),
    CONSTRAINT fk_partidas_equipo_1 FOREIGN KEY (cod_equipo_1) REFERENCES equipos(cod_equipo),
    CONSTRAINT fk_partidas_equipo_2 FOREIGN KEY (cod_equipo_2) REFERENCES equipos(cod_equipo),
    CONSTRAINT fk_partidas_bo3 FOREIGN KEY (cod_bo3) REFERENCES BO3(cod_bo3),
    CONSTRAINT pk_partidas PRIMARY KEY (cod_bo3, num_partida, cod_mapa)
);

CREATE TABLE clasificacion (
    posicion INT,
    cod_equipo INT,
    nombre_eq VARCHAR(30),
    CONSTRAINT fk_clasificacion_equipo FOREIGN KEY (cod_equipo) REFERENCES equipos(cod_equipo),
    CONSTRAINT pk_clasificacion PRIMARY KEY (cod_equipo)
);

CREATE TABLE mapas (
    cod_mapa INT,
    partidas_jugadas INT DEFAULT 0,
    CONSTRAINT pk_mapas PRIMARY KEY (cod_mapa)
);

COMMIT;
