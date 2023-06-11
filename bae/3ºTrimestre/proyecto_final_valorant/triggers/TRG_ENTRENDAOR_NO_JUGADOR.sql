DROP TRIGGER IF EXISTS TRG_ENTRENDAOR_NO_JUGADOR; 


DELIMITER //
CREATE TRIGGER TRG_ENTRENDAOR_NO_JUGADOR BEFORE INSERT ON entrenadores
FOR EACH ROW
BEGIN
    DECLARE cod_jugador_exists INT;
    SELECT COUNT(*) INTO cod_jugador_exists FROM jugadores WHERE cod_persona = NEW.cod_persona;
    IF cod_jugador_exists > 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Un entrenador no puede ser asignado como jugador.';
    END IF;
END//
DELIMITER ;