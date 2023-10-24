
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
const contenedorCronometro = document.getElementById('cronometro');
const contenedorLeaderboard = document.getElementById('contenedor-leaderboard');
const botonNuevaPartida = document.getElementById('boton-nueva-partida');
const botonIniciarPartida = document.getElementById('boton-iniciar');
const botonPararPartidas = document.getElementById('boton-parar');
const formularioModo = document.getElementById('formulario');
const radioFacil = document.getElementById('modo-facil');
const radioDificil = document.getElementById('modo-dificil');
const nombreInput = document.getElementById('nombre');
const leaderboard = [];

function anadirLeaderboard() {
    const nombre = nombreInput.value;
    const clicks = puzzle.clicks;
    const tiempo = cronometro.tiempo;
    
    const registro = {
    nombre: nombre,
    clicks: clicks,
    tiempo: tiempo
    };
    
    leaderboard.push(registro);
    
    // Limpia los campos después de agregar al leaderboard
    nombreInput.value = "";
    puzzle.clicks = 0;
    puzzle.mostrarPuzzle();
    cronometro.reiniciarCronometro();
}
  



function borrarContenido(contenedor) {
    while (contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);
    }
}

console.log('Este es el contenedor del puzzle: ', contenedorPuzzle);
console.log('Este es el contenedor de los botones: ', contenedorBotones);

const arrayCompletada = Array.from(document.querySelectorAll('img'));

const cronometro = {
    tiempo: 0,
    iniciado: false,
    intervalID: null,
  
    iniciarCronometro() {
        if (!this.iniciado) {
            this.intervalID = setInterval(() => {
                this.tiempo++;
                this.actualizarCronometro();
            }, 1000); // Actualiza el cronómetro cada segundo (1000 ms)
            this.iniciado = true;
        }
    },
  
    pararCronometro() {
        if (this.iniciado) {
            clearInterval(this.intervalID);
            this.iniciado = false;
        }
    },
  
    reiniciarCronometro() {
        this.tiempo = 0;
        this.actualizarCronometro();
    },
  
    actualizarCronometro() {
            const minutos = Math.floor(this.tiempo / 60); // Obtener minutos
            const segundos = this.tiempo % 60; // Obtener segundos
        
            const minutosStr = minutos.toString().padStart(2, '0'); // Formatear minutos a dos dígitos
            const segundosStr = segundos.toString().padStart(2, '0'); // Formatear segundos a dos dígitos
        
            contenedorCronometro.textContent = `Tiempo: ${minutosStr}:${segundosStr}`;
        }
    };
  

const puzzle = {
    piezas : [].concat(arrayCompletada),
    piezasAux : [],
    modo : "Modo no seleccionado",
    clicks : 0,
    mostrarPuzzle () {
        
        borrarContenido(contenedorPuzzle);
        contenedorClicks.innerHTML = puzzle.clicks;
        puzzle.piezasAux.forEach(pieza => {
            contenedorPuzzle.appendChild(pieza);
        })
        console.log("Se actualizo el puzzle")
    },
    iniciarPartida() {
        console.log('Se inicio la partida');
        puzzle.anadirEventos();
        cronometro.iniciarCronometro(); // Iniciar el cronómetro
        puzzle.mostrarPuzzle();
    },
      
    pararPartida() {
        console.log('Se paro la partida');
        puzzle.quitarEventos();
        cronometro.pararCronometro(); // Parar el cronómetro
        console.log('Se quito los eventos');
    },
      
    nuevaPartida() {
        console.log(puzzle.modo);
        puzzle.clicks = 0;
        puzzle.piezasAux = [].concat(arrayCompletada);
        switch (puzzle.modo) {
            case "":
                console.log("Seleccione un modo");
                return;
            case "facil":
                [puzzle.piezasAux[8], puzzle.piezasAux[2]] = [puzzle.piezasAux[2], puzzle.piezasAux[8]];
                [puzzle.piezasAux[5], puzzle.piezasAux[8]] = [puzzle.piezasAux[8], puzzle.piezasAux[5]];
                console.log(puzzle.piezasAux);
                puzzle.anadirEventos();
                puzzle.mostrarPuzzle();
                cronometro.reiniciarCronometro(); // Reiniciar el cronómetro
                cronometro.iniciarCronometro(); // Iniciar el cronómetro
                console.log('Nueva partida iniciada');
                break;
            case "dificil":
                puzzle.piezasAux = desordenarArray(arrayCompletada);
                puzzle.piezasAux = desordenarArray(arrayCompletada);
                puzzle.mostrarPuzzle();
                puzzle.anadirEventos();
                cronometro.reiniciarCronometro(); // Reiniciar el cronómetro
                cronometro.iniciarCronometro(); // Iniciar el cronómetro
                console.log('Nueva partida iniciada');
                break;
        }
    },
      
      

    comprobarSiGana() {
        for (let i = 0; i < puzzle.piezasAux.length; i++) {
            if (puzzle.piezasAux[i] !== arrayCompletada[i]) {
                return false;
            }
        }
        console.log("Gano la partida")
        anadirLeaderboard();
        puzzle.pararPartida();
        return true;
    },

    anadirEventos() {
        puzzle.piezasAux.forEach(pieza => {
            pieza.onclick = () => {

                const posicionPieza = puzzle.piezasAux.indexOf(pieza);
                const posicionHueco = puzzle.piezasAux.findIndex((elemento) => {
                    return elemento.classList.contains("hueco");
                }); 
                const piezaSiguiente = puzzle.piezasAux[posicionPieza+1];                const piezaAnterior = puzzle.piezasAux[posicionPieza-1];
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
                puzzle.comprobarSiGana();
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



