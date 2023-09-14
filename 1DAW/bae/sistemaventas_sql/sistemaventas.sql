drop database if exists sistemaventas;
create database sistemaventas;
use sistemaventas;
drop table if exists LineaCompra;
drop table if exists Compra;
drop table if exists Suministra;
drop table if exists Producto;
drop table if exists Estanteria;
drop table if exists Almacen;
drop table if exists Categoria;
drop table if exists Cliente;
drop table if exists Proveedor;
drop table if exists Empleado;
drop table if exists Persona;

create table Persona (
dni varchar(10) primary key,
nombre varchar(20) not null,
direccion varchar(50),
tfno varchar(20) unique,
fecha_n date ,
tipo varchar(10) not null check (tipo in ('Cliente', 'Proveedor', 'Empleado'))
);

create table Proveedor (
dni varchar(10) primary key,
web varchar(50),
foreign key (dni) references Persona(dni) on delete cascade

);

create table Empleado (
dni varchar(10) primary key,
salario decimal(8,2),
foreign key (dni) references Persona(dni) on delete cascade

);

create table Cliente (
dni varchar(10) primary key,
saldo decimal(8,2),
foreign key (dni) references Persona(dni) on delete cascade

);

create table Categoria (
idcat int primary key AUTO_INCREMENT,
nombre varchar(20) not null,
descr varchar(200)
);

alter table Categoria AUTO_INCREMENT = 100;

create table Almacen (
    codalmacen int primary key AUTO_INCREMENT,
    direccion varchar(50) 
);

alter table Almacen AUTO_INCREMENT = 200;

create table Estanteria (
    codalmacen int,
    codestanteria int,
    dimension varchar(200),
    foreign key (codalmacen) references Almacen(codalmacen) on delete cascade,
    primary key (codalmacen, codestanteria)
);


create table Producto (
    idprod int primary key AUTO_INCREMENT,
    nombre varchar(200) not null,
    stock int default 0 not null,
    precio decimal(8,2),
    idcategoria int,
    codalmacen int,
    codestanteria int,
    foreign key (idcategoria) references Categoria(idcat) on delete set null,
    foreign key (codalmacen,codestanteria) references Estanteria(codalmacen, codestanteria) on delete set null
);

alter table Producto AUTO_INCREMENT = 300;

create table Suministra (
    dniprov varchar(10),
    idprod int,
    fecha date,
    foreign key (dniprov) references Proveedor(dni),
    foreign key (idprod) references Producto(idprod),
    primary key (idprod,dniprov,fecha)
);

create table Compra (
    idcompra int primary key AUTO_INCREMENT,
    fecha date,
    descuento decimal(6,2) default 0,
    subtotal decimal (6,2),
    impuesto decimal (6,2),
    total decimal (6,2),
    dnicliente varchar(10),
    dniempleado varchar(10),
    foreign key (dnicliente) references Cliente(dni),
    foreign key (dniempleado) references Empleado(dni)
);

alter table Compra AUTO_INCREMENT = 400;

create table LineaCompra (
    idcompra int,
    idlinea int,
    cantidad int,
    descuento_l decimal(6,2),
    importe_total_l decimal(6,2),
    idprod int,
    foreign key (idcompra) references Compra(idcompra),
    foreign key (idprod) references Producto(idprod),
    primary key (idcompra,idlinea)
);