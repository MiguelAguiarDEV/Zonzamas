/*Desarrolle una función que dado un DNI de un alumno, nos devuelva el número total de
horas correspondientes a la suma de las horas de todas las asignaturas en las que este se encuentra
matriculado. El procedimiento deberá denominarse FUN_ALUMNO_HORAS.

*/



DROP FUNCTION IF EXISTS FUN_ALUMNO_HORAS;
DROP FUNCTION IF EXISTS FUN_ALUMNO_HORAS;

DELIMITER $$
CREATE FUNCTION FUN_ALUMNO_HORAS (dni_alumno INT)
RETURNS INT
DETERMINISTIC
BEGIN
    DECLARE horas_totales INT;

    IF EXISTS (SELECT 1 FROM alumno WHERE dni = dni_alumno) THEN
        SELECT SUM(horas) INTO horas_totales  
        FROM asignatura a
        INNER JOIN matricula m ON a.codigo = m.codigoasignatura 
        WHERE m.dnialumno = dni_alumno;

        RETURN horas_totales;
    ELSE
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El DNI del alumno no existe';
    END IF;
END $$
DELIMITER ;

