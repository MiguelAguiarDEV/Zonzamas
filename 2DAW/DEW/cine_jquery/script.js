
// Función para guardar un array en el localStorage
function guardarArrayEnLocalStorage(clave, array) {
    try {
        // Convierte el array a cadena JSON antes de almacenarlo
        var arrayJSON = JSON.stringify(array);
        localStorage.setItem(clave, arrayJSON);
        console.log(`Array guardado en localStorage con clave: ${clave}`);
    } catch (error) {
        console.error('Error al guardar array en localStorage:', error);
    }
}

// Función para recuperar un array desde el localStorage
function recuperarArrayDesdeLocalStorage(clave) {
    try {
        // Obtiene la cadena JSON del localStorage y la convierte a un array
        var arrayJSON = localStorage.getItem(clave);
        var arrayRecuperado = JSON.parse(arrayJSON);
        console.log(`Array recuperado desde localStorage con clave: ${localStorage.getItem(clave)}`);
        return arrayRecuperado;
    } catch (error) {
        console.error('Error al recuperar array desde localStorage:', error);
		console.log(localStorage.getItem(clave));
        return null;
    }
}

var arrayPeliculas = {};

if(recuperarArrayDesdeLocalStorage("peliculas")){
  arrayPeliculas = recuperarArrayDesdeLocalStorage("peliculas");
} else {
  arrayPeliculas = {
	  //Si las peliculas estan en local storage las recupera y las guarda en la variable arrayPeliculas.
		1: {
			id: 1,
			nombre: "Avatar el sentido del agua",
			director: "James Cameron",
			duracion: 120,
			genero: "Ciencia Ficcion",
			urlPortada: "img/avatar.jpeg",
			precio: 10,
			butacas: generarArrayAleatorio(20),
		},
		2: {
			id: 2,
			nombre: "El viaje de Chihiro",
			director: "Hayao Miyazaki",
			duracion: 125,
			genero: "Animacion",
			urlPortada: "img/chijiro.webp",
			precio: 5,
			butacas: generarArrayAleatorio(17),
		},
		3: {
			id: 3,
			nombre: "Interstellar",
			director: "Christopher Nolan",
			duracion: 150,
			genero: "Ciencia Ficcion",
			urlPortada: "img/Interstellar.jpg",
			precio: 7,
			butacas: generarArrayAleatorio(42),
		},
		4: {
			id: 4,
			nombre: "El Hobbit",
			director: "Peter Jackson",
			duracion: 180,
			genero: "Fantasia",
			urlPortada: "img/hobbit.jpg",
			precio: 2,
			butacas: generarArrayAleatorio(38),
		}
	}
}


//Funcion para generar Arrays con n elementos con valores 0 o 1.
function generarArrayAleatorio(n) {
  if (typeof n !== "number" || n <= 0) {
    console.error("El argumento debe ser un número positivo.");
    return [];
  }

  var arrayAleatorio = [];

  for (var i = 0; i < n; i++) {
    // Generar valores aleatorios entre 0 y 1, y redondearlos a 0 o 1
    var valorAleatorio = Math.round(Math.random());
    arrayAleatorio.push(valorAleatorio);
  }
  return arrayAleatorio;
}

const btnVolverInicio = $("<button/>", {
  text: "Inicio",
  id: "btn-volver-inicio",
  class: "btn btn-danger d-flex",
  click: function () {
    window.location.href = "index.html";
  },
});

function generarPortadas(arrayPeliculas) {
  for (pelicula in arrayPeliculas) {
    //Genera el html de las portadas.
    $("#cartelera").append(`
        <section id="portada-${arrayPeliculas[pelicula].nombre.replace(
          " ",
          "-"
        )}" class="rounded-9 portada shadow hover-zoom overflow-hidden d-flex justify-content-center">
			<div class="card" style="width: 18rem;">
				<img src="${
          arrayPeliculas[pelicula].urlPortada
        }" class="card-img-top" alt="...">
				<div class="card-body">
					<h5 class="card-title">
						${arrayPeliculas[pelicula].nombre}
					</h5>
                    <p class="card-text">
						Genero: ${arrayPeliculas[pelicula].genero}
					</p>
                    <p class="card-text">
						Duracuion: ${arrayPeliculas[pelicula].duracion} min
					</p>  
                    <button id="btn-${
                      arrayPeliculas[pelicula].id
                    }" type="button" class="btn-reservar btn btn-primary position-relative">
						Reservar
						<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
							${arrayPeliculas[pelicula].precio}€
						</span>
                    </button>
                </div>
            </div>
		</section>
        `);
  }
  //Funcionalidad boton reserva.
  $(".btn-reservar").click(function () {
    let id = $(this).attr("id").replace("btn-", "");
    generarPaginaReserva(id);
  });
}
generarPortadas(arrayPeliculas);

let precioTotal = 0;
function generarPaginaReserva(id) {
  guardarArrayEnLocalStorage("peliculas", arrayPeliculas);

  $("#cine").html(`
		<div class="portada-reserva d-flex rounded-9 shadow m-3 overflow-hidden">
			<img src="${arrayPeliculas[id].urlPortada}" class="d-flex img-reserva rounded-start" alt="..." >
			<div class="card-body p-0 ms-3">
				<h5 class="card-title">${arrayPeliculas[id].nombre}</h5>
				<p class="card-text">Genero: ${arrayPeliculas[id].genero}</p>
				<p class="card-text"><small class="text-body-secondary">Duracion: ${arrayPeliculas[id].duracion} min</small></p>
				<p class="card-text">Precio: ${arrayPeliculas[id].precio}€</p>
			</div>
			</div>
		</div>
		</div>
		<div class="d-flex rounded-9 shadow m-3 overflow-hidden justify-content-center">
			<div id="butacas" class="rounded-3 shadow m-3 p-3 d-flex flex-wrap justify-content-center align-items-center"></div>
			<button id="reservar" type="button" class="btn-reservar m-5 btn btn-primary position-relative" style="width: 200px; height: 50px">
						Reservar
						<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger fs-4">
							Total: <span id="total">
								${precioTotal}€
							</span>
						</span>
			</button>
		</div
	`);
  $("#cine").prepend(btnVolverInicio);
  generarButacas(id);
  document.getElementById("reservar").addEventListener("click", function () {
    if (precioTotal == 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No has seleccionado ninguna butaca!",
        footer: "<a href='index.html'>Volver a inicio</a>",
        allowOutsideClick: false,
      });
    } else {
      Swal.fire({
        title:
          "Estas seguro que quieres resrvar los asientos?\nPrecio total: " +
          precioTotal +
          "€",
        text: "No podras deshacer esta accion!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Reservar!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Reservado!",
            text: "Reservaste tus butacas!",
            icon: "success",
          });
          for (let i = 0; i < arrayPeliculas[id].butacas.length; i++) {
            if (arrayPeliculas[id].butacas[i] == 3) {
              arrayPeliculas[id].butacas[i] = 0;
            }
          }
        } else {
          for (let i = 0; i < arrayPeliculas[id].butacas.length; i++) {
            if (arrayPeliculas[id].butacas[i] == 3) {
              arrayPeliculas[id].butacas[i] = 1;
            }
          }
        }
        generarPaginaReserva(id);
      });
    }
  });
}

function reservarButacas(id) {
  numButacas = arrayPeliculas[id].butacas.length;
}

function generarButacas(id) {
  numButacas = arrayPeliculas[id].butacas.length;
  let butacasHTML = $("#butacas").empty();

  for (let fila = 0; fila < numButacas; fila++) {
    let butacaHTML = $(
      `<div class="butaca rounded-3 shadow m-1">${fila}</div>`
    );

    if (arrayPeliculas[id].butacas[fila] == 0) {
      butacaHTML.addClass("bg-danger");
    } else if (arrayPeliculas[id].butacas[fila] == 3) {
      butacaHTML.addClass("bg-warning");
    }

    butacaHTML.click(function () {
      if (arrayPeliculas[id].butacas[fila] == 1) {
        precioTotal += arrayPeliculas[id].precio;
        arrayPeliculas[id].butacas[fila] = 3;
        console.log(arrayPeliculas[id].butacas[fila]);
      } else if (arrayPeliculas[id].butacas[fila] == 3) {
        arrayPeliculas[id].butacas[fila] = 1;
        precioTotal -= arrayPeliculas[id].precio;
      }
      generarButacas(id);
    });
    butacasHTML.append(butacaHTML);
  }
  return butacasHTML;
}
