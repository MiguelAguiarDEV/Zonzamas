DROP TRIGGER IF EXISTS TRG_SUM_MAPA;


DELIMITER //
CREATE TRIGGER TRG_SUM_MAPA AFTER INSERT ON partidas
FOR EACH ROW
BEGIN
     UPDATE mapas SET partidas_jugadas = partidas_jugadas + 1 WHERE cod_mapa = NEW.cod_mapa;
END//
DELIMITER ;