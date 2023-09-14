
DROP FUNCTION IF EXISTS FUN_DEPTO_SALARIO;

DELIMITER $$
CREATE FUNCTION FUN_DEPTO_SALARIO (departamento_deseado INT)
RETURNS INT 
DETERMINISTIC 
BEGIN
    SELECT depto_no into @depto_no_var from empleado where depto_no = departamento_deseado limit 1;
    SELECT sum(salario) into @salario_total from empleado where depto_no = departamento_deseado;
    IF  (@depto_no_var is NULL) THEN
        RETURN "no existe ese departamento";
    ELSE 
        RETURN @salario_total;
    END IF;
END $$
DELIMITER ;


