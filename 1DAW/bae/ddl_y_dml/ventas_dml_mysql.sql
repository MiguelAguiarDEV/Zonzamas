drop database if exists sistemaventas;
source ventas_ddl_mysql.sql;
use sistemaventas;
INSERT INTO Persona (dni,nombre,direccion,tfno,fecha_n,tipo) VALUES ('01','Brian Granado','2057 Ipsum ','923228274',STR_TO_DATE('21/12/1985','%d/%m/%Y'),'Cliente');
INSERT INTO Persona (dni,nombre,direccion,tfno,fecha_n,tipo) VALUES ('02','Eduardo González','Apdo.:710-2872 Sollicitudin Avenida','05 06 88 82 84',STR_TO_DATE('21/12/1985','%d/%m/%Y'),'Proveedor');
INSERT INTO Persona (dni,nombre,direccion,tfno,fecha_n,tipo) VALUES ('03','David Castillo','688-9936 At, C.','967775543',STR_TO_DATE('01/01/1995','%d/%m/%Y'),'Empleado');
INSERT INTO Persona (dni,nombre,direccion,tfno,fecha_n,tipo) VALUES ('04','Lorena Alonso','Apdo.:951-3705 Et ','699104395',STR_TO_DATE('21/12/1990','%d/%m/%Y'),'Empleado');
INSERT INTO Persona (dni,nombre,direccion,tfno,fecha_n,tipo) VALUES ('05','Ana Pérez','Apdo.:649-7252 Tellus Avda.','300521792',STR_TO_DATE('02/02/1980','%d/%m/%Y'),'Cliente');
INSERT INTO Persona (dni,nombre,direccion,tfno,tipo) VALUES ('06','Antonio Alonso','Apartado núm.: 942, 1876 Odio C/','723293197','Proveedor');
INSERT INTO Persona (dni,nombre,direccion,tfno,tipo) VALUES ('07','Margarita Moreno','530-7277 Nec Avda.','813617131','Proveedor');
INSERT INTO Persona (dni,nombre,direccion,tfno,tipo) VALUES ('08','Fernando Brito','Apdo.:649-1432 Nunc. Ctra.','877069142','Cliente');
INSERT INTO Persona (dni,nombre,direccion,tfno,tipo) VALUES ('09','Scott Calvin','Apartado núm.: 646, 5643 Penatibus C.','104218855','Proveedor');
INSERT INTO Persona (dni,nombre,direccion,tfno,tipo) VALUES ('10','Lysandra Smith','Apdo.:483-2551 Amet C.','940888859','Empleado');

INSERT INTO Cliente (dni,saldo) VALUES ('01',20.45);
INSERT INTO Cliente (dni,saldo) VALUES ('08',10.23);
INSERT INTO Cliente (dni,saldo) VALUES ('05',0.0);

INSERT INTO Empleado (dni,salario) VALUES ('03', 1000.50);
INSERT INTO Empleado (dni,salario) VALUES ('04',1300.25);
INSERT INTO Empleado (dni,salario) VALUES ('10',1240.32);

INSERT INTO Proveedor (dni,web) VALUES ('02','sitio web');
INSERT INTO Proveedor (dni,web) VALUES ('06','sitio web');
INSERT INTO Proveedor (dni,web) VALUES ('07','sitio web');
INSERT INTO Proveedor (dni,web) VALUES ('09','sitio web');

INSERT INTO Almacen VALUES (codalmacen,'Apdo.:710-2872 Sollicitudin Avenida');
INSERT INTO Almacen VALUES (codalmacen,'Apdo.:951-3705 Et');
INSERT INTO Almacen VALUES (codalmacen,'Apartado núm.: 646, 5643 Penatibus C.');
INSERT INTO Almacen VALUES (codalmacen,'688-9936 At, C.');

INSERT INTO Estanteria VALUES (4000, 1, 'Estante superior');
INSERT INTO Estanteria VALUES (4000, 2, 'Estante central');
INSERT INTO Estanteria VALUES (4000, 3, 'Estante inferior');
INSERT INTO Estanteria VALUES (4001, 1, 'Estante superior');
INSERT INTO Estanteria VALUES (4001, 2, 'Estante central');
INSERT INTO Estanteria VALUES (4001, 3, 'Estante inferior');
INSERT INTO Estanteria VALUES (4002, 1, 'Estante superior');
INSERT INTO Estanteria VALUES (4002, 2, 'Estante central');
INSERT INTO Estanteria VALUES (4002, 3, 'Estante inferior');

INSERT INTO Categoria (idcat, nombre, descr) VALUES (idcat, 'Ordenadores', ' ');

INSERT INTO Producto VALUES (idprod, 'PcCom', 500.00, 12, 1000, 4000, 1);
INSERT INTO Producto VALUES (idprod, 'PC HP', 600.00, 5, 1000, 4000, 2);
INSERT INTO Producto VALUES (idprod, 'PC Lenovo', 475.50, 4, 1000, 4000, 3);
INSERT INTO Producto VALUES (idprod, 'PC Acer', 450.00, 6, 1000, 4000, 1);
INSERT INTO Producto VALUES (idprod, 'PC DELL', 625.65, 9, 1000, 4000, 2);
INSERT INTO Producto VALUES (idprod, 'PC MSI', 845.45, 2, 1000, 4000, 3);
INSERT INTO Producto VALUES (idprod, 'iMac', 1257.40, 3, 1000, 4000, 1);

INSERT INTO Categoria (idcat, nombre, descr) VALUES (idcat, 'Smartphones', ' ');

INSERT INTO Producto VALUES (idprod, 'Samsung', 500.00, 8, 1001, 4001, 1);
INSERT INTO Producto VALUES (idprod, 'Huawei', 290.10, 5, 1001, 4001, 2);
INSERT INTO Producto VALUES (idprod, 'iPhone', 1175.50, 4, 1001, 4001, 3);
INSERT INTO Producto VALUES (idprod, 'Realme', 350.00, 6, 1001, 4001, 1);
INSERT INTO Producto VALUES (idprod, 'Xiaomi', 259.25, 9, 1001, 4001, 2);
INSERT INTO Producto VALUES (idprod, 'Oppo', 845.45, 2, 1001, 4001, 3);

INSERT INTO Categoria (idcat, nombre, descr) VALUES (idcat, 'Periféricos', ' ');

INSERT INTO Producto VALUES (idprod, 'Monitor', 556.20, 10, 1002, 4000, 1);
INSERT INTO Producto VALUES (idprod, 'Teclado', 25.25, 22, 1002, 4000, 2);
INSERT INTO Producto VALUES (idprod, 'Ratones', 12.30, 30, 1002, 4000, 3);
INSERT INTO Producto VALUES (idprod, 'Altavoces 5.1', 97.60, 5, 1002, 4000, 1);
INSERT INTO Producto VALUES (idprod, 'Auriculares', 55.65, 9, 1002, 4000, 2);
INSERT INTO Producto VALUES (idprod, 'Silla gaming', 123.45, 4, 1002, 4000, 3);
INSERT INTO Producto VALUES (idprod, 'Mesa Gaming', 241.45, 3, 1002, 4000, 3);

INSERT INTO Categoria (idcat, nombre, descr) VALUES (idcat, 'Televisores', ' ');

INSERT INTO Producto VALUES (idprod, 'Tv Samsung', 500.00, 10, 1003, 4002, 1);
INSERT INTO Producto VALUES (idprod, 'Tv LG', 600.00, 5, 1003, 4002, 2);
INSERT INTO Producto VALUES (idprod, 'Tv Sony', 475.50, 4, 1003, 4002, 3);
INSERT INTO Producto VALUES (idprod, 'Tv TD System', 450.00, 6, 1003, 4002, 1);
INSERT INTO Producto VALUES (idprod, 'Tv Philips', 625.65, 9, 1003, 4002, 2);

INSERT INTO Categoria (idcat, nombre, descr) VALUES (idcat, 'Tablets', ' ');

INSERT INTO Producto VALUES (idprod, 'Tablet Samsung', 420.10, 10, 1004, 4001, 1);
INSERT INTO Producto VALUES (idprod, 'Tablet Huawei', 230.30, 5, 1004, 4001, 2);
INSERT INTO Producto VALUES (idprod, 'Tablet Lenovo', 315.50, 4, 1004, 4001, 3);

INSERT INTO Categoria (idcat, nombre, descr) VALUES (idcat, 'Consolas', ' ');

INSERT INTO Producto VALUES (idprod, 'PS5', 470.00, 10, 1005, 4001, 1);
INSERT INTO Producto VALUES (idprod, 'Xbox Series X', 599.50, 5, 1005, 4001, 2);
INSERT INTO Producto VALUES (idprod, 'Xbox Series S', 325.50, 4, 1005, 4001, 3);
INSERT INTO Producto VALUES (idprod, 'PS4', 220.00, 6, 1005, 4001, 1);
INSERT INTO Producto VALUES (idprod, 'Nes Switch', 279.35, 9, 1005, 4001, 2);
INSERT INTO Producto VALUES (idprod, 'Xbox One', 194.99, 6, 1005, 4000, 1);
INSERT INTO Producto VALUES (idprod, 'Nintendo DS/3DS', 149.99, 9, 1005, 4001, 2);

INSERT INTO Suministra VALUES ('02',301 , STR_TO_DATE('10/01/2022','%d/%m/%Y'));
INSERT INTO Suministra VALUES ('02',302 , STR_TO_DATE('10/03/2021','%d/%m/%Y'));
INSERT INTO Suministra VALUES ('06',303 , STR_TO_DATE('10/04/2021','%d/%m/%Y'));
INSERT INTO Suministra VALUES ('07',304 , STR_TO_DATE('08/01/2022','%d/%m/%Y'));
INSERT INTO Suministra VALUES ('02',305 , STR_TO_DATE('10/01/2022','%d/%m/%Y'));
INSERT INTO Suministra VALUES ('06',306 , STR_TO_DATE('10/03/2021','%d/%m/%Y'));
INSERT INTO Suministra VALUES ('07',307 , STR_TO_DATE('10/12/2021','%d/%m/%Y'));
INSERT INTO Suministra VALUES ('09',308 , STR_TO_DATE('18/01/2019','%d/%m/%Y'));
INSERT INTO Suministra VALUES ('02',300 , STR_TO_DATE('10/05/2021','%d/%m/%Y'));
INSERT INTO Suministra VALUES ('02',309 , STR_TO_DATE('30/03/2021','%d/%m/%Y'));
INSERT INTO Suministra VALUES ('06',310 , STR_TO_DATE('10/08/2021','%d/%m/%Y'));
INSERT INTO Suministra VALUES ('07',311 , STR_TO_DATE('08/01/2019','%d/%m/%Y'));
INSERT INTO Suministra VALUES ('02',312 , STR_TO_DATE('26/09/2017','%d/%m/%Y'));
INSERT INTO Suministra VALUES ('06',313 , STR_TO_DATE('10/03/2021','%d/%m/%Y'));
INSERT INTO Suministra VALUES ('07',314 , STR_TO_DATE('10/12/2021','%d/%m/%Y'));
INSERT INTO Suministra VALUES ('09',315 , STR_TO_DATE('08/01/2017','%d/%m/%Y'));
INSERT INTO Suministra VALUES ('06',316 , STR_TO_DATE('25/12/2021','%d/%m/%Y'));
INSERT INTO Suministra VALUES ('07',317 , STR_TO_DATE('08/01/2019','%d/%m/%Y'));
INSERT INTO Suministra VALUES ('02',318 , STR_TO_DATE('10/01/2010','%d/%m/%Y'));
INSERT INTO Suministra VALUES ('06',319 , STR_TO_DATE('10/03/2021','%d/%m/%Y'));
INSERT INTO Suministra VALUES ('07',320 , STR_TO_DATE('25/09/2021','%d/%m/%Y'));
INSERT INTO Suministra VALUES ('09',321 , STR_TO_DATE('08/01/2020','%d/%m/%Y'));
INSERT INTO Suministra VALUES ('07',322 , STR_TO_DATE('08/07/2020','%d/%m/%Y'));
INSERT INTO Suministra VALUES ('02',323 , STR_TO_DATE('10/01/2018','%d/%m/%Y'));
INSERT INTO Suministra VALUES ('06',324 , STR_TO_DATE('10/03/2021','%d/%m/%Y'));
INSERT INTO Suministra VALUES ('07',325 , STR_TO_DATE('10/05/2021','%d/%m/%Y'));
INSERT INTO Suministra VALUES ('09',326 , STR_TO_DATE('08/01/2019','%d/%m/%Y'));
INSERT INTO Suministra VALUES ('06',327 , STR_TO_DATE('20/12/2021','%d/%m/%Y'));
INSERT INTO Suministra VALUES ('07',328 , STR_TO_DATE('08/01/2020','%d/%m/%Y'));
INSERT INTO Suministra VALUES ('02',329 , STR_TO_DATE('10/01/2020','%d/%m/%Y'));
INSERT INTO Suministra VALUES ('06',330 , STR_TO_DATE('10/03/2021','%d/%m/%Y'));
INSERT INTO Suministra VALUES ('07',331 , STR_TO_DATE('10/02/2021','%d/%m/%Y'));
INSERT INTO Suministra VALUES ('09',332 , STR_TO_DATE('08/01/2020','%d/%m/%Y'));

INSERT INTO Compra VALUES (idcompra, STR_TO_DATE('10/01/2022','%d/%m/%Y'), 0.00, 3175.50, 222.28, 3397.78, '01', '03');
INSERT INTO Compra VALUES (idcompra, STR_TO_DATE('10/01/2022','%d/%m/%Y'), 0.00, 4410.25, 308.72, 4718.97, '05', '04');
INSERT INTO Compra VALUES (idcompra, STR_TO_DATE('10/01/2022','%d/%m/%Y'), 0.00, 5191.10, 363.38, 5554.48, '08', '10');
INSERT INTO Compra VALUES (idcompra, STR_TO_DATE('10/01/2022','%d/%m/%Y'), 0.00, 4361.10, 305.28, 4666.38, '01', '10');

INSERT INTO LineaCompra VALUES (400, 1, 3, 0.00, 1800.00, 301); 
INSERT INTO LineaCompra VALUES (400, 2, 1, 0.00, 475.50, 302); 
INSERT INTO LineaCompra VALUES (400, 3, 2, 0.00, 900.00, 303);

INSERT INTO LineaCompra VALUES (401, 1, 3, 0.00, 1050.00, 310); 
INSERT INTO LineaCompra VALUES (401, 2, 1, 0.00, 845.45, 305);
INSERT INTO LineaCompra VALUES (401, 3, 2, 0.00, 2514.80, 306);

INSERT INTO LineaCompra VALUES (402, 1, 3, 0.00, 1500, 307);
INSERT INTO LineaCompra VALUES (402, 2, 1, 0.00,290.10, 308);
INSERT INTO LineaCompra VALUES (402, 3, 2, 0.00, 2351.00, 309);
INSERT INTO LineaCompra VALUES (402, 4, 3, 0.00, 1050.00, 310); 

INSERT INTO LineaCompra VALUES (403, 1, 2, 0.00, 700.00, 310); 
INSERT INTO LineaCompra VALUES (403, 2, 1, 0.00, 475.50, 302);
INSERT INTO LineaCompra VALUES (403, 3, 1, 0.00, 450.00, 303); 
INSERT INTO LineaCompra VALUES (403, 4, 3, 0.00, 777.75, 311); 
INSERT INTO LineaCompra VALUES (403, 5, 1, 0.00, 845.45, 312);
INSERT INTO LineaCompra VALUES (403, 6, 2, 0.00, 1112.40, 313); 
