DROP PROCEDURE IF EXISTS PROC_EMPLEADOS_FECHA;

DELIMITER $$
CREATE PROCEDURE PROC_EMPLEADOS_FECHA ()
BEGIN
    DECLARE empleado_mas_antiguo VARCHAR(30);
    DECLARE empleado_mas_nuevo VARCHAR(30);

	SELECT nombre INTO @empleado_mas_antiguo FROM empleado ORDER BY edad DESC LIMIT 1;
	SELECT nombre INTO @empleado_mas_nuevo FROM empleado ORDER BY edad ASC LIMIT 1;
    SELECT CONCAT("El empleado mas antiguo es ",@empleado_mas_antiguo," y el mas nuevo es ",@empleado_mas_nuevo);
    
END$$
DELIMITER ;