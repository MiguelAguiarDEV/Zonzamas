DROP FUNCTION IF EXISTS posicion_tabla;

DELIMITER $$
CREATE FUNCTION posicion_tabla (equipo_deseado INT)
RETURNS VARCHAR(20) 
DETERMINISTIC 
BEGIN
    

    SELECT puntos into @puntuacion_equipo
    FROM (SELECT * from clasificacion_liga ORDER by puntos desc) as tabla_ordenada
    WHERE codequipo = equipo_deseado;

    SELECT count(*) into @existe
    FROM (SELECT * from clasificacion_liga ORDER by puntos desc) as tabla_ordenada
    WHERE codequipo = equipo_deseado;

     IF (@existe = 0) THEN
        RETURN "ERROR";
    ELSE 
        SELECT CONCAT(COUNT(*) + 1, 'º') into @clasificacion
        FROM clasificacion_liga
        WHERE puntos > @puntuacion_equipo;
        RETURN @puntuacion_equipo;
    END IF;
    
END $$
DELIMITER ;


