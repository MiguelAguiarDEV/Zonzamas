/*1. Selecciona, por orden alfabético decreciente, el nombre de los empleados junto con su salario
aumentado   un   1%,   para   aquellos   empleados   del   departamento   100   que   en   la   fecha   de   su
contratación tenían más de 20 años. */

select nomem,salar from Empleados where numde = 100 and timestampdiff(year,fecin,curdate()) > 20;

/* 2. Para cada Centro selecciona el presupuesto medio de los departamentos que tienen su sede en él.*/

select Centros.numce,avg(presu) from Centros,Departamentos where Centros.numce = Departamentos.numce group by Centros.numce order by Centros.numce desc;

/* 3. Selecciona el nombre de los empleados junto con su edad actual para aquellos empleados que
trabajan en el departamento de PERSONAL. */

select nomem,timestampdiff(year,fecna,curdate()) as edad from Empleados,Departamentos where Empleados.numde = Departamentos.numde and Departamentos.nomde = "Personal";


/* 4. Selecciona la dirección del centro donde están ubicados los departamentos que tiene empleados
con más de tres hijos. Deberás mostrar también el nombre de dichos departamentos. */

select Centros.dirce,nomde from Centros,Departamentos,Empleados where Centros.numce = Departamentos.numce and Departamentos.numde = Empleados.numde and Empleados.numhi > 3;

/* 5. Selecciona la dirección del centro donde están ubicados los departamentos si existe alguno que
tiene   empleados   con   más   de   tres   hijos.   Deberás   mostrar   también   el   nombre   de   dichos
departamentos.*/


/* 6. Cuenta el número de empleados que tienen el mismo número de hijos. Deberás mostrar también
el número de hijos que corresponde en cada caso.*/

select numhi,count(*) NªEmpleados  from Empleados group by numhi;

/* 7. Crea una vista llamada “Sin comisión” donde muestres el nombre, la edad y el salario de los
empleados que no tienen comisión. El salario deberá aparecer en la consulta seguido de “€” y el
nombre del campo en el que aparezca la edad será “Edad actual”. */

create view Sin_comisión as select nomem,timestampdiff(year,fecna,curdate()) EdadActual,concat(salar,"$") Salario from Empleados where comis is null;

/* 8. Utiliza la vista anterior para calcular el salario medio de los empleados que no tienen comisión.*/

select avg(Salario) as MEDIASALARIOS from Sin_comisión;

/* 9. Selecciona el nombre de los departamentos en los que trabajan empleados cuyo salario máximo
no supere los 2000 €.*/

select nomde,max(salar) from Departamentos,Empleados where Departamentos.numde = Empleados.numde group by nomde having max(salar) < 2000;

/* 10. Crea una vista con el nombre “Jubilación” donde muestres el nombre de cada
empleado, el nombre del departamento en el que trabajan, su edad y su salario para aquellos cuya edad sea, al
menos, de 60 años.*/

create view Jubilacion as select nomem,nomde,timestampdiff(year,fecna,curdate()) as Edad,salar from Empleados,Departamentos where Empleados.numde = Departamentos.numde and timestampdiff(year,fecna,curdate()) >= 60;

/* 11. Utiliza la vista anterior para mostrar el nombre de los empleados que tienen justo 60 años. */

select * from Jubilacion where Edad = 60;

/* 12. Muestra la dirección de los centros, el nombre de los empleados que trabajan en él, el nombre
del departamento concreto en el que trabajan y quien es el director de dicho departamento para
aquellos empleados cuyo nombre comience por la letra “J”.*/

select dirce,nomem,nomde,direc from Empleados,Departamentos,Centros where Centros.numce = Departamentos.numce and Departamentos.numde = Empleados.numde and  nomem like "J%";