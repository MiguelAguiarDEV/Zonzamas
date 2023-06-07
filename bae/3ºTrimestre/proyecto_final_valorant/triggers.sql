
/*
    Estos triggers hacen que no se pueda inserTar un jugador en la tabla entrenadores 
    ni un entrenador en la tabla jugadores
*/

DROP TRIGGER IF EXISTS TRG_JUGADOR_NO_ENTRENDAOR; 
DROP TRIGGER IF EXISTS TRG_ENTRENDAOR_NO_JUGADOR; 

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



/*TRIGGER PARA SUMAR UN MAPA CUANDO SE CREA UNA PARTIDA*/

DELIMITER //
CREATE TRIGGER TRG_SUM_MAPA AFTER INSERT ON partidas
FOR EACH ROW
BEGIN
     UPDATE mapas SET partidas_jugadas = partidas_jugadas + 1 WHERE cod_mapa = NEW.cod_mapa;
END//
DELIMITER ;







