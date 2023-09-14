DROP PROCEDURE IF EXISTS PROC_BAJA_CLIENTES;

DELIMITER $$
CREATE PROCEDURE PROC_BAJA_CLIENTES ()
BEGIN
    DECLARE codigo INT;


    DECLARE leer_clientes CURSOR FOR
        SELECT codcliente
        FROM reserva;



    OPEN leer_clientes;


    read_loop: LOOP

        FETCH leer_clientes INTO codigo;
            IF (SELECT FLOOR(DATEDIFF(CURRENT_DATE(),fechareserva) / 365) años FROM (select codcliente,MAX(fechareserva) fechareserva from reserva GROUP by codcliente) as reservas2 WHERE codcliente = codigo) > 1 THEN
                INSERT INTO cliente_borrado VALUES (codigo,USER(),CURRENT_DATE());
                DELETE FROM reserva WHERE codcliente = codigo;
                DELETE FROM cliente WHERE codcliente = codigo;
            END IF;
        


    END LOOP;

    CLOSE leer_clientes;
    
    SELECT codcliente,MAX(fechareserva) FROM reserva GROUP BY codcliente;
    
END$$
DELIMITER ;

