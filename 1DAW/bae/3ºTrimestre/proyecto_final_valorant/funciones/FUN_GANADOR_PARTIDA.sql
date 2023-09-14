/*FUNCION PARA VER EL GANADOR DE UNA PARTIDA*/
DROP FUNCTION IF EXISTS FUN_GANADOR_PARTIDA;


DELIMITER //
CREATE FUNCTION FUN_GANADOR_PARTIDA(cod_bo3 INT, num_partida INT) RETURNS INT
DETERMINISTIC
BEGIN
    DECLARE cod_equipo_ganador INT;
    DECLARE cod_equipo_2 INT;



    SELECT
        CASE
            WHEN p.rondas_equipo1 > p.rondas_equipo2 THEN p.cod_equipo_1
            WHEN p.rondas_equipo2 > p.rondas_equipo1 THEN p.cod_equipo_2
            ELSE NULL
        END AS cod_ganador
    INTO cod_equipo_ganador
    FROM partidas p
    WHERE p.cod_bo3 = cod_bo3
        AND p.num_partida = num_partida
    LIMIT 1;
    
    RETURN cod_equipo_ganador;
END //

DELIMITER ;

SELECT FUN_GANADOR_PARTIDA(1,1)

