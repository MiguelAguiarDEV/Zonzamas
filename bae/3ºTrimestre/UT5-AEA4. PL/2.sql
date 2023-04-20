-- Crea   un   procedimiento   llamado   ESCRIBE_MENSAJE   que   tenga   un
-- parámetro de tipo VARCHAR2 que recibe un texto y lo muestre por pantalla. La
-- forma del procedimiento será la siguiente

DROP PROCEDURE IF EXISTS escribir_mensaje;

DELIMITER $$
CREATE PROCEDURE escribir_mensaje (mensaje VARCHAR(50))
BEGIN
	SELECT mensaje;
END$$
DELIMITER ;