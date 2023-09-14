DROP TRIGGER IF EXISTS anhadir_a_estadisticas;
DELIMITER $$
CREATE TRIGGER anhadir_a_estadisticas AFTER UPDATE ON empleado FOR EACH ROW
BEGIN
    select nombre_depto into @nombre_departamento_nuevo from departamento where NEW.depto_no = depto_no;
    select nombre_depto into @nombre_departamento_viejo from departamento where OLD.depto_no = depto_no;
    SELECT count(*) into @contador from estadisticas_empleados where nombre_depto = @nombre_departamento_nuevo; 
    IF @contador = 0 THEN
        INSERT INTO estadisticas_empleados VALUES (@nombre_departamento_nuevo,1);
    ELSE
        UPDATE estadisticas_empleados
        SET numempleados = numempleados + 1
        WHERE @nombre_departamento_nuevo = nombre_depto;

        UPDATE estadisticas_empleados
        SET numempleados = numempleados - 1
        WHERE @nombre_departamento_viejo = nombre_depto;
        

    END IF;
END $$
DELIMITER ;



