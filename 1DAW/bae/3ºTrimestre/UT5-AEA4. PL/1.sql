-- Crea un procedimiento llamado ESCRIBE para mostrar por pantalla el mensaje "HOLA MUNDO".

DROP PROCEDURE IF EXISTS escribir;

DELIMITER $$
CREATE PROCEDURE escribir ()
BEGIN
	SELECT "Hola mundo";
END$$
DELIMITER ;