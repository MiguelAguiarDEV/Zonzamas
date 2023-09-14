


DROP PROCEDURE IF EXISTS PROC_PORCENTAJE_MAPAS;



DELIMITER //

CREATE PROCEDURE PROC_PORCENTAJE_MAPAS()
BEGIN
    -- Variable para almacenar el total de partidas jugadas
    DECLARE total_partidas INT;
    
    -- Variable para almacenar el porcentaje de cada mapa
    DECLARE porcentaje FLOAT;
    
    -- Tabla temporal para almacenar los resultados
    CREATE TEMPORARY TABLE IF NOT EXISTS tmp_porcentaje_mapas (
        cod_mapa INT,
        partidas_jugadas INT,
        porcentaje VARCHAR(10)
    );
    
    -- Obtener el total de partidas jugadas
    SELECT COUNT(*) INTO total_partidas FROM partidas;
    
    -- Calcular el porcentaje para cada mapa
    INSERT INTO tmp_porcentaje_mapas (cod_mapa, partidas_jugadas, porcentaje)
    SELECT cod_mapa, partidas_jugadas, CONCAT(FORMAT((partidas_jugadas / total_partidas) * 100, 2), '%')
    FROM mapas;
    
    -- Seleccionar los resultados
    SELECT m.cod_mapa, m.nombre, p.partidas_jugadas, p.porcentaje
    FROM mapas m
    INNER JOIN tmp_porcentaje_mapas p ON m.cod_mapa = p.cod_mapa;
    
    -- Eliminar la tabla temporal
    DROP TEMPORARY TABLE IF EXISTS tmp_porcentaje_mapas;
END //

DELIMITER ;


CALL PROC_PORCENTAJE_MAPAS();