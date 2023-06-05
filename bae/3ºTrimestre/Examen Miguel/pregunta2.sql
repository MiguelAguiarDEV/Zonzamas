DROP FUNCTION IF EXISTS FUN_CLIENTE_ALTA;

DELIMITER $$
CREATE FUNCTION FUN_CLIENTE_ALTA (codigo INT)
RETURNS VARCHAR(255)
DETERMINISTIC
BEGIN
    DECLARE años INT;
    DECLARE dias INT;
    DECLARE resultado VARCHAR(255);
    
    IF EXISTS (SELECT 1 FROM cliente WHERE codcliente = codigo) THEN
        SELECT FLOOR(DATEDIFF(CURRENT_DATE(), fechalta) / 365) AS años
        INTO años
        FROM cliente 
        WHERE codcliente = codigo;

        SELECT DATEDIFF(CURRENT_DATE(), fechalta) % 365 AS dias
        INTO dias
        FROM cliente 
        WHERE codcliente = codigo;
        
        SET resultado = CONCAT(años, ' años', dias, ' días');
    ELSE
        SET resultado = 'Cliente no encontrado';
    END IF;

    RETURN resultado;
END $$
DELIMITER ;