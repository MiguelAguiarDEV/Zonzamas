
DROP TRIGGER IF EXISTS TRG_JUGADOR_NO_ENTRENDAOR; 

DELIMITER //
CREATE TRIGGER TRG_JUGADOR_NO_ENTRENDAOR BEFORE INSERT ON jugadores
FOR EACH ROW
BEGIN
    DECLARE cod_entrenador_exists INT;
    SELECT COUNT(*) INTO cod_entrenador_exists FROM entrenadores WHERE cod_persona = NEW.cod_persona;
    IF cod_entrenador_exists > 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Un jugador no puede ser asignado como entrenador.';
    END IF;
END//



DELIMITER ;