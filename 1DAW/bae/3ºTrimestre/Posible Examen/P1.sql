CREATE VIEW equipos_partidos AS
SELECT p.codpartido, e1.nombre AS EquipoLocal, e2.nombre AS EquipoVisitante, p.fecha,p.jornada,p.gol_local,p.gol_visitante
FROM partidos p
JOIN equipos e1 ON p.codequipolocal = e1.codequipo
JOIN equipos e2 ON p.codequipovisitante = e2.codequipo;