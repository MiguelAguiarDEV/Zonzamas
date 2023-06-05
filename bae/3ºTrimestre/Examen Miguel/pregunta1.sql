DROP PROCEDURE IF EXISTS PROC_RESERVA_DEVUELVE;

DELIMITER $$
CREATE PROCEDURE PROC_RESERVA_DEVUELVE ()
BEGIN

    SELECT nombre ,marca ,fechareserva, dias, DATE_ADD(fechareserva,INTERVAL dias DAY) fecha_devolucion
    FROM cliente c,coche o ,reserva r 
    WHERE c.codcliente = r.codcliente and o.codcoche = r.codcoche; 
END$$
DELIMITER ;

