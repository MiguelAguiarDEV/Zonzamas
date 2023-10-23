
//Funcion para desordenar cualquier array
function desordenarArray(array) {
    let arrayDesordenada = [].concat(array);
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        //Intercambiar los valores en las posiciones 'i' y 'j' del array 'array'
        [arrayDesordenada[i], arrayDesordenada[j]] = [arrayDesordenada[j], arrayDesordenada[i]];
    }
    return arrayDesordenada;
}


const tablero = document.getElementById("tablero");

const contenedorBotones = document.getElementById("contenedor-botones");
const botonIniciarPartida = document.getElementById("boton-iniciar-partida");
const botonIniciarcargarPartida = document.getElementById("boton-cargar-partida");
const botonPararPartida = document.getElementById("boton-parar-partida");
const formularioModos = document.getElementById("formulario-modos");
const puzzleResuelto = document.querySelectorAll(".pieza");





console.log(puzzleResuelto);
class puzzle {
    constructor(array,modo) {
        this.
        this.puzzle = [].concat(this.puzzleResuelto);
        this.modo = modo;
        this.mejoresPartidas = {
        }




    }   
    
    iniciarPuzzle () {
        
    }

}






// //Funcion para poner las piezas en el tablero
// function ponerPiezas (array) {
//     tablero.innerHTML = "";
//     const contenedorClicks = document.getElementById("clicks");

//     for(pieza of array) {
//         contenedorClicks.innerHTML = clicks;
//         tablero.appendChild(pieza);
//     }

//     if (comprobarSiGana()) {
//         setTimeout(function() {
//             tablero.innerHTML = "Ganaste";
//         }, 200);
//     }
    
// }


// const imagenes = [
//         "./img/row-1-column-1.png",
//         "./img/row-1-column-2.png",
//         "./img/row-1-column-3.png",
//         "./img/row-2-column-1.png",
//         "./img/row-2-coluñ,dmn-2.png",
//         "./img/row-2-column-3.png",
//         "./img/row-3-column-1.png",
//         "./img/row-3-column-2.png",
//         "./img/row-3-column-3.png"
//         ];
  
// const tablero = document.getElementById("tablero");
// const cronometro = document.getElementById("cronometro");


// let cronometroInterval; // Variable para almacenar el ID del intervalo del cronómetro
// let segundos = 0;
// let minutos = 0;
// let clicks = 0;

// for (let i = 0; i < imagenes.length; i++) {
//     const pieza = document.createElement("div");
//     if (i == imagenes.length - 1) {
//         pieza.classList.add("pieza","hueco", );
//     } else {
//         pieza.classList.add("pieza","pieza"+i.toString());
//     }
//     const imgElement = document.createElement("img");
//     imgElement.src = imagenes[i];
//     imgElement.alt = "";
  
//     pieza.appendChild(imgElement);

//     arrayPiezas[i] = pieza;
// }
// console.log("Este es el array de piezas ordenadas",arrayPiezas);
  


// // Comprobamdo que la funcion desordenarArray funciona.
// // const array1 = [1,2,3,4,5]
// // console.log("Este es el array de pruebas ordenado",array1.sort())
// // console.log("Este es el array de pruebas desordenado",desordenarArray(array1))

// //Array con las piezas desordenadas / Nivel Dificil
// //const arrayPiezasDesordenadas = desordenarArray(arrayPiezas);
// //console.log("Array desordenado dificl: ", arrayPiezasDesordenadasDificil);

// const arrayPiezasDesordenadas = [].concat(arrayPiezas);
// [arrayPiezasDesordenadas[8], arrayPiezasDesordenadas[5]] = [arrayPiezasDesordenadas[5], arrayPiezasDesordenadas[8]];


// var arrayJuego = [].concat(arrayPiezasDesordenadas);

// //Añado el evento onclick a las piezas
// function asignarEvento(){
//     arrayJuego.forEach(pieza => {
//         pieza.onclick = () => {
//             //Funcion para intercambiar el hueco por la pieza clicda si es que la pieza clicada se puede mover al lugar del hueco
//             const posicionPieza = arrayJuego.indexOf(pieza);
//             const posicionHueco = arrayJuego.findIndex((elemento) => {
//                 return elemento.classList.contains("hueco");
//             }); 
//             const piezaSiguiente = arrayJuego[posicionPieza+1];
//             const piezaAnterior = arrayJuego[posicionPieza-1];
//             const piezaArriba = arrayJuego[posicionPieza-3];
//             const piezaAbajo = arrayJuego[posicionPieza+3];
//             const posicionAnterior = arrayJuego.indexOf(piezaAnterior);
//             const posicionSiguiente = arrayJuego.indexOf(piezaSiguiente);
//             const posicionArriba = arrayJuego.indexOf(piezaArriba);
//             const posicionAbajo = arrayJuego.indexOf(piezaAbajo);


//             if (posicionAnterior == posicionHueco || posicionSiguiente == posicionHueco || posicionArriba == posicionHueco || posicionAbajo == posicionHueco) {
//                 [arrayJuego[posicionPieza], arrayJuego[posicionHueco]] = [arrayJuego[posicionHueco], arrayJuego[posicionPieza]];
//                 console.log("Se ha intercambiado",arrayJuego[posicionPieza]);
//                 clicks++;
//             }
            
            
//             ponerPiezas(arrayJuego);
            
//         };
//         console.log("Se asigno un evento")
//     });
// };




// function iniciarPartida() {
//     cronometro.innerHTML = "00:00";
//     clicks = 0;
//     reiniciarCronometro();
//     iniciarCronometro(cronometroInterval,segundos,minutos);
//     arrayJuego = [].concat(arrayPiezasDesordenadas);
//     asignarEvento();
//     ponerPiezas(arrayPiezasDesordenadas);
// };




// function reiniciarPartida(){
//     console.log("Todavia no esta hecho")
// }

// function cargarPartida(){
//     console.log("Todavia no se puede cargar partida")
// }








// // Función para iniciar el cronómetro
// function iniciarCronometro() {
//     if (!cronometroInterval) {
//         cronometroInterval = setInterval(function () {
//         segundos++;
//         if (segundos === 60) {
//             minutos++;
//             segundos = 0;
//         }
        
//         // Actualizar la interfaz o realizar acciones con los valores de minutos y segundos
//         console.log(`Tiempo transcurrido: ${minutos} minutos y ${segundos} segundos`);

        
//         if (segundos < 10 && minutos < 10) {
//             cronometro.innerHTML = `0${minutos}:0${segundos}`;
//         } else if (segundos < 10) {
//             cronometro.innerHTML = `${minutos}:0${segundos}`;
//         } else if (minutos < 10) {
//             cronometro.innerHTML = `0${minutos}:${segundos}`;
//         }
//         }, 1000); // El cronómetro se actualiza cada 1000 milisegundos (1 segundo)
//     } else {
//         console.log('El cronómetro ya está en funcionamiento');
//     }
// };



// // Función para detener el cronómetro
// function detenerCronometro() {
//     if (cronometroInterval) {
//         clearInterval(cronometroInterval); // Detiene el cronómetro
//         cronometroInterval = null; // Borra el ID del intervalo
//         console.log('Cronómetro detenido');
//     } else {
//         console.log('El cronómetro no está en funcionamiento');
//     }
// }

// function reiniciarCronometro() {
//     detenerCronometro();
//     segundos = 0;
//     minutos = 0;
//     console.log('Cronómetro reiniciado');
// }



// function comprobarSiGana() {
//     if (arrayJuego.length !== arrayPiezas.length) {
//         return false;
//     }
//     for (let i = 0; i < arrayJuego.length; i++) {
//         if (arrayJuego[i] !== arrayPiezas[i]) {

//             return false;
//         }
//     }
//     console.log("Ganaste");
//     detenerCronometro();
//     return true;
// }
  


// ponerPiezas(arrayPiezas)




// //TODO : HACER EL TIMER
// //TODO : GUARDAR EL MEJOR TIEMPO EN EL LOCAL STORAGE
// //TODO : GURDAR PARTIDA EN EL LOCAL STORAGE
// //TODO : AÑADIR CLICKS
// //TODO : AÑADIR PARAR JUEGO, bloquea las fichas y no puedes moverlas hasta que vuelvas a darle al play.