/*Desarrolle   un   procedimiento   almacenado   que   cargue   en   una   tabla   denominada
FELICITACIONES los correos electrónicos de todos los alumnos y profesores junto con otro texto
que incluirá una felicitación personalizada de fin de año. Ejemplo: “Feliz año Francisco Atoche”.
El procedimiento deberá denominarse PROC_CARGA_FELICITACIONES.
*/


DROP PROCEDURE IF EXISTS PROC_CARGA_FELICITACIONES;

DELIMITER $$
CREATE PROCEDURE PROC_CARGA_FELICITACIONES ()
BEGIN
    /*ELIMINAR LOS DATOS DE LA TABLA FELICITACIONES*/
    TRUNCATE TABLE felicitaciones;
    /*INSERTAR ALUMNOS*/
    
    INSERT INTO felicitaciones (dni,email,felicitacion)
    SELECT dni,email,concat("Feliz año ",nombre," ",apellido1 ) as felicitacion FROM alumno;

    INSERT INTO felicitaciones (dni,email,felicitacion)
    SELECT dni,email,concat("Feliz año ",nombre," ",apellido1 ) as felicitacion FROM profesor;

END$$
DELIMITER ;