/* 1. Mostrar los nombres de los empleados ordenados alfabéticamente (Z...A)*/
select nombre from Empleado order by nombre  desc;

/* 2. Seleccionar el nombre, el oficio y la localidad de los departamentos donde trabajan los 
vendedores. */
select nombre_depto,localizacion,oficio from Departamento, Empleado where Empleado.oficio = "Vendedor" and Empleado.depto_no = Departamento.depto_no;

/* 3. Seleccionar el nombre, salario y localización donde trabajan los empleados que tengan un 
salario entre 10000 y 13000. */
select nombre,salario,localizacion from Departamento,Empleado where salario between 10000 and 13000 and Empleado.depto_no = Departamento.depto_no;

/* 4. Visualizar los departamentos con más de 5 empleados.*/
select nombre_depto,count(nombre) from Empleado,Departamento where Empleado.depto_no = Departamento.depto_no group by nombre_depto having count(nombre) > 5;

/* 5.  Mostrar el nombre, salario y nombre del departamento de los empleados que tengan el 
mismo oficio que ‘Leonel Alfonso Esquivel’. */
select nombre,salario,nombre_depto from Empleado,Departamento where Empleado.depto_no = Departamento.depto_no and oficio in (select oficio from Empleado where nombre = "Leonel Alfonso Esquivel");

/* 6. Mostrar el nombre, salario y nombre del departamento de los empleados que tengan el 
mismo oficio que ‘Castillo Montes Luis’ y que no tengan comisión.*/
select nombre,salario,nombre_depto from Empleado,Departamento where Empleado.depto_no = Departamento.depto_no and oficio in (select oficio from Empleado where nombre = "Castillo Montes Luis") and comision = 0;

/* 7. Mostrar los datos de los empleados que trabajan en el departamento de contabilidad, 
ordenados por nombre. */
select Empleado.* from Empleado,Departamento where Empleado.depto_no = Departamento.depto_no and nombre_depto = "Contabilidad" order by nombre;

/* 8. Nombre de los empleados que trabajan en León y cuyo oficio sea analista o empleado.*/
select nombre from Empleado where dir = "León" and oficio in ("Analista","Empleado");

/* 9. Calcula el promedio del salario de los empleados del departamento de ‘Contabilidad’. */
select avg(salario) from Empleado,Departamento where Departamento.depto_no = Empleado.depto_no and nombre_depto = "Contabilidad";

/* 10. ¿Cuántos empleados hay en el departamento de ‘VENTAS’?. */
select count(nombre) Empleados_en_Ventas from Departamento,Empleado where nombre_depto = "Ventas";

/* 11. Visualizar el número de empleados de cada departamento. */
select nombre_depto,count(*) from Departamento,Empleado where Departamento.depto_no = Empleado.depto_no group by nombre_depto;

/* 12. Mostrar los datos del empleado que tiene el salario más alto en el departamento de ‘VENTAS’. */
select Empleado.* from Empleado,Departamento where Departamento.depto_no = Empleado.depto_no and salario = (select max(salario) from Empleado,Departamento where nombre_depto = "Ventas") ;

/* 13. Visualizar el departamento como más empleados.*/
select nombre_depto from (select nombre_depto,count(*) num_empleados from Departamento,Empleado where Departamento.depto_no = Empleado.depto_no group by nombre_depto) as tabla1 where num_empleados = (select max(num_empleados) from (select nombre_depto,count(*) num_empleados from Departamento,Empleado where Departamento.depto_no = Empleado.depto_no group by nombre_depto) as tabla1);

/* 14. Visualizar el número de departamento que tenga más empleados cuyo oficio sea empleado. */
select tabla1.depto_no from (select Departamento.depto_no,count(*) num_empleados from Departamento,Empleado where Departamento.depto_no = Empleado.depto_no and oficio = "Empleado" group by Departamento.depto_no) as tabla1 where num_empleados = (select max(num_empleados) from (select Departamento.depto_no,count(*) num_empleados from Departamento,Empleado where Departamento.depto_no = Empleado.depto_no group by Departamento.depto_no) as tabla1);

/* 15. Mostrar el número de oficios distintos de cada departamento.*/
select nombre_depto,count(*) num_oficios_in_depto from (select nombre_depto, oficio from Departamento,Empleado where Departamento.depto_no = Empleado.depto_no group by nombre_depto,oficio) as depto_oficio group by nombre_depto;

 /* 16. Mostrar los departamentos que tengas más de dos personas trabajando en la misma profesión. */
select nombre_depto from(select nombre_depto,count(*) num_oficios_in_depto from (select nombre_depto, oficio from Departamento,Empleado where Departamento.depto_no = Empleado.depto_no group by nombre_depto,oficio) as depto_oficio group by nombre_depto) as depto_numofi where num_oficios_in_depto > 2;
