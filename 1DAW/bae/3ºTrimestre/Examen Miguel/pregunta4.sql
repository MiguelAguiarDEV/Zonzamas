DROP TRIGGER IF EXISTS DISP_COBRAR;
DELIMITER $$
CREATE TRIGGER DISP_COBRAR AFTER INSERT ON reserva FOR EACH ROW
BEGIN
    DECLARE precio INT;
    DECLARE precio_total INT;
    SET precio =  (select preciodia from coche WHERE codcoche = codcoche.NEW);
    SET precio_total = precio*dias.NEW;
    IF precio_total > (SELECT credito FROM cliente WHERE codcliente = codcliente.NEW) THEN

        SIGNAL SQLSTATE '45000' SET message_text='EL cliente no tiene credito suficiente';
    END IF;
END $$
DELIMITER ;