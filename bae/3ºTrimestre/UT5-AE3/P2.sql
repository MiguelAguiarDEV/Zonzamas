DROP TRIGGER IF EXISTS no_mas_sueldo_presidente;
DELIMITER $$
CREATE TRIGGER no_mas_sueldo_presidente BEFORE INSERT ON empleado FOR EACH ROW
BEGIN
SELECT salario into @salario_presidente from empleado where oficio = "Presidente";
IF (NEW.salario > @salario_presidente) THEN
SIGNAL SQLSTATE '45000' SET message_text='El salario del empleado no puede ser mayor que el del presidente';
END IF;
END $$
DELIMITER ;