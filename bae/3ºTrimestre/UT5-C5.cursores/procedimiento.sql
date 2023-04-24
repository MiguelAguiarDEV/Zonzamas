DROP PROCEDURE IF EXISTS poner_nota_final;

DELIMITER $$
CREATE PROCEDURE poner_nota_final ()
BEGIN

    DECLARE v_noHayMasDatos INT DEFAULT FALSE;
    DECLARE v_nota INT;
    DECLARE v_ident varchar(45);
    DECLARE v_nota_final varchar(20);

    DECLARE c_notas CURSOR FOR
        SELECT Ident, Nota FROM Notas;

    DECLARE CONTINUE HANDLER FOR NOT FOUND SET v_noHayMasDatos = TRUE;

    OPEN c_notas;

    read_loop: LOOP  
        FETCH c_notas INTO v_ident, v_nota;

        SET v_nota_final =
            CASE 
                WHEN v_nota >= 9 THEN 'Sobresaliente'
                WHEN v_nota >= 7 AND v_nota < 9 THEN 'Notable'
                WHEN v_nota >= 6 AND v_nota < 7 THEN 'Bien'
                WHEN v_nota >= 5 AND v_nota < 6 THEN 'Aprobado'
                ELSE 'Suspenso'
            END; 

        UPDATE Notas SET nota_final = v_nota_final WHERE Ident = v_ident;  

        IF v_noHayMasDatos THEN
            LEAVE read_loop;
        END IF;
    END LOOP;
END$$
DELIMITER ;