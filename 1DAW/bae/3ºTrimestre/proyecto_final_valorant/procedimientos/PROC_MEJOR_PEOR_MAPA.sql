/*PROCEDIMIENTO PARA MOSTRAR DATOS SOBRE EL MEJOR Y EL PEOR MAPA DE UN EQUIPO*/


DROP PROCEDURE IF EXISTS PROC_MEJOR_PEOR_MAPA;

DELIMITER //

CREATE PROCEDURE PROC_MEJOR_PEOR_MAPA(IN cod_equipo INT)
BEGIN
    DECLARE mejor_mapa VARCHAR(20);
    DECLARE peor_mapa VARCHAR(20);
    DECLARE mejor_partidas_ganadas INT;
    DECLARE peor_partidas_perdidas INT;
    
    SELECT m.nombre, COUNT(*) AS num_partidas_ganadas
    INTO mejor_mapa, mejor_partidas_ganadas
    FROM partidas p
    JOIN mapas m ON p.cod_mapa = m.cod_mapa
    WHERE (p.cod_equipo_1 = cod_equipo OR p.cod_equipo_2 = cod_equipo)
      AND (p.rondas_equipo1 > p.rondas_equipo2)
    GROUP BY p.cod_mapa, m.nombre
    ORDER BY num_partidas_ganadas DESC
    LIMIT 1;
    
    SELECT m.nombre, COUNT(*) AS num_partidas_perdidas
    INTO peor_mapa, peor_partidas_perdidas
    FROM partidas p
    JOIN mapas m ON p.cod_mapa = m.cod_mapa
    WHERE (p.cod_equipo_1 = cod_equipo OR p.cod_equipo_2 = cod_equipo)
      AND (p.rondas_equipo1 < p.rondas_equipo2)
    GROUP BY p.cod_mapa, m.nombre
    ORDER BY num_partidas_perdidas DESC
    LIMIT 1;
    
    SELECT cod_equipo, mejor_mapa,peor_mapa;
    
END //

DELIMITER ;


CALL PROC_MEJOR_PEOR_MAPA(1);


