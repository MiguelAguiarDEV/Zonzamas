DROP FUNCTION IF EXISTS FUN_GANADOR_BO3;


DELIMITER //

CREATE FUNCTION FUN_GANADOR_BO3(cod_bo3 INT) RETURNS INT
DETERMINISTIC
BEGIN
    DECLARE done INT DEFAULT FALSE;
    DECLARE num_partida INT;
    DECLARE cod_equipo_ganador INT;
    
    DECLARE bo3_cursor CURSOR FOR
        SELECT p.num_partida
        FROM partidas p
        WHERE p.cod_bo3 = cod_bo3;
    
    DECLARE CONTINUE HANDLER FOR NOT FOUND
        SET done = TRUE;
    
    OPEN bo3_cursor;
    
    read_loop: LOOP
        FETCH bo3_cursor INTO num_partida;
        
        IF done THEN
            LEAVE read_loop;
        END IF;
        
        SET cod_equipo_ganador = FUN_GANADOR_PARTIDA(cod_bo3, num_partida);
    END LOOP;
    
    CLOSE bo3_cursor;

    RETURN cod_equipo_ganador;
    
END //

DELIMITER ;


select FUN_GANADOR_BO3(1);