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
