DROP PROCEDURE IF EXISTS PROC_WINRATE_EQUIPO_MAPA;


DELIMITER //

CREATE PROCEDURE PROC_WINRATE_EQUIPO_MAPA(IN cod_equipo INT, IN cod_mapa INT)
BEGIN
    -- Variables para almacenar el total de partidas jugadas y ganadas por el equipo en el mapa
    DECLARE total_partidas INT;
    DECLARE partidas_ganadas INT;
    
    -- Variable para almacenar el winrate en porcentaje
    DECLARE winrate DECIMAL(5,2);
    
    -- Obtener el total de partidas jugadas por el equipo en el mapa
    SELECT COUNT(*) INTO total_partidas
    FROM partidas
    WHERE (cod_equipo_1 = cod_equipo OR cod_equipo_2 = cod_equipo)
        AND cod_mapa = cod_mapa;
    
    -- Obtener el total de partidas ganadas por el equipo en el mapa
    SELECT COUNT(*) INTO partidas_ganadas
    FROM partidas
    WHERE ((cod_equipo_1 = cod_equipo AND rondas_equipo1 > rondas_equipo2)
        OR (cod_equipo_2 = cod_equipo AND rondas_equipo2 > rondas_equipo1))
        AND cod_mapa = cod_mapa;
    
    -- Calcular el winrate en porcentaje
    IF total_partidas > 0 THEN
        SET winrate = (partidas_ganadas / total_partidas) * 100;
    ELSE
        SET winrate = 0;
    END IF;
    
    -- Mostrar el resultado
    SELECT cod_equipo,cod_mapa,CONCAT(FORMAT(winrate, 2), '%') AS winrate;
END //

DELIMITER ;


CALL PROC_WINRATE_EQUIPO_MAPA(1, 2);
