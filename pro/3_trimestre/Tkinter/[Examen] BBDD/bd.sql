DROP DATABASE IF EXISTS Inventario;

CREATE DATABASE Inventario;

USE Inventario;


DROP TABLE IF EXISTS articulos;
DROP TABLE IF EXISTS tipos_articulos;



CREATE TABLE tipos_articulos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(30) NOT NULL
);

CREATE TABLE articulos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(30),
    fecha_alta DATE DEFAULT '20230609',
    fecha_baja DATE DEFAULT '99991231',
    id_tipo_articulo INT,
    anho VARCHAR(30),
    CONSTRAINT FOREIGN KEY (id_tipo_articulo) REFERENCES tipos_articulos(id)
);
ALTER TABLE tipos_articulos AUTO_INCREMENT = 0;
ALTER TABLE articulos AUTO_INCREMENT = 100;



INSERT INTO tipos_articulos (id, nombre) VALUES(1, 'Informática');
INSERT INTO tipos_articulos (id, nombre) VALUES(2, 'Oficina');

INSERT INTO articulos (nombre, id_tipo_articulo, anho) VALUES ('Ordenador HP', 1, '2010');
INSERT INTO articulos (nombre, id_tipo_articulo, anho) VALUES ('Teclado', 1, '2010');
INSERT INTO articulos (nombre, id_tipo_articulo, anho) VALUES ('Ratón', 1, '2011');
INSERT INTO articulos (nombre, id_tipo_articulo, anho) VALUES ('Papel', 2, '2023');
INSERT INTO articulos (nombre, id_tipo_articulo, anho) VALUES ('Grapadora', 2, '2023');