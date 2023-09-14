DROP PROCEDURE IF EXISTS PROC_ACTUALIZAR_CLASIFICACION;

DELIMITER //

CREATE PROCEDURE PROC_ACTUALIZAR_CLASIFICACION()
BEGIN
    DECLARE done INT DEFAULT FALSE;
    DECLARE cod_bo3_temp INT;
    DECLARE cod_equipo_ganador_temp INT;
    
    DECLARE bo3_cursor CURSOR FOR
        SELECT b.cod_bo3
        FROM BO3 b;
    
    DECLARE CONTINUE HANDLER FOR NOT FOUND
        SET done = TRUE;
    
    TRUNCATE TABLE clasificacion;
    CREATE TEMPORARY TABLE IF NOT EXISTS temp_clasi (
    cod_equipo_temp INT
    );

    OPEN bo3_cursor;
    
    read_loop: LOOP
        FETCH bo3_cursor INTO cod_bo3_temp;
        

        SET cod_equipo_ganador_temp = FUN_GANADOR_BO3(cod_bo3_temp);

        INSERT INTO temp_clasi (cod_equipo_temp) VALUES (cod_equipo_ganador_temp);


        IF done THEN
            LEAVE read_loop;
        END IF;


    END LOOP;
    CLOSE bo3_cursor;


    SELECT CONCAT(ROW_NUMBER() OVER (ORDER BY bo3_ganados DESC),"º") AS numero_fila, cod_equipo, bo3_ganados
    FROM (
        SELECT cod_equipo_temp AS cod_equipo, COUNT(*) AS bo3_ganados
        FROM temp_clasi
        GROUP BY cod_equipo_temp
    ) AS subconsulta;

   
    INSERT INTO clasificacion (posicion, cod_equipo,bo3_ganados)
    SELECT CONCAT(ROW_NUMBER() OVER (ORDER BY bo3_ganados DESC),"º") AS numero_fila, cod_equipo, bo3_ganados
    FROM (
        SELECT cod_equipo_temp AS cod_equipo, COUNT(*) AS bo3_ganados
        FROM temp_clasi
        GROUP BY cod_equipo_temp
    ) AS subconsulta;

    DROP TEMPORARY TABLE IF EXISTS temp_clasi;
END //

DELIMITER ;

CALL PROC_ACTUALIZAR_CLASIFICACION();

SELECT * FROM clasificacion;