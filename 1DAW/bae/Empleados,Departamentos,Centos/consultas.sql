/* 1. Hallar, por orden alfabético, los nombres de los departamentos 
cuyo director lo es en funciones y 
no en propiedad.*/

select nomde from Departamentos where tidir = "F" order by nomde;

/* 2. Obtener un listín telefónico de los empleados del departamento
121 incluyendo nombre de empleado, número de empleado 
y extensión telefónica. Por orden alfabético.*/

select nomem,numem,extel from Empleados where numde = 121 order by numem;

/* 3. Obtener por orden creciente una relación de todos los 
números de extensiones telefónicas de los empleados, 
junto con el nombre de estos, para aquellos que 
trabajen en el departamento 110. 
Mostrar la consulta tal y como aparece en la imagen.*/

select nomem as Nombre,extel as "Extencion Telefonica" from Empleados where numde = 110 order by numem asc;

/* 4. Hallar la comisión, nombre y salario de los empleados que 
tienen tres hijos, clasificados por comisión, y dentro 
de comisión por orden alfabético.*/

select comis,nomem,salar from Empleados where numhi = 3 order by comis;


/* 5. Hallar la comisión, nombre y salario de los empleados 
que tienen tres hijos, clasificados por comisión, y 
dentro de comisión por orden alfabético, para aquellos 
empleados que tienen comisión.*/

select comis,nomem,salar from Empleados where comis is not null and numhi = 3 order by comis;

/* 6. Obtener salario y nombre de los empleados sin hijos y cuyo salario es mayor que 1200 y menor 
que 1500 €. Se obtendrán por orden decreciente de salario y por orden alfabético dentro de salario. */

select nomem,salar from Empleados where numhi = 0 and salar between 1201 and 1499 order by salar;

/* 7. Obtener los números de los departamentos donde trabajan empleados cuyo salario sea inferior a 
1500 €*/

select numde from Empleados where salar < 1500 group by numde;

/* 8. Obtener las distintas comisiones que hay en el departamento 110. */

select comis from Empleados where numde = 110 and comis is not null group by comis;
