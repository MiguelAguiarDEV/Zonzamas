
function desordenarArray(array) {
    let arrayDesordenada = [].concat(array);
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        //Intercambiar los valores en las posiciones 'i' y 'j' del array 'array'
        [arrayDesordenada[i], arrayDesordenada[j]] = [arrayDesordenada[j], arrayDesordenada[i]];
    }
    return arrayDesordenada;
}

//Contenedores
const contenedorPuzzle = document.getElementById('contenedor-puzzle');
const contenedorBotones = document.getElementById('contenedor-botones');
const contenedorClicks = document.getElementById('clicks');
const botonNuevaPartida = document.getElementById('boton-nueva-partida');
const botonIniciarPartida = document.getElementById('boton-iniciar');
const botonPararPartidas = document.getElementById('boton-parar');
const formularioModo = document.getElementById('formulario');
const radioFacil = document.getElementById('modo-facil');
const radioDificil = document.getElementById('modo-dificil');
const laderboard = [];

function borrarContenido(contenedor) {
    while (contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);
    }
}

console.log('Este es el contenedor del puzzle: ', contenedorPuzzle);
console.log('Este es el contenedor de los botones: ', contenedorBotones);

const arrayCompletada = Array.from(document.querySelectorAll('img'));



const puzzle = {
    piezas : [].concat(arrayCompletada),
    piezasAux : [],
    modo : "",
    clicks : 0,
    mostrarPuzzle () {
        
        borrarContenido(contenedorPuzzle);
        contenedorClicks.innerHTML = puzzle.clicks;
        puzzle.piezasAux.forEach(pieza => {
            contenedorPuzzle.appendChild(pieza);
        })
        console.log("Se inicio el puzzle")
    },
    nuevaPartida () {
        
        console.log('Nueva partida')
        console.log(puzzle.modo);
        puzzle.clicks = 0;
        puzzle.piezasAux = [].concat(arrayCompletada);
        switch (puzzle.modo) {
            case "":
                console.log("Seleccione un modo");
                return
            case "facil":
                [puzzle.piezasAux[8],puzzle.piezasAux[2]] = [puzzle.piezasAux[2],puzzle.piezasAux[8]];
                [puzzle.piezasAux[5],puzzle.piezasAux[8]] = [puzzle.piezasAux[8],puzzle.piezasAux[5]];
                console.log(puzzle.piezasAux);
                puzzle.anadirEventos();
                puzzle.mostrarPuzzle();
                break;
            case "dificil":
                puzzle.piezasAux = desordenarArray(arrayCompletada);
                puzzle.piezasAux = desordenarArray(arrayCompletada);
                puzzle.mostrarPuzzle();
                puzzle.anadirEventos();
            break;
        }
    },
    iniciarPartida () {
        console.log(puzzle.modo);

        if (puzzle.piezasAux.length === 0) {
            puzzle.piezasAux = [].concat(arrayCompletada);
            switch (puzzle.modo) {
                case "":
                    console.log("Seleccione un modo");
                    return
                case "facil":
                    [puzzle.piezasAux[8],puzzle.piezasAux[2]] = [puzzle.piezasAux[2],puzzle.piezasAux[8]];
                    [puzzle.piezasAux[5],puzzle.piezasAux[8]] = [puzzle.piezasAux[8],puzzle.piezasAux[5]];
                    console.log(puzzle.piezasAux);
                    puzzle.anadirEventos();
                    puzzle.mostrarPuzzle();
                    break;
                case "dificil":
                    puzzle.piezasAux = desordenarArray(arrayCompletada);
                    puzzle.piezasAux = desordenarArray(arrayCompletada);
                    puzzle.mostrarPuzzle();
                    puzzle.anadirEventos();
                    break;
            }
        }
        puzzle.anadirEventos();
        puzzle.mostrarPuzzle();
    },

    pararPartida () {
        console.log('Se paro la partida');
        puzzle.quitarEventos()
    },

    comprobarSiGana() {
        for (let i = 0; i < puzzle.piezasAux.length; i++) {
            if (puzzle.piezasAux[i] !== arrayCompletada[i]) {
                return false;
            }
        }
        return true;
    },


    anadirEventos() {
        puzzle.piezasAux.forEach(pieza => {
            pieza.onclick = () => {
                const posicionPieza = puzzle.piezasAux.indexOf(pieza);
                const posicionHueco = puzzle.piezasAux.findIndex((elemento) => {
                    return elemento.classList.contains("hueco");
                }); 
                const piezaSiguiente = puzzle.piezasAux[posicionPieza+1];
                console.log(piezaSiguiente)
                const piezaAnterior = puzzle.piezasAux[posicionPieza-1];
                const piezaArriba = puzzle.piezasAux[posicionPieza-3];
                const piezaAbajo = puzzle.piezasAux[posicionPieza+3];
                const posicionAnterior = puzzle.piezasAux.indexOf(piezaAnterior);
                const posicionSiguiente = puzzle.piezasAux.indexOf(piezaSiguiente);
                const posicionArriba = puzzle.piezasAux.indexOf(piezaArriba);
                const posicionAbajo = puzzle.piezasAux.indexOf(piezaAbajo);
                    
                if (posicionAnterior == posicionHueco || posicionSiguiente == posicionHueco || posicionArriba == posicionHueco || posicionAbajo == posicionHueco) {
                    [puzzle.piezasAux[posicionPieza], puzzle.piezasAux[posicionHueco]] = [puzzle.piezasAux[posicionHueco], puzzle.piezasAux[posicionPieza]];
                    console.log("Se ha intercambiado",puzzle.piezasAux[posicionPieza]);
                    puzzle.clicks++;
                    
                    puzzle.mostrarPuzzle();
                }
                
            };
            console.log("Se asigno un evento")
        });
    },

    quitarEventos() {
        puzzle.piezasAux.forEach(pieza => {
            pieza.onclick = null
        })
    }
};

botonIniciarPartida.addEventListener('click', puzzle.iniciarPartida);
botonPararPartidas.addEventListener('click', puzzle.pararPartida);
botonNuevaPartida.addEventListener('click', puzzle.nuevaPartida);
radioFacil.addEventListener('click', () => {
    puzzle.modo = "facil";
})

radioDificil.addEventListener('click', () => {
    puzzle.modo = "dificil";
})



