//Si las peliculas estan en local storage las recupera y las guarda en la variable arrayPeliculas.
if (localStorage.getItem("peliculas")) {

  arrayPeliculas = JSON.parse(localStorage.getItem("movies"));
  console.log("Peliculas recuoeradas del local storage: " + arrayPeliculas);
}

var arrayPeliculas = {
    "1": {
        id: 1,
        nombre: 'Avatar el sentido del agua',
        director: 'James Cameron',
        duracion: 120,
        genero: 'Ciencia Ficcion',
        urlPortada: 'img/avatar.jpeg',
        precio: 10,
        butacas: Array(20).fill(0),
    },
    "2": {
        id: 2,
        nombre: 'El viaje de Chihiro',
        director: 'Hayao Miyazaki',
        duracion: 125,
        genero: 'Animacion',
        urlPortada: 'img/chijiro.webp',
        precio: 5,
        butacas: Array(23).fill(0),
    },
    "3": {
        id: 3,
        nombre: 'Interstellar',
        director: 'Christopher Nolan',
        duracion: 150,
        genero: 'Ciencia Ficcion',
        urlPortada: 'img/Interstellar.jpg',
        precio: 7,
        butacas: Array(50).fill(0),
    },
    "4": {
        id: 4,
        nombre: 'El Hobbit',
        director: 'Peter Jackson',
        duracion: 180,
        genero: 'Fantasia',
        urlPortada: 'img/hobbit.jpg',
        precio: 2,
        butacas: Array(25).fill(0),
    },
};
function generarPortadas(arrayPeliculas) {
    arrayPeliculas.forEach(pelicula => {
        $("#cartelera").append(`
        <section id="portada-${pelicula.nombre.replace(" ", "-")}" class="rounded-9 portada shadow hover-zoom overflow-hidden d-flex justify-content-center">
			<div class="card" style="width: 18rem;">
				<img src="${pelicula.urlPortada}" class="card-img-top" alt="...">
				<div class="card-body">
					<h5 class="card-title">${pelicula.nombre}</h5>
                    <p class="card-text">Genero: ${pelicula.genero}</p>
                    <p class="card-text">Duracuion: ${pelicula.duracion} min</p>  
                    <button id="btn-${pelicula.id}" type="button" class="btn-reservar btn btn-primary position-relative">
						Reservar
						<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
							${pelicula.precio}€
						</span>
                    </button>
                </div>
            </div>
		</section>
        `)
    });
}
generarPortadas(arrayPeliculas);

function generarPaginaReserva(id) {
    $("#contendor-reserva").append(`
        <h1 class="text-center">Pelicula: ${arrayPeliculas[id - 1].nombre}</h1>
    `)
}



$(".btn-reservar").click(function () {
    let id = ($(this).attr("id")).replace("btn-", "");
     window.location.href = "pagina-reserva.html?id=" + ($(this).attr("id")).replace("btn-", "");
     generarPaginaReserva(id)

})

