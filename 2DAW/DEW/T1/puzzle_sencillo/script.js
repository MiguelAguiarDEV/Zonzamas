
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
const botonIniciarPartida = document.getElementById('boton-iniciar');
const botonPararPartidas = document.getElementById('boton-parar');
const formularioModo = document.getElementById('formulario');
const radioFacil = document.getElementById('modo-facil');
const radioDificil = document.getElementById('modo-dificil');


function borrarContenido(contenedor) {
    while (contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);
    }
}

console.log('Este es el contenedor del puzzle: ', contenedorPuzzle);
console.log('Este es el contenedor de los botones: ', contenedorBotones);





const arrayCompletada = Array.from(document.querySelectorAll('img'));



//Funcion para poner las piezas en el tablero

const puzzle = {
    piezasAux : [].concat(arrayCompletada),
    modo : "",



    mostrarPuzzle () {
        puzzle.piezasAux = [].concat(arrayCompletada);
        puzzle.detectarModo();
        borrarContenido(contenedorPuzzle);
        puzzle.piezasAux.forEach(pieza => {
            contenedorPuzzle.appendChild(pieza);
            console.log("Se inicio el puzzle")
        })
    },

    iniciarPartida () {
        console.log(puzzle.modo);
        if(puzzle.modo == ""){
            alert('Selecciona un modo');
            return;
        }
        console.log('Se inicia la partida');
    },

    pararPartida () {
        console.log('Se paro la partida');
    },

    comprobarSiGana() {
        for (let i = 0; i < puzzle.piezasAux.length; i++) {
            if (puzzle.piezasAux[i] !== arrayCompletada[i]) {
                return false;
            }
        }
        return true;
    },
};

botonIniciarPartida.addEventListener('click', puzzle.iniciarPartida);
botonPararPartidas.addEventListener('click', puzzle.pararPartida);
radioFacil.addEventListener('click', () => {
    puzzle.modo = "facil";
})

radioDificil.addEventListener('click', () => {
    puzzle.modo = "dificil";
})