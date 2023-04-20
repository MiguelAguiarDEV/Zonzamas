--  Crea un procedimiento llamado SERIE que muestre por pantalla una
-- serie de números desde un mínimo hasta un máximo con un determinado paso.
-- La forma del procedimiento será la siguiente:
-- SERIE (minimo NUMBER, maximo NUMBER, paso NUMBER)

DROP PROCEDURE IF EXISTS serie;
DELIMITER $$
CREATE PROCEDURE serie (minimo INT, maximo INT, paso INT)
BEGIN
END $$
DELIMITER ;