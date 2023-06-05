
/*
    Estos triggers hacen que no se pueda inserar un jugador en la tabla entrenadores 
    ni un entrenador en la tabla jugadores
*/


DELIMITER //
CREATE TRIGGER trg_jugador_entrenador BEFORE INSERT ON jugadores
FOR EACH ROW
BEGIN
    DECLARE cod_entrenador_exists INT;
    SELECT COUNT(*) INTO cod_entrenador_exists FROM entrenadores WHERE cod_entrenador = NEW.cod_jugador;
    IF cod_entrenador_exists > 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Un jugador no puede ser asignado como entrenador.';
    END IF;
END//



DELIMITER ;

DELIMITER //
CREATE TRIGGER trg_entrenador_jugador BEFORE INSERT ON entrenadores
FOR EACH ROW
BEGIN
    DECLARE cod_jugador_exists INT;
    SELECT COUNT(*) INTO cod_jugador_exists FROM jugadores WHERE cod_jugador = NEW.cod_entrenador;
    IF cod_jugador_exists > 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Un entrenador no puede ser asignado como jugador.';
    END IF;
END//
DELIMITER ;







