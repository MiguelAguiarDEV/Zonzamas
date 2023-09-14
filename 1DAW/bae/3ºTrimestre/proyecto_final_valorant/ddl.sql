DROP DATABASE IF EXISTS valorant;

CREATE DATABASE valorant;

USE valorant;

DROP TABLE IF EXISTS partidas;
DROP TABLE IF EXISTS clasificacion;
DROP TABLE IF EXISTS mapas;
DROP TABLE IF EXISTS equipos;
DROP TABLE IF EXISTS entrenadores;
DROP TABLE IF EXISTS jugadores;
DROP TABLE IF EXISTS personas;
DROP TABLE IF EXISTS BO3;

CREATE TABLE personas (
    cod_persona INT AUTO_INCREMENT,
    nombre VARCHAR(30) NOT NULL,
    apellido1 VARCHAR(30) NOT NULL,
    apellido2 VARCHAR(30) NOT NULL,
    edad INT NOT NULL,
    nacionalidad VARCHAR(30) NOT NULL,
    PRIMARY KEY (cod_persona)
);

    CREATE TABLE jugadores (
        cod_jugador INT AUTO_INCREMENT,
        nick VARCHAR(20) UNIQUE NOT NULL,
        rol VARCHAR(40) CHECK (rol IN ('Iniciador', 'Controlador', 'Duelista', 'Centinela')),
        cod_persona INT,
        PRIMARY KEY (cod_jugador),
        FOREIGN KEY (cod_persona) REFERENCES personas(cod_persona) ON DELETE CASCADE
    );


CREATE TABLE entrenadores (
    cod_entrenador INT AUTO_INCREMENT,
    nombre VARCHAR(30),
    cod_persona INT,
    PRIMARY KEY (cod_entrenador),
    FOREIGN KEY (cod_persona) REFERENCES personas(cod_persona) ON DELETE CASCADE
);

CREATE TABLE equipos (
    cod_equipo INT AUTO_INCREMENT,
    nombre_equipo VARCHAR(30),
    cod_jugador1 INT DEFAULT NULL,
    cod_jugador2 INT DEFAULT NULL,
    cod_jugador3 INT DEFAULT NULL,
    cod_jugador4 INT DEFAULT NULL,
    cod_jugador5 INT DEFAULT NULL,
    cod_jugador6 INT DEFAULT NULL,
    cod_entrenador INT DEFAULT NULL,
    PRIMARY KEY (cod_equipo),
    FOREIGN KEY (cod_jugador1) REFERENCES jugadores(cod_jugador),
    FOREIGN KEY (cod_jugador2) REFERENCES jugadores(cod_jugador),
    FOREIGN KEY (cod_jugador3) REFERENCES jugadores(cod_jugador),
    FOREIGN KEY (cod_jugador4) REFERENCES jugadores(cod_jugador),
    FOREIGN KEY (cod_jugador5) REFERENCES jugadores(cod_jugador),
    FOREIGN KEY (cod_jugador6) REFERENCES jugadores(cod_jugador), 
    FOREIGN KEY (cod_entrenador) REFERENCES entrenadores(cod_entrenador)
);

CREATE TABLE BO3 (
    cod_bo3 INT AUTO_INCREMENT,
    cod_equipo_1 INT,
    cod_equipo_2 INT,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (cod_bo3),
    FOREIGN KEY (cod_equipo_1) REFERENCES equipos(cod_equipo),
    FOREIGN KEY (cod_equipo_2) REFERENCES equipos(cod_equipo)
);

CREATE TABLE partidas (
    cod_bo3 INT,
    cod_equipo_1 INT,
    cod_equipo_2 INT,
    num_partida INT CHECK (num_partida IN ('1', '2', '3')),
    rondas_equipo1 INT,
    rondas_equipo2 INT,
    cod_mapa VARCHAR(20),
    PRIMARY KEY (cod_bo3, num_partida, cod_mapa),
    FOREIGN KEY (cod_bo3) REFERENCES BO3(cod_bo3) ON DELETE CASCADE,
    FOREIGN KEY (cod_equipo_1) REFERENCES equipos(cod_equipo),
    FOREIGN KEY (cod_equipo_2) REFERENCES equipos(cod_equipo)
);

CREATE TABLE clasificacion (
    posicion VARCHAR(5),
    cod_equipo INT,
    bo3_ganados INT,
    PRIMARY KEY (posicion),
    FOREIGN KEY (cod_equipo) REFERENCES equipos(cod_equipo) ON DELETE CASCADE
);

CREATE TABLE mapas (
    cod_mapa INT AUTO_INCREMENT,
    partidas_jugadas INT DEFAULT 0,
    nombre VARCHAR(20),
    PRIMARY KEY (cod_mapa)
);




ALTER TABLE jugadores AUTO_INCREMENT = 100;
ALTER TABLE entrenadores AUTO_INCREMENT = 200;


-- Crear el usuario root con todos los privilegios
CREATE USER 'root'@'localhost' IDENTIFIED BY 'csas1234';
GRANT ALL PRIVILEGES ON valorant.* TO 'root'@'localhost';

-- Crear el usuario analista con permisos de inserción
CREATE USER 'analista'@'localhost' IDENTIFIED BY 'csas1234';
GRANT INSERT, SELECT, SHOW VIEW ON valorant.* TO 'analista'@'localhost';

-- Crear el usuario entrenador con permisos de consulta y ejecución de procedimientos
CREATE USER 'entrenador'@'localhost' IDENTIFIED BY 'csas1234';
GRANT SELECT, EXECUTE ON valorant.* TO 'entrenador'@'localhost';

-- Crear el usuario jugador con permisos de consulta
CREATE USER 'jugador'@'localhost' IDENTIFIED BY 'csas1234';
GRANT SELECT ON valorant.* TO 'jugador'@'localhost';