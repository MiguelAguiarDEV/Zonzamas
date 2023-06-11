DROP FUNCTION IF EXISTS FUN_EQUIPO_JUGADOR;

DELIMITER //

CREATE FUNCTION FUN_EQUIPO_JUGADOR(cod_jugador INT) RETURNS VARCHAR(30)
DETERMINISTIC
BEGIN
    DECLARE equipo VARCHAR(30);
    
    SELECT cod_equipo INTO equipo
    FROM equipos
    WHERE cod_jugador1 = cod_jugador
        OR cod_jugador2 = cod_jugador
        OR cod_jugador3 = cod_jugador
        OR cod_jugador4 = cod_jugador
        OR cod_jugador5 = cod_jugador
        OR cod_jugador6 = cod_jugador;
    
    RETURN equipo;
END //

DELIMITER ;


SELECT FUN_EQUIPO_JUGADOR(100)