DROP DATABASE IF EXISTS Compras;

CREATE DATABASE Compras;

USE Compras;

CREATE TABLE Venta (
    CodVenta INT,
    Cantidad INT,
    Subtotal DECIMAL(6,2),
    IGIC DECIMAL(6,2),
    TOTAL DECIMAL(6,2),
    CONSTRAINT codventa_pk PRIMARY KEY (CodVenta)
);

CREATE TABLE LineaVenta (
    CodVenta INT,
    CodLinea INT,
    Nombre VARCHAR(20),
    Cantidad INT,
    Importe DECIMAL(6,2),
    CONSTRAINT codventa_fk FOREIGN KEY (CodVenta) REFERENCES Venta(CodVenta) ON DELETE CASCADE,
    CONSTRAINT codventa_codlinea_pk PRIMARY KEY (CodVenta,CodLinea)
);


INSERT INTO Venta (CodVenta, Cantidad, Subtotal, IGIC, TOTAL) 
VALUES 
(101, '2018-12-20', 3, 229.70, 16.08, 245.78),
(102, '2019-01-13', 2, 118.55, 8.30, 126.85),
(103, '2019-04-15', 2, 194.80, 13.64, 208.44);


INSERT INTO LineaVenta (CodVenta, CodLinea, Nombre, Cantidad, Importe) 
VALUES 
(101, 201, 'Memoria 16 GB', 1, 98.40),
(101, 202, 'Placa Base ASUS', 1, 30.20),
(101, 203, 'Core i7', 1, 101.10),
(102, 201, 'Core i5', 1, 90.15),
(102, 202, 'Torre Tracens', 1, 28.40),
(103, 201, 'Monitor HP 19', 2, 97.40);