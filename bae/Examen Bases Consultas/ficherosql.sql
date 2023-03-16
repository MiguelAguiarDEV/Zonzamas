drop table alquiler;
drop table pelicula;
drop table cliente;

commit;

create table cliente (
	codcliente integer NOT NULL,
	nombre varchar(50),
	fechalta date,
	saldo integer default 0,
	PRIMARY KEY (codcliente)
);

create table pelicula (
	codpelicula integer NOT NULL,
	nombre varchar(50),
	preciodia decimal(2,1),
	PRIMARY KEY (codpelicula)
);

create table alquiler (
	codcliente integer NOT NULL,
	codpelicula integer NOT NULL,
	fechalquiler date,
	dias int,
	FOREIGN KEY (codcliente) REFERENCES cliente(codcliente),
	FOREIGN KEY (codpelicula) REFERENCES pelicula(codpelicula),
	PRIMARY KEY (codcliente, codpelicula, fechalquiler)
);

commit;

INSERT INTO `cliente` (`codcliente`,`nombre`,`fechalta`,`saldo`) VALUES (101,"Fernando","2017-09-13",110);
INSERT INTO `cliente` (`codcliente`,`nombre`,`fechalta`,`saldo`) VALUES (102,"Cristina","2018-03-10",250);
INSERT INTO `cliente` (`codcliente`,`nombre`,`fechalta`,`saldo`) VALUES (103,"Elena","2019-01-14",650);
INSERT INTO `cliente` (`codcliente`,`nombre`,`fechalta`,`saldo`) VALUES (104,"Enrique","2019-07-24",400);
INSERT INTO `cliente` (`codcliente`,`nombre`,`fechalta`,`saldo`) VALUES (105,"Alejandro","2019-10-20",800);
INSERT INTO `cliente` (`codcliente`,`nombre`,`fechalta`,`saldo`) VALUES (106,"Roberto","2019-05-02",150);
INSERT INTO `cliente` (`codcliente`,`nombre`,`fechalta`,`saldo`) VALUES (107,"Sonia","2018-09-04",100);
INSERT INTO `cliente` (`codcliente`,`nombre`,`fechalta`,`saldo`) VALUES (108,"Maria","2018-11-18",200);
INSERT INTO `cliente` (`codcliente`,`nombre`,`fechalta`,`saldo`) VALUES (109,"Miguel","2017-01-13",100);
INSERT INTO `cliente` (`codcliente`,`nombre`,`fechalta`,`saldo`) VALUES (110,"Dafne","2019-05-01",300);
INSERT INTO `cliente` (`codcliente`,`nombre`,`fechalta`,`saldo`) VALUES (111,"Francisco","2019-05-01",500);

insert into `pelicula` (`codpelicula`, `nombre`, `preciodia`) values(201, 'Wonder Woman', 1.5);
insert into `pelicula` (`codpelicula`, `nombre`, `preciodia`) values(202, 'Aves de Presa', 3.0);
insert into `pelicula` (`codpelicula`, `nombre`, `preciodia`) values(203, 'Mulan', 3.0);
insert into `pelicula` (`codpelicula`, `nombre`, `preciodia`) values(204, 'Eternals', 3.0);
insert into `pelicula` (`codpelicula`, `nombre`, `preciodia`) values(205, 'Tenet', 3.5);
insert into `pelicula` (`codpelicula`, `nombre`, `preciodia`) values(206, 'Top Gun: Maverick', 2.5);
insert into `pelicula` (`codpelicula`, `nombre`, `preciodia`) values(207, 'Dune', 2.5);
insert into `pelicula` (`codpelicula`, `nombre`, `preciodia`) values(208, 'Black Widow', 3.0);
insert into `pelicula` (`codpelicula`, `nombre`, `preciodia`) values(209, 'El hombre invisible', 2.0);
insert into `pelicula` (`codpelicula`, `nombre`, `preciodia`) values(210, '007: Sin tiempo para morir', 2.5);
insert into `pelicula` (`codpelicula`, `nombre`, `preciodia`) values(211, 'Los nuevos mutantes', 2.0);
insert into `pelicula` (`codpelicula`, `nombre`, `preciodia`) values(212, 'Un lugar tranquilo 2', 1.0);
insert into `pelicula` (`codpelicula`, `nombre`, `preciodia`) values(213, 'Morbius', 2.5);

INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (102,208,"2019-02-02",1);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (102,204,"2019-02-05",4);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (110,204,"2019-02-10",1);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (102,202,"2019-02-02",4);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (107,201,"2019-02-07",1);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (103,209,"2019-02-08",1);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (109,202,"2019-02-08",4);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (101,205,"2019-02-04",4);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (110,205,"2019-02-09",1);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (101,210,"2019-02-01",1);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (103,201,"2019-02-12",1);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (101,204,"2019-02-13",2);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (110,202,"2019-02-10",2);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (102,205,"2019-02-01",1);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (106,202,"2019-02-14",4);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (107,205,"2019-02-10",5);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (108,203,"2019-02-04",4);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (104,207,"2019-02-07",2);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (106,203,"2019-02-04",3);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (103,202,"2019-02-10",3);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (103,207,"2019-02-02",5);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (101,202,"2019-02-11",3);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (108,207,"2019-02-11",3);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (101,204,"2019-02-05",1);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (104,203,"2019-02-01",1);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (107,202,"2019-02-12",5);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (102,206,"2019-02-10",1);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (110,210,"2019-02-01",4);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (109,205,"2019-02-09",3);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (104,203,"2019-02-06",1);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (105,202,"2019-02-04",5);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (103,201,"2019-02-04",5);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (104,206,"2019-02-08",3);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (106,201,"2019-02-07",2);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (101,206,"2019-02-03",3);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (105,202,"2019-02-06",4);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (101,203,"2019-02-13",2);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (103,201,"2019-02-02",2);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (101,205,"2019-02-09",3);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (103,207,"2019-02-04",4);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (101,209,"2019-02-05",3);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (110,201,"2019-02-08",3);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (107,207,"2019-02-05",2);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (106,206,"2019-02-07",5);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (109,201,"2019-02-06",1);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (105,204,"2019-02-09",1);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (107,206,"2019-02-02",1);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (108,209,"2019-02-05",5);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (106,201,"2019-02-11",1);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (105,207,"2019-02-03",2);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (103,210,"2019-02-05",2);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (106,203,"2019-02-09",1);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (101,206,"2019-02-06",5);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (110,208,"2019-02-07",5);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (104,203,"2019-02-08",2);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (110,204,"2019-02-14",1);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (105,208,"2019-02-03",4);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (105,205,"2019-02-04",4);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (107,209,"2019-02-06",3);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (101,210,"2019-02-05",1);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (109,210,"2019-02-03",3);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (102,203,"2019-02-01",5);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (108,210,"2019-02-08",2);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (104,208,"2019-02-05",4);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (104,210,"2019-02-03",5);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (105,202,"2019-02-09",2);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (101,206,"2019-02-07",1);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (109,209,"2019-02-03",4);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (106,208,"2019-02-07",5);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (101,208,"2019-02-07",1);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (107,204,"2019-02-13",1);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (101,208,"2019-02-05",5);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (106,201,"2019-02-14",4);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (107,207,"2019-02-13",4);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (105,201,"2019-02-08",5);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (104,210,"2019-02-02",3);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (103,204,"2019-02-08",2);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (108,203,"2019-02-13",3);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (103,210,"2019-02-09",2);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (102,205,"2019-02-13",1);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (110,202,"2019-02-11",4);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (106,207,"2019-02-10",3);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (109,210,"2019-02-13",5);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (107,209,"2019-02-10",3);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (109,210,"2019-02-11",5);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (103,203,"2019-02-14",3);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (109,208,"2019-02-11",4);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (108,206,"2019-02-06",5);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (101,202,"2019-02-14",3);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (109,204,"2019-02-14",3);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (102,204,"2019-02-10",3);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (102,206,"2019-02-01",4);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (107,206,"2019-02-10",3);
INSERT INTO `alquiler` (`codcliente`,`codpelicula`,`fechalquiler`,`dias`) VALUES (102,209,"2019-02-12",2);

commit;








