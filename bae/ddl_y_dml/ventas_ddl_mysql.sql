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
    dni varchar(10),
    nombre varchar(20),
    direccion varchar(50) not null,
    tfno varchar(20),
    fecha_n date,
    tipo varchar(10) not null check (tipo in ('Cliente', 'Proveedor', 'Empleado')),
    constraint per_dni_pk primary key (dni),
    constraint per_tfno_uq unique (tfno)
);

create table Proveedor (
    dni varchar(10),
    web varchar(50),
    constraint pro_dni_fk foreign key (dni) references Persona(dni) on delete cascade,
    constraint pro_dni_pk primary key (dni)
);

create table Empleado (
    dni varchar(10),
    salario decimal(8,2),
    constraint emp_dni_fk foreign key (dni) references Persona(dni) on delete cascade,
    constraint emp_dni_pk primary key (dni)
);

create table Cliente (
    dni varchar(10),
    saldo decimal(8,2),
    constraint cli_dni_fk foreign key (dni) references Persona(dni) on delete cascade,
    constraint cli_dni_pk primary key (dni)
);

create table Categoria (
    idcat int AUTO_INCREMENT,
    nombre varchar(20) not null,
    descr varchar(200),
    constraint cat_id_pk primary key(idcat)
);

alter table Categoria AUTO_INCREMENT = 1000;

create table Almacen (
    codalmacen int AUTO_INCREMENT,
    direccion varchar(50),
    constraint alm_cod_pk primary key (codalmacen) 
);

alter table Almacen AUTO_INCREMENT = 4000;

create table Estanteria (
    codalmacen int,
    codestanteria int,
    dimension varchar(200),
    constraint est_codalm_fk foreign key (codalmacen) references Almacen(codalmacen) on delete cascade,
    constraint codalm_codest_pk primary key (codalmacen, codestanteria)
);


create table Producto (
    idprod int AUTO_INCREMENT,
    nombre varchar(200) not null,
    stock int default 0 not null,
    precio decimal(8,2),
    idcategoria int,
    codalmacen int,
    codestanteria int,
    constraint pro_idcat_fk foreign key (idcategoria) references Categoria(idcat) on delete set null,
    constraint pro_codalm_codest_fk foreign key (codalmacen,codestanteria) references Estanteria(codalmacen, codestanteria) on delete set null,
    constraint pro_id_pk primary key (idprod)
);

alter table Producto AUTO_INCREMENT = 300;

create table Suministra (
    dniprov varchar(10),
    idprod int,
    fecha date,
    constraint sum_dniprov_fk foreign key (dniprov) references Proveedor(dni),
    constraint sum_idprod_fk foreign key (idprod) references Producto(idprod),
    constraint sum_idprod_dniprov_fecha_pk primary key (idprod,dniprov,fecha)
);

create table Compra (
    idcompra int AUTO_INCREMENT,
    fecha date,
    descuento decimal(6,2) default 0,
    subtotal decimal (6,2),
    impuesto decimal (6,2),
    total decimal (6,2),
    dnicliente varchar(10),
    dniempleado varchar(10),
    constraint com_dnicli_fk foreign key (dnicliente) references Cliente(dni),
    constraint com_dniemp_fk foreign key (dniempleado) references Empleado(dni),
    constraint com_idcomp_pk primary key (idcompra)
);

alter table Compra AUTO_INCREMENT = 400;

create table LineaCompra (
    idcompra int,
    idlinea int,
    cantidad int,
    descuento_l decimal(6,2),
    importe_total_l decimal(6,2),
    idprod int,
    constraint lc_idcomp_fk foreign key (idcompra) references Compra(idcompra),
    constraint lc_idpro_fk foreign key (idprod) references Producto(idprod),
    constraint lc_idcom_idlin_pk primary key (idcompra,idlinea)
);