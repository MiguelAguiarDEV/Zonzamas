-- /*Desarrolle   un   procedimiento   almacenado   que   cargue   en   una   tabla   denominada
-- felicitaciones los correos electrónicos de todos los alumnos y profesores junto con otro texto
-- que incluirá una felicitación personalizada de fin de año. Ejemplo: “Feliz año Francisco Atoche”.
-- El procedimiento deberá denominarse PROC_CARGA_felicitaciones.
-- */


-- DROP PROCEDURE IF EXISTS PROC_CARGA_felicitaciones;

-- DELIMITER $$
-- CREATE PROCEDURE PROC_CARGA_felicitaciones ()
-- BEGIN
--     /*ELIMINAR LOS DATOS DE LA TABLA felicitaciones*/
--     TRUNCATE TABLE felicitaciones;
--     /*INSERTAR ALUMNOS*/
    
--     INSERT INTO felicitaciones (dni,email,felicitacion)
--     SELECT dni,email,concat("Feliz año ",nombre," ",apellido1 ) as felicitacion FROM (SELECT dni,nombre,apellido1 FROM alumno UNION SELECT dni FROM profesor) as tabla_dnis;

--     INSERT INTO felicitaciones (dni,email,felicitacion)
--     SELECT dni,email,concat("Feliz año ",nombre," ",apellido1 ) as felicitacion FROM profesor;

-- END$$
-- DELIMITER ;

drop procedure if exists proc_cargar_felicitaciones;

delimiter ++

create procedure proc_cargar_felicitaciones()
begin

    drop table if exists felicitaciones;

    create table felicitaciones as select concat('Alumno') as 'Clase', concat('Feliz año', ' ', nombre, ' ', apellido1) as 'Persona', email from alumno union select concat('Profesor'), concat('Feliz año', ' ' , nombre, ' ', apellido1), email from profesor;

end++
delimiter ;