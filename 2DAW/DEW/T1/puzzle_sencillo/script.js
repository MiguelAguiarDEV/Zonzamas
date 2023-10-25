// Función para desordenar un array utilizando el algoritmo de Fisher-Yates
function desordenarArray(array) {
    let arrayDesordenada = [].concat(array);
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arrayDesordenada[i], arrayDesordenada[j]] = [arrayDesordenada[j], arrayDesordenada[i]];
    }
    return arrayDesordenada;
}

// Contenedores HTML
const contenedorPuzzle = document.getElementById('contenedor-puzzle');
const contenedorBotones = document.getElementById('contenedor-botones');
const contenedorClicks = document.getElementById('clicks');
const contenedorCronometro = document.getElementById('cronometro');
const contenedorLeaderboard = document.getElementById('contenedor-leaderboard');
const contenidoLeaderboard = document.getElementById('contenido-leaderboard');
const botonNuevaPartida = document.getElementById('boton-nueva-partida');
const botonIniciarPartida = document.getElementById('boton-iniciar');
const botonPararPartidas = document.getElementById('boton-parar');
const formularioModo = document.getElementById('formulario');
const botonFacil = document.getElementById('boton-modo-facil');
const botonDificil = document.getElementById('boton-modo-dificil');
const nombreInput = document.getElementById('nombre');
const mensaje = document.getElementById('mensaje');
var leaderboard = []; // Almacena los datos del leaderboard

// Función para agregar un registro al leaderboard
function anadirLeaderboard() {
    const nombre = nombreInput.value;
    const tiempo = cronometro.tiempo;
    const clicks = puzzle.clicks;
    const registro = { nombre, tiempo, clicks };
    leaderboard.push(registro);

    // Limpia los campos después de agregar al leaderboard
    nombreInput.value = "";
    puzzle.clicks = 0;
    puzzle.mostrarPuzzle();
    cronometro.reiniciarCronometro();
}

// Función para mostrar el leaderboard ordenado por tiempo
function mostrarLeaderboard() {
    // Ordenar el leaderboard por tiempo en orden ascendente
    const leaderboardOrdenado = leaderboard.slice().sort((a, b) => a.tiempo - b.tiempo);

    // Limpia el contenido actual del contenedor del leaderboard
    borrarContenido(contenidoLeaderboard);

    // Agrega filas a la tabla con los datos del leaderboard
    leaderboardOrdenado.forEach((jugador) => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
        <td>${jugador.nombre}</td>
        <td>${jugador.tiempo} s</td>
        <td>${jugador.clicks}</td>
      `;
        contenidoLeaderboard.appendChild(fila);
    });
}

// Función para borrar el contenido de un contenedor HTML
function borrarContenido(contenedor) {
    while (contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);
    }
}

// Registra los elementos HTML en la consola para depuración
console.log('Este es el contenedor del puzzle: ', contenedorPuzzle);
console.log('Este es el contenedor de los botones: ', contenedorBotones);

// Crea un array de imágenes a partir de elementos HTML
const arrayCompletada = Array.from(document.querySelectorAll('img'));

// Objeto para gestionar el cronómetro
const cronometro = {
    tiempo: 0,
    iniciado: false,
    intervalID: null,

    // Inicia el cronómetro
    iniciarCronometro() {
        if (!this.iniciado) {
            this.intervalID = setInterval(() => {
                this.tiempo++;
                this.actualizarCronometro();
            }, 1000); // Actualiza el cronómetro cada segundo (1000 ms)
            this.iniciado = true;
        }
    },

    // Detiene el cronómetro
    pararCronometro() {
        if (this.iniciado) {
            clearInterval(this.intervalID);
            this.iniciado = false;
        }
    },

    // Reinicia el cronómetro
    reiniciarCronometro() {
        this.tiempo = 0;
        this.actualizarCronometro();
    },

    // Actualiza la visualización del cronómetro en la interfaz
    actualizarCronometro() {
        const minutos = Math.floor(this.tiempo / 60); // Obtener minutos
        const segundos = this.tiempo % 60; // Obtener segundos

        const minutosStr = minutos.toString().padStart(2, '0'); // Formatear minutos a dos dígitos
        const segundosStr = segundos.toString().padStart(2, '0'); // Formatear segundos a dos dígitos

        contenedorCronometro.textContent = `${minutosStr}:${segundosStr}`;
        guardarDatosPartida();
    }
};

// Objeto para gestionar el rompecabezas
const puzzle = {
    piezas: [].concat(arrayCompletada),
    piezasAux: [],
    modo: "",
    clicks: 0,

    // Muestra el puzzle en la interfaz
    mostrarPuzzle() {
        borrarContenido(contenedorPuzzle);
        contenedorClicks.innerHTML = puzzle.clicks;
        puzzle.piezasAux.forEach(pieza => {
            contenedorPuzzle.appendChild(pieza);
        });
        console.log("Se actualizó el puzzle");
    },

    // Inicia una nueva partida
    iniciarPartida() {
        console.log('Se inició la partida');
        puzzle.anadirEventos();
        cronometro.iniciarCronometro(); // Iniciar el cronómetro
        puzzle.mostrarPuzzle();
    },

    // Detiene la partida
    pararPartida() {
        console.log('Se paró la partida');
        puzzle.quitarEventos();
        cronometro.pararCronometro(); // Parar el cronómetro
        console.log('Se quitaron los eventos');
        mostrarLeaderboard();
    },

    // Inicia una nueva partida y restablece el rompecabezas
    nuevaPartida() {
        puzzle.clicks = 0;
        contenedorClicks.innerHTML = puzzle.clicks;
        puzzle.piezasAux = [].concat(arrayCompletada);
        cronometro.pararCronometro();
        switch (puzzle.modo) {
            case "":
                mensaje.innerHTML = "Seleccione un modo";
                mensaje.classList = "visible";
                console.log("Seleccione un modo");
                return;
            case "facil":
                [puzzle.piezasAux[8], puzzle.piezasAux[2]] = [puzzle.piezasAux[2], puzzle.piezasAux[8]];
                [puzzle.piezasAux[5], puzzle.piezasAux[8]] = [puzzle.piezasAux[8], puzzle.piezasAux[5]];
                console.log(puzzle.piezasAux);
                break;
            case "dificil":
                puzzle.piezasAux = desordenarArray(arrayCompletada);
                puzzle.piezasAux = desordenarArray(arrayCompletada);
                break;
        }
        mensaje.classList = "oculto";
        cronometro.reiniciarCronometro();
        puzzle.anadirEventos();
        puzzle.mostrarPuzzle();
        cronometro.reiniciarCronometro(); // Reiniciar el cronómetro
        cronometro.iniciarCronómetro(); // Iniciar el cronómetro
        console.log('Nueva partida iniciada');
        puzzle.modo = "";
    },

    // Comprueba si el jugador ha ganado el juego
    comprobarSiGana() {
        for (let i = 0; i < puzzle.piezasAux.length; i++) {
            if (puzzle.piezasAux[i].id !== arrayCompletada[i].id) {
                return false;
            }
        }
        console.log("Ganaste la partida");
        mensaje.innerHTML = "Ganaste";
        mensaje.classList = "visible";
        anadirLeaderboard();
        mostrarLeaderboard();
        puzzle.pararPartida();
        localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
        contenedorClicks.innerHTML = "00:00";
        contenedorCronometro.innerHTML = "0";
        localStorage.removeItem("partida");
        puzzle.modo = "";
        botonFacil.classList.remove("seleccionado");
        botonDificil.classList.remove("seleccionado");
        return true;
    },

    // Añade eventos de clic a las piezas del rompecabezas
    anadirEventos() {
        puzzle.piezasAux.forEach(pieza => {
            pieza.onclick = () => {
                const posicionPieza = puzzle.piezasAux.indexOf(pieza);
                const posicionHueco = puzzle.piezasAux.findIndex((elemento) => {
                    return elemento.classList.contains("hueco");
                });
                const piezaSiguiente = puzzle.piezasAux[posicionPieza + 1];
                const piezaAnterior = puzzle.piezasAux[posicionPieza - 1];
                const piezaArriba = puzzle.piezasAux[posicionPieza - 3];
                const piezaAbajo = puzzle.piezasAux[posicionPieza + 3];
                const posicionAnterior = puzzle.piezasAux.indexOf(piezaAnterior);
                const posicionSiguiente = puzzle.piezasAux.indexOf(piezaSiguiente);
                const posicionArriba = puzzle.piezasAux.indexOf(piezaArriba);
                const posicionAbajo = puzzle.piezasAux.indexOf(piezaAbajo);

                if (posicionAnterior == posicionHueco || posicionSiguiente == posicionHueco || posicionArriba == posicionHueco || posicionAbajo == posicionHueco) {
                    [puzzle.piezasAux[posicionPieza], puzzle.piezasAux[posicionHueco]] = [puzzle.piezasAux[posicionHueco], puzzle.piezasAux[posicionPieza]];
                    console.log("Se ha intercambiado", puzzle.piezasAux[posicionPieza]);
                    puzzle.clicks++;
                    puzzle.mostrarPuzzle();
                }
                puzzle.comprobarSiGana();
            };
            console.log("Se asignó un evento");
        });
    },

    // Quita los eventos de clic de las piezas del rompecabezas
    quitarEventos() {
        puzzle.piezasAux.forEach(pieza => {
            pieza.onclick = null;
        });
    }
};

// Función para guardar los datos de la partida en el almacenamiento local
function guardarDatosPartida() {
    console.log("Se guardó");
    const datosPartida = {
        modo: puzzle.modo,
        tiempo: cronometro.tiempo,
        clicks: puzzle.clicks,
        nombre: nombreInput.value,
        piezas: puzzle.piezasAux.map(pieza => pieza.outerHTML)
    };
    // Convierte los datos a una cadena JSON y guárdalos en el localStorage
    localStorage.setItem("partida", JSON.stringify(datosPartida));
}

// Función para recuperar los datos de la partida desde el almacenamiento local
function recuperarDatosPartida() {
    const datosPartida = JSON.parse(localStorage.getItem("partida"));

    if (datosPartida) {
        puzzle.modo = datosPartida.modo;
        cronometro.tiempo = datosPartida.tiempo;
        puzzle.clicks = datosPartida.clicks;
        nombreInput.value = datosPartida.nombre;
        borrarContenido(contenedorPuzzle);

        datosPartida.piezas.forEach(piezaHTML => {
            const div = document.createElement('div');
            div.innerHTML = piezaHTML;
            const pieza = div.firstChild;
            puzzle.piezasAux.push(pieza);
        });

        puzzle.mostrarPuzzle();
        puzzle.anadirEventos();
        puzzle.iniciarPartida();
    }
}

// Si hay datos de leaderboard en el almacenamiento local, cárgalos
if (localStorage.getItem("leaderboard")) {
    leaderboard = JSON.parse(localStorage.getItem("leaderboard"));
    mostrarLeaderboard();
}

// Agregar event listeners a los botones
botonIniciarPartida.addEventListener('click', puzzle.iniciarPartida);
botonPararPartidas.addEventListener('click', puzzle.pararPartida);
botonNuevaPartida.addEventListener('click', puzzle.nuevaPartida);

// Event listeners para los botones de modo
botonFacil.addEventListener('click', () => {
    puzzle.modo = "facil";
    botonFacil.classList.add("seleccionado");
    botonDificil.classList.remove("seleccionado");
});

botonDificil.addEventListener('click', () => {
    puzzle.modo = "dificil";
    botonDificil.classList.add("seleccionado");
    botonFacil.classList.remove("seleccionado");
});

// Recupera los datos de la partida previa, si los hay
recuperarDatosPartida();
