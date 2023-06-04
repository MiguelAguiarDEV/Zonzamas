DROP DATABASE IF EXISTS liga_valorant;

CREATE DATABASE liga_valorant;

USE liga_valorant;

DROP TABLE IF EXISTS personas;
DROP TABLE IF EXISTS jugadores;
DROP TABLE IF EXISTS entrenadores;
DROP TABLE IF EXISTS equipos;
DROP TABLE IF EXISTS BO3;
DROP TABLE IF EXISTS partidas;
DROP TABLE IF EXISTS clasificacion;
DROP TABLE IF EXISTS mapas;

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

CREATE TABLE jugadores (
    cod_jugador INT,
    nick VARCHAR(20),
    CONSTRAINT pk_cod_jugador PRIMARY KEY (cod_jugador),
    CONSTRAINT fk_cod_jugador FOREIGN KEY (cod_jugador) REFERENCES personas(cod_persona)
);

CREATE TABLE entrenadores (
    cod_entrenador INT,
    nombre VARCHAR(30),
    CONSTRAINT pk_cod_entrenador PRIMARY KEY (cod_entrenador),
    CONSTRAINT fk_cod_entrenador FOREIGN KEY (cod_entrenador) REFERENCES personas(cod_persona)
);

CREATE TABLE equipos (
    cod_equipo INT AUTO_INCREMENT,
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

CREATE TABLE BO3 (
    cod_bo3 INT AUTO_INCREMENT,
    cod_equipo_1 INT,
    cod_equipo_2 INT,
    fecha DATE,
    CONSTRAINT fk_bo3_eq1 FOREIGN KEY (cod_equipo_1) REFERENCES equipos(cod_equipo),
    CONSTRAINT fk_bo3_eq2 FOREIGN KEY (cod_equipo_2) REFERENCES equipos(cod_equipo),
    CONSTRAINT pk_bo3 PRIMARY KEY (cod_bo3)
);

CREATE TABLE partidas (
    cod_bo3 INT,
    cod_equipo_1 INT,
    cod_equipo_2 INT,
    num_partida INT,
    rondas_equipo1 INT,
    rondas_equipo2 INT,
    cod_mapa VARCHAR(20),
    CONSTRAINT fk_par_eq1 FOREIGN KEY (cod_equipo_1) REFERENCES equipos(cod_equipo),
    CONSTRAINT fk_par_eq2 FOREIGN KEY (cod_equipo_2) REFERENCES equipos(cod_equipo),
    CONSTRAINT fk_cod_bo3 FOREIGN KEY (cod_bo3) REFERENCES BO3(cod_bo3),    
    CONSTRAINT pk_cod_bo3_eq1_eq2_num PRIMARY KEY (cod_bo3,num_partida,cod_mapa)
);

CREATE TABLE clasificacion (
    posicion INT,
    cod_equipo INT,
    nombre_eq VARCHAR(30),
    CONSTRAINT fk_cod_eq FOREIGN KEY (cod_equipo) REFERENCES equipos(cod_equipo),
    CONSTRAINT pk_clas_cod_eq PRIMARY KEY (cod_equipo)
);

CREATE TABLE mapas (
    cod_mapa INT,
    partidas_jugadas INT DEFAULT 0,
    CONSTRAINT pk_mapas PRIMARY KEY (cod_mapa)
);

COMMIT;
