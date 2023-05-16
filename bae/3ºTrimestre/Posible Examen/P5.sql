DROP TABLE IF EXISTS clasificacion_liga;

CREATE TABLE clasificacion_liga (
    codequipo integer NOT NULL,
    pj integer default 0,
    pg integer default 0,
    pe integer default 0,
    pp integer default 0,
    gf integer default 0,
    gc integer default 0,
    puntos integer default 0,
    FOREIGN KEY (codequipo) REFERENCES equipos(codequipo)
);



DROP TRIGGER IF EXISTS actualizar_clasificacion_liga;
DELIMITER $$
CREATE TRIGGER actualizar_clasificacion_liga AFTER INSERT ON partidos FOR EACH ROW
BEGIN
    IF (NEW.codequipolocal NOT IN (SELECT codequipo FROM ligasantander.clasificacion_liga)) THEN
        INSERT INTO ligasantander.clasificacion_liga (codequipo,pj,pg,pe,pp,gf,gc,puntos) VALUES (NEW.codequipolocal,0,0,0,0,0,0,0);
    END IF;
    
    IF (NEW.codequipovisitante NOT IN (SELECT codequipo FROM ligasantander.clasificacion_liga)) THEN
        INSERT INTO ligasantander.clasificacion_liga (codequipo,pj,pg,pe,pp,gf,gc,puntos) VALUES (NEW.codequipovisitante,0,0,0,0,0,0,0);
    END IF;

    IF (NEW.gol_local = NEW.gol_visitante) THEN
        UPDATE ligasantander.clasificacion_liga
        SET pj = pj + 1,pe = pe + 1,gf = gf + NEW.gol_local,gc = gc + NEW.gol_visitante,puntos = puntos + 1
        WHERE codequipo = NEW.codequipolocal;

        UPDATE ligasantander.clasificacion_liga
        SET pj = pj + 1,pe = pe + 1,gf = gf + NEW.gol_visitante,gc = gc + NEW.gol_local,puntos = puntos + 1
        WHERE codequipo = NEW.codequipovisitante;
    END IF;

    IF (NEW.gol_local > NEW.gol_visitante) THEN
        UPDATE ligasantander.clasificacion_liga
        SET pj = pj + 1,pg = pg + 1,gf = gf + NEW.gol_local,gc = gc + NEW.gol_visitante,puntos = puntos + 3
        WHERE codequipo = NEW.codequipolocal;

        UPDATE ligasantander.clasificacion_liga
        SET pj = pj + 1,pp = pp + 1,gf = gf + NEW.gol_visitante,gc = gc + NEW.gol_local
        WHERE codequipo = NEW.codequipovisitante;
    END IF;


    IF (NEW.gol_local < NEW.gol_visitante) THEN
        UPDATE ligasantander.clasificacion_liga
        SET pj = pj + 1,pp = pp + 1,gf = gf + NEW.gol_local,gc = gc + NEW.gol_visitante
        WHERE codequipo = NEW.codequipolocal;

        UPDATE ligasantander.clasificacion_liga
        SET pj = pj + 1,pg = pg + 1,gf = gf + NEW.gol_visitante,gc = gc + NEW.gol_local,puntos = puntos + 3
        WHERE codequipo = NEW.codequipovisitante;
    END IF;

END $$
DELIMITER ;

SELECT * from clasificacion_liga ORDER by puntos desc;



