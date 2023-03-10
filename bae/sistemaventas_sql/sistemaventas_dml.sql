use sistemaventas;
INSERT INTO Persona (dni,nombre,direccion,tfno,fecha_n,tipo) VALUES ('01','Brian Granado','2057 Ipsum ','923228274',str_to_date('21/12/1985','%d/%m/%Y'),'Cliente');
INSERT INTO Persona (dni,nombre,direccion,tfno,fecha_n,tipo) VALUES ('02','Eduardo González','Apdo.:710-2872 Sollicitudin Avenida','05 06 88 82 84',str_to_date('21/12/1985','%d/%m/%Y'),'Proveedor');
INSERT INTO Persona (dni,nombre,direccion,tfno,fecha_n,tipo) VALUES ('03','David Castillo','688-9936 At, C.','967775543',str_to_date('01/01/1995','%d/%m/%Y'),'Empleado');
INSERT INTO Persona (dni,nombre,direccion,tfno,fecha_n,tipo) VALUES ('04','Lorena Alonso','Apdo.:951-3705 Et ','699104395',str_to_date('21/12/90','%d/%m/%Y'),'Empleado');
INSERT INTO Persona (dni,nombre,direccion,tfno,fecha_n,tipo) VALUES ('05','Ana Pérez','Apdo.:649-7252 Tellus Avda.','300521792',str_to_date('02/02/1980','%d/%m/%Y'),'Cliente');
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

INSERT INTO Almacen (direccion)VALUES ('Apdo.:710-2872 Sollicitudin Avenida');
INSERT INTO Almacen (direccion)VALUES ('Apdo.:951-3705 Et');
INSERT INTO Almacen (direccion)VALUES ('Apartado núm.: 646, 5643 Penatibus C.');
INSERT INTO Almacen (direccion)VALUES ('688-9936 At, C.');

INSERT INTO Estanteria (codalmacen,codestanteria,dimension)VALUES (200, 1, 'Estante superior');
INSERT INTO Estanteria (codalmacen,codestanteria,dimension)VALUES (200, 2, 'Estante central');
INSERT INTO Estanteria (codalmacen,codestanteria,dimension)VALUES (200, 3, 'Estante inferior');
INSERT INTO Estanteria (codalmacen,codestanteria,dimension)VALUES (201, 1, 'Estante superior');
INSERT INTO Estanteria (codalmacen,codestanteria,dimension)VALUES (201, 2, 'Estante central');
INSERT INTO Estanteria (codalmacen,codestanteria,dimension)VALUES (201, 3, 'Estante inferior');
INSERT INTO Estanteria (codalmacen,codestanteria,dimension)VALUES (202, 1, 'Estante superior');
INSERT INTO Estanteria (codalmacen,codestanteria,dimension)VALUES (202, 2, 'Estante central');
INSERT INTO Estanteria (codalmacen,codestanteria,dimension)VALUES (202, 3, 'Estante inferior');

INSERT INTO Categoria (idcat, nombre, descr) VALUES (identcategoria.NEXTVAL, 'Ordenadores', ' ');
/*
INSERT INTO Producto VALUES (identproducto.NEXTVAL, 'PcCom', 500.00, 12, 1000, 4000, 1);
INSERT INTO Producto VALUES (identproducto.NEXTVAL, 'PC HP', 600.00, 5, 1000, 4000, 2);
INSERT INTO Producto VALUES (identproducto.NEXTVAL, 'PC Lenovo', 475.50, 4, 1000, 4000, 3);
INSERT INTO Producto VALUES (identproducto.NEXTVAL, 'PC Acer', 450.00, 6, 1000, 4000, 1);
INSERT INTO Producto VALUES (identproducto.NEXTVAL, 'PC DELL', 625.65, 9, 1000, 4000, 2);
INSERT INTO Producto VALUES (identproducto.NEXTVAL, 'PC MSI', 845.45, 2, 1000, 4000, 3);
INSERT INTO Producto VALUES (identproducto.NEXTVAL, 'iMac', 1257.40, 3, 1000, 4000, 1);

INSERT INTO Categoria (idcat, nombre, descr) VALUES (identcategoria.NEXTVAL, 'Smartphones', ' ');

INSERT INTO Producto VALUES (identproducto.NEXTVAL, 'Samsung', 500.00, 8, 1001, 4001, 1);
INSERT INTO Producto VALUES (identproducto.NEXTVAL, 'Huawei', 290.10, 5, 1001, 4001, 2);
INSERT INTO Producto VALUES (identproducto.NEXTVAL, 'iPhone', 1175.50, 4, 1001, 4001, 3);
INSERT INTO Producto VALUES (identproducto.NEXTVAL, 'Realme', 350.00, 6, 1001, 4001, 1);
INSERT INTO Producto VALUES (identproducto.NEXTVAL, 'Xiaomi', 259.25, 9, 1001, 4001, 2);
INSERT INTO Producto VALUES (identproducto.NEXTVAL, 'Oppo', 845.45, 2, 1001, 4001, 3);

INSERT INTO Categoria (idcat, nombre, descr) VALUES (identcategoria.NEXTVAL, 'Periféricos', ' ');

INSERT INTO Producto VALUES (identproducto.NEXTVAL, 'Monitor', 556.20, 10, 1002, 4000, 1);
INSERT INTO Producto VALUES (identproducto.NEXTVAL, 'Teclado', 25.25, 22, 1002, 4000, 2);
INSERT INTO Producto VALUES (identproducto.NEXTVAL, 'Ratones', 12.30, 30, 1002, 4000, 3);
INSERT INTO Producto VALUES (identproducto.NEXTVAL, 'Altavoces 5.1', 97.60, 5, 1002, 4000, 1);
INSERT INTO Producto VALUES (identproducto.NEXTVAL, 'Auriculares', 55.65, 9, 1002, 4000, 2);
INSERT INTO Producto VALUES (identproducto.NEXTVAL, 'Silla gaming', 123.45, 4, 1002, 4000, 3);
INSERT INTO Producto VALUES (identproducto.NEXTVAL, 'Mesa Gaming', 241.45, 3, 1002, 4000, 3);

INSERT INTO Categoria (idcat, nombre, descr) VALUES (identcategoria.NEXTVAL, 'Televisores', ' ');

INSERT INTO Producto VALUES (identproducto.NEXTVAL, 'Tv Samsung', 500.00, 10, 1003, 4002, 1);
INSERT INTO Producto VALUES (identproducto.NEXTVAL, 'Tv LG', 600.00, 5, 1003, 4002, 2);
INSERT INTO Producto VALUES (identproducto.NEXTVAL, 'Tv Sony', 475.50, 4, 1003, 4002, 3);
INSERT INTO Producto VALUES (identproducto.NEXTVAL, 'Tv TD System', 450.00, 6, 1003, 4002, 1);
INSERT INTO Producto VALUES (identproducto.NEXTVAL, 'Tv Philips', 625.65, 9, 1003, 4002, 2);

INSERT INTO Categoria (idcat, nombre, descr) VALUES (identcategoria.NEXTVAL, 'Tablets', ' ');

INSERT INTO Producto VALUES (identproducto.NEXTVAL, 'Tablet Samsung', 420.10, 10, 1004, 4001, 1);
INSERT INTO Producto VALUES (identproducto.NEXTVAL, 'Tablet Huawei', 230.30, 5, 1004, 4001, 2);
INSERT INTO Producto VALUES (identproducto.NEXTVAL, 'Tablet Lenovo', 315.50, 4, 1004, 4001, 3);

INSERT INTO Categoria (idcat, nombre, descr) VALUES (identcategoria.NEXTVAL, 'Consolas', ' ');

INSERT INTO Producto VALUES (identproducto.NEXTVAL, 'PS5', 470.00, 10, 1005, 4001, 1);
INSERT INTO Producto VALUES (identproducto.NEXTVAL, 'Xbox Series X', 599.50, 5, 1005, 4001, 2);
INSERT INTO Producto VALUES (identproducto.NEXTVAL, 'Xbox Series S', 325.50, 4, 1005, 4001, 3);
INSERT INTO Producto VALUES (identproducto.NEXTVAL, 'PS4', 220.00, 6, 1005, 4001, 1);
INSERT INTO Producto VALUES (identproducto.NEXTVAL, 'Nes Switch', 279.35, 9, 1005, 4001, 2);
INSERT INTO Producto VALUES (identproducto.NEXTVAL, 'Xbox One', 194.99, 6, 1005, 4000, 1);
INSERT INTO Producto VALUES (identproducto.NEXTVAL, 'Nintendo DS/3DS', 149.99, 9, 1005, 4001, 2);

INSERT INTO Suministra VALUES (2001, '02', str_to_date('10/01/2022','%d/%m/%Y'), 2);
INSERT INTO Suministra VALUES (2002, '02', str_to_date('10/03/2021','%d/%m/%Y'), 3);
INSERT INTO Suministra VALUES (2003, '06', str_to_date('10/04/2021','%d/%m/%Y'), 2);
INSERT INTO Suministra VALUES (2004, '07', str_to_date('08/01/2022','%d/%m/%Y'), 6);
INSERT INTO Suministra VALUES (2005, '02', str_to_date('10/01/2022','%d/%m/%Y'), 5);
INSERT INTO Suministra VALUES (2006, '06', str_to_date('10/03/2021','%d/%m/%Y'), 3);
INSERT INTO Suministra VALUES (2007, '07', str_to_date('10/12/2021','%d/%m/%Y'), 2);
INSERT INTO Suministra VALUES (2008, '09', str_to_date('18/01/2019','%d/%m/%Y'), 4);
INSERT INTO Suministra VALUES (2000, '02', str_to_date('10/05/2021','%d/%m/%Y'), 5);
INSERT INTO Suministra VALUES (2009, '02', str_to_date('30/03/2021','%d/%m/%Y'), 3);
INSERT INTO Suministra VALUES (2010, '06', str_to_date('10/08/2021','%d/%m/%Y'), 2);
INSERT INTO Suministra VALUES (2011, '07', str_to_date('08/01/2019','%d/%m/%Y'), 2);
INSERT INTO Suministra VALUES (2012, '02', str_to_date('26/09/2017','%d/%m/%Y'), 5);
INSERT INTO Suministra VALUES (2013, '06', str_to_date('10/03/2021','%d/%m/%Y'), 3);
INSERT INTO Suministra VALUES (2014, '07', str_to_date('10/12/2021','%d/%m/%Y'), 2);
INSERT INTO Suministra VALUES (2015, '09', str_to_date('08/01/2017','%d/%m/%Y'), 3);
INSERT INTO Suministra VALUES (2016, '06', str_to_date('25/12/2021','%d/%m/%Y'), 2);
INSERT INTO Suministra VALUES (2017, '07', str_to_date('08/01/2019','%d/%m/%Y'), 2);
INSERT INTO Suministra VALUES (2018, '02', str_to_date('10/01/2010','%d/%m/%Y'), 5);
INSERT INTO Suministra VALUES (2019, '06', str_to_date('10/03/2021','%d/%m/%Y'), 3);
INSERT INTO Suministra VALUES (2020, '07', str_to_date('25/09/2021','%d/%m/%Y'), 2);
INSERT INTO Suministra VALUES (2021, '09', str_to_date('08/01/2020','%d/%m/%Y'), 3);
INSERT INTO Suministra VALUES (2022, '07', str_to_date('08/07/2020','%d/%m/%Y'), 2);
INSERT INTO Suministra VALUES (2023, '02', str_to_date('10/01/2018','%d/%m/%Y'), 5);
INSERT INTO Suministra VALUES (2024, '06', str_to_date('10/03/2021','%d/%m/%Y'), 3);
INSERT INTO Suministra VALUES (2025, '07', str_to_date('10/05/2021','%d/%m/%Y'), 2);
INSERT INTO Suministra VALUES (2026, '09', str_to_date('08/01/2019','%d/%m/%Y'), 2);
INSERT INTO Suministra VALUES (2027, '06', str_to_date('20/12/2021','%d/%m/%Y'), 2);
INSERT INTO Suministra VALUES (2028, '07', str_to_date('08/01/2020','%d/%m/%Y'), 2);
INSERT INTO Suministra VALUES (2029, '02', str_to_date('10/01/2020','%d/%m/%Y'), 4);
INSERT INTO Suministra VALUES (2030, '06', str_to_date('10/03/2021','%d/%m/%Y'), 3);
INSERT INTO Suministra VALUES (2031, '07', str_to_date('10/02/2021','%d/%m/%Y'), 2);
INSERT INTO Suministra VALUES (2032, '09', str_to_date('08/01/2020','%d/%m/%Y'), 3);

INSERT INTO Compra VALUES (identcompra.NEXTVAL, str_to_date('10/01/2022','%d/%m/%Y'), 0.00, 3175.50, 222.28, 3397.78, '01', '03');
INSERT INTO Compra VALUES (identcompra.NEXTVAL, str_to_date('10/01/2022','%d/%m/%Y'), 0.00, 4410.25, 308.72, 4718.97, '05', '04');
INSERT INTO Compra VALUES (identcompra.NEXTVAL, str_to_date('10/01/2022','%d/%m/%Y'), 0.00, 5191.10, 363.38, 5554.48, '08', '10');
INSERT INTO Compra VALUES (identcompra.NEXTVAL, str_to_date('10/01/2022','%d/%m/%Y'), 0.00, 4361.10, 305.28, 4666.38, '01', '10');

INSERT INTO LineaCompra VALUES (3000, 1, 3, 0.00, 1800.00, 2001); 
INSERT INTO LineaCompra VALUES (3000, 2, 1, 0.00, 475.50, 2002); 
INSERT INTO LineaCompra VALUES (3000, 3, 2, 0.00, 900.00, 2003);

INSERT INTO LineaCompra VALUES (3001, 1, 3, 0.00, 1050.00, 2010); 
INSERT INTO LineaCompra VALUES (3001, 2, 1, 0.00, 845.45, 2005);
INSERT INTO LineaCompra VALUES (3001, 3, 2, 0.00, 2514.80, 2006);

INSERT INTO LineaCompra VALUES (3002, 1, 3, 0.00, 1500, 2007);
INSERT INTO LineaCompra VALUES (3002, 2, 1, 0.00,290.10, 2008);
INSERT INTO LineaCompra VALUES (3002, 3, 2, 0.00, 2351.00, 2009);
INSERT INTO LineaCompra VALUES (3002, 4, 3, 0.00, 1050.00, 2010); 

INSERT INTO LineaCompra VALUES (3003, 1, 2, 0.00, 700.00, 2010); 
INSERT INTO LineaCompra VALUES (3003, 2, 1, 0.00, 475.50, 2002);
INSERT INTO LineaCompra VALUES (3003, 3, 1, 0.00, 450.00, 2003); 
INSERT INTO LineaCompra VALUES (3003, 4, 3, 0.00, 777.75, 2011); 
INSERT INTO LineaCompra VALUES (3003, 5, 1, 0.00, 845.45, 2012);
INSERT INTO LineaCompra VALUES (3003, 6, 2, 0.00, 1112.40, 2013); 