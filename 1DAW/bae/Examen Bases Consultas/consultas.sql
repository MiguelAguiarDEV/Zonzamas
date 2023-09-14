/*1.*/
select pelicula.codpelicula,nombre,(preciodia * sum(dias)),max(fechalquiler) from alquiler,pelicula where pelicula.codpelicula = alquiler.codpelicula group by pelicula.codpelicula,nombre;


/*2.*/
select codpelicula, count(codpelicula) from alquiler group by codpelicula;

/*3*/
select nombre from pelicula where pelicula.codpelicula not in (select alquiler.codpelicula from alquiler);