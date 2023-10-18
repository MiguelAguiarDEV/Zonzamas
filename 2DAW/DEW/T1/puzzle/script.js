
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

//Funcion para poner las piezas en el tablero
function ponerPiezas (array) {
    tablero.innerHTML = "";
    for(pieza of array) {
        tablero.appendChild(pieza);
    }

    if (comprobarSiGana()) {
        
        
        setTimeout(function() {
            tablero.innerHTML = "Ganaste";
        }, 200);
    }
    
}


const imagenes = [
    "./img/row-1-column-1.png",
    "./img/row-1-column-2.png",
    "./img/row-1-column-3.png",
    "./img/row-2-column-1.png",
    "./img/row-2-column-2.png",
    "./img/row-2-column-3.png",
    "./img/row-3-column-1.png",
    "./img/row-3-column-2.png",
    "./img/row-3-column-3.png"
  ];
  
  const tablero = document.getElementById("tablero");
  const arrayPiezas = [];


for (let i = 0; i < imagenes.length; i++) {
    const pieza = document.createElement("div");
    if (i == imagenes.length - 1) {
        pieza.classList.add("pieza","hueco", );
    } else {
        pieza.classList.add("pieza","pieza"+i.toString());
    }
    const imgElement = document.createElement("img");
    imgElement.src = imagenes[i];
    imgElement.alt = "";
  
    pieza.appendChild(imgElement);

    arrayPiezas[i] = pieza;
}
console.log("Este es el array de piezas ordenadas",arrayPiezas);
  


// Comprobamdo que la funcion desordenarArray funciona.
// const array1 = [1,2,3,4,5]
// console.log("Este es el array de pruebas ordenado",array1.sort())
// console.log("Este es el array de pruebas desordenado",desordenarArray(array1))

//Array con las piezas desordenadas / Nivel Dificil
//const arrayPiezasDesordenadas = desordenarArray(arrayPiezas);
//console.log("Array desordenado dificl: ", arrayPiezasDesordenadasDificil);

const arrayPiezasDesordenadas = [].concat(arrayPiezas);
[arrayPiezasDesordenadas[8], arrayPiezasDesordenadas[5]] = [arrayPiezasDesordenadas[5], arrayPiezasDesordenadas[8]];


var arrayJuego = [].concat(arrayPiezasDesordenadas);

//Añado el evento onclick a las piezas
function asignarEvento(){
    arrayJuego.forEach(pieza => {
        pieza.onclick = () => {
            //Funcion para intercambiar el hueco por la pieza clicda si es que la pieza clicada se puede mover al lugar del hueco
            const posicionPieza = arrayJuego.indexOf(pieza);
            const posicionHueco = arrayJuego.findIndex((elemento) => {
                return elemento.classList.contains("hueco");
            }); 
            const piezaSiguiente = arrayJuego[posicionPieza+1];
            const piezaAnterior = arrayJuego[posicionPieza-1];
            const piezaArriba = arrayJuego[posicionPieza-3];
            const piezaAbajo = arrayJuego[posicionPieza+3];
            const posicionAnterior = arrayJuego.indexOf(piezaAnterior);
            const posicionSiguiente = arrayJuego.indexOf(piezaSiguiente);
            const posicionArriba = arrayJuego.indexOf(piezaArriba);
            const posicionAbajo = arrayJuego.indexOf(piezaAbajo);


            if (posicionAnterior == posicionHueco || posicionSiguiente == posicionHueco || posicionArriba == posicionHueco || posicionAbajo == posicionHueco) {
                [arrayJuego[posicionPieza], arrayJuego[posicionHueco]] = [arrayJuego[posicionHueco], arrayJuego[posicionPieza]];
                console.log("Se ha intercambiado",arrayJuego[posicionPieza]);
            }
            ponerPiezas(arrayJuego);
            
        };
        console.log("Se asigno un evento")
        
    });
};




function iniciarJuego() {
    arrayJuego = [].concat(arrayPiezasDesordenadas);
    asignarEvento();
    ponerPiezas(arrayPiezasDesordenadas);
};


function comprobarSiGana() {
    if (arrayJuego.length !== arrayPiezas.length) {
        return false;
    }
    for (let i = 0; i < arrayJuego.length; i++) {
        if (arrayJuego[i] !== arrayPiezas[i]) {

            return false;
        }
    }
    console.log("Ganaste");
    return true;
}
  


ponerPiezas(arrayPiezas)




//TODO : HACER EL TIMER
//TODO : GUARDAR EL MEJOR TIEMPO EN EL LOCAL STORAGE
//TODO : GURDAR PARTIDA EN EL LOCAL STORAGE
//TODO : AÑADIR CLICKS
