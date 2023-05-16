DROP TRIGGER IF EXISTS anhadir_a_estadisticas;
DELIMITER $$
CREATE TRIGGER anhadir_a_estadisticas AFTER INSERT ON empleado FOR EACH ROW
BEGIN
    SELECT nombre_depto into @nombre_departamento from departamento where NEW.depto_no = depto_no;
    SELECT count(*) into @contador from estadisticas_empleados where nombre_depto = @nombre_departamento; 
    IF @contador = 0 THEN
        INSERT INTO estadisticas_empleados VALUES (@nombre_departamento,1);
    ELSE
        UPDATE estadisticas_empleados
        SET numempleados = numempleados + 1
        WHERE @nombre_departamento = nombre_depto;
        
    END IF;
END $$
DELIMITER ;



