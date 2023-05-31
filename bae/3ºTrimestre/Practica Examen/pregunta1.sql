/*Desarrolle  un   procedimiento   almacenado  que nos muestre por pantalla la relación de
profesores   que   no   imparten   ninguna   asignatura.   El   procedimiento   deberá   denominarse
PROC_PROFESORES_ NO_ASIG.



Cnsulata para saber que profesores no imparten ninguna asignatura

SELECT p.dni,p.nombre,p.apellido1,p.apellido2,p.email,p.departamento 
FROM imparte i 
RIGHT JOIN profesor p 
ON i.dniprofesor = p.dni 
WHERE i.dniprofesor IS NULL;
*/

DROP PROCEDURE IF EXISTS PROC_PROFESORES_NO_ASIG;

DELIMITER $$
CREATE PROCEDURE PROC_PROFESORES_NO_ASIG ()
BEGIN
    SELECT p.dni,p.nombre,p.apellido1,p.apellido2,p.email,p.departamento 
    FROM imparte i 
    RIGHT JOIN profesor p 
    ON i.dniprofesor = p.dni 
    WHERE i.dniprofesor IS NULL;
END$$
DELIMITER ;

