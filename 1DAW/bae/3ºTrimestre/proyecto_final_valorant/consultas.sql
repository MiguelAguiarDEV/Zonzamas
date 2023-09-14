/*MOSTRAR MAPA MAS JUGADO DE CADA EQUIPO*/

SELECT  e.cod_equipo, e.nombre_equipo, m.nombre AS mapa_mas_jugado, COUNT(*) AS total_partidas 
    FROM equipos e INNER JOIN partidas p ON e.cod_equipo = p.cod_equipo_1 OR e.cod_equipo = p.cod_equipo_2 INNER JOIN mapas m 
        ON p.cod_mapa = m.cod_mapa 
        GROUP BY e.cod_equipo, p.cod_mapa HAVING COUNT(*) = (

                SELECT MAX(total_partidas)FROM(SELECT e.cod_equipo, p.cod_mapa, COUNT(*) AS total_partidas 
                FROM equipos e INNER JOIN partidas p 
                ON e.cod_equipo = p.cod_equipo_1 OR e.cod_equipo = p.cod_equipo_2 INNER JOIN mapas m 
                ON p.cod_mapa = m.cod_mapa
                GROUP BY e.cod_equipo, p.cod_mapa) AS subconsulta 
                                
                                
            WHERE subconsulta.cod_equipo = e.cod_equipo ) ORDER BY e.cod_equipo;




/* MOSTRAR ROL MAS ABUNDANTE*/

SELECT rol, COUNT(*) AS cantidad
FROM jugadores
GROUP BY rol
ORDER BY cantidad DESC
LIMIT 1;


/*obtener el win rate de cada equipo*/
SELECT e.nombre_equipo AS equipo, COUNT(p.cod_bo3) AS total_partidas,
       COUNT(CASE WHEN p.rondas_equipo1 > p.rondas_equipo2 THEN 1 END) AS partidas_ganadas,
       COUNT(CASE WHEN p.rondas_equipo1 < p.rondas_equipo2 THEN 1 END) AS partidas_perdidas,
       COUNT(CASE WHEN p.rondas_equipo1 = p.rondas_equipo2 THEN 1 END) AS partidas_empatadas,
       CONCAT(FORMAT((COUNT(CASE WHEN p.rondas_equipo1 > p.rondas_equipo2 THEN 1 END) / COUNT(p.cod_bo3)) * 100, 2), '%') AS win_rate
FROM equipos e
LEFT JOIN partidas p ON e.cod_equipo = p.cod_equipo_1 OR e.cod_equipo = p.cod_equipo_2
GROUP BY e.cod_equipo, e.nombre_equipo;
