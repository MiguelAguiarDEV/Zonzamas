DELIMITER $$

DROP FUNCTION IF EXISTS factorial;

CREATE FUNCTION factorial (numero INT)
RETURNS INT 
DETERMINISTIC
BEGIN
	DECLARE i INT DEFAULT 1;
    DECLARE factorial BIGINT DEFAULT 1;
    WHILE i <= numero DO
        SET factorial = factorial * i;
        SET i = i + 1;
    END WHILE;
    RETURN factorial;
END $$
DELIMITER ;