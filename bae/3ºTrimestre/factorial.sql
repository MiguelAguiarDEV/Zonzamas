DROP FUCTION IF EXISTS factorial;
DELIMITER $$
CREATE FUCTION factorial(numero INT)
RETURNS INT
BEGIN
  DECLARE resultado INT DEFAULT 1;
  DECLARE i INT DEFAULT 1;

  WHILE i <= numero DO
    SET resultado = resultado * i;
    SET i = i + 1;
  END WHILE;

  RETURN resultado;
END;