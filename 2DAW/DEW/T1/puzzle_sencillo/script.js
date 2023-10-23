
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



function borrarContenido (contenedor) {
    while (contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);
    }
}

console.log('Este es el contenedor del puzzle: ', contenedorPuzzle);
console.log('Este es el contenedor de los botones: ', contenedorBotones);

// Botones
const botonIniciarPartida = {
    boton: document.createElement('button'),
    texto: 'Iniciar Partida',
    funcion: function () {
        puzzle.mostrarPuzzle();
    }
    , // No uses paréntesis para asignar la función
    crear: function () { // Usa la palabra clave 'function' para definir métodos dentro del objeto
        this.boton.innerText = this.texto; // Usa 'this' para acceder a las propiedades del objeto
        this.boton.classList.add('boton', 'boton-iniciar');
        this.boton.addEventListener('click', this.funcion);
        return this.boton;
    }
};

const botonPararPartidas = {
    boton: document.createElement('button'),
    texto: 'Parar Partida',
    funcion: function () {
        console.log("Parar Partida");
    },

    crear: function () {
        this.boton.innerText = this.texto;
        this.boton.classList.add('boton', 'boton-parar');
        this.boton.addEventListener('click', this.funcion);
        return this.boton;
    }
}

const formularioModo = {
    form: document.createElement('form'),
    radios : document.getElementsByName('modo'),
    crear: function() {
        // Crear input para el modo "Fácil"
        const inputFacil = document.createElement('input');
        inputFacil.type = 'radio';
        inputFacil.name = 'modo';
        inputFacil.value = 'facil';
        inputFacil.id = 'modoFacil';
        
        const labelFacil = document.createElement('label');
        labelFacil.innerHTML = 'Fácil';
        labelFacil.setAttribute('for', 'modoFacil');
        
        
        // Crear input para el modo "Difícil"
        const inputDificil = document.createElement('input');
        inputDificil.type = 'radio';
        inputDificil.name = 'modo';
        inputDificil.value = 'dificil';
        inputDificil.id = 'modoDificil';
        
        const labelDificil = document.createElement('label');
        labelDificil.innerHTML = 'Difícil';
        labelDificil.setAttribute('for', 'modoDificil');
        
        // Agregar inputs y etiquetas al formulario
        this.form.appendChild(inputFacil);
        this.form.appendChild(labelFacil);
        this.form.appendChild(inputDificil);
        this.form.appendChild(labelDificil);
        return this.form;
    }
};

const arrayCompletada = Array.from(document.querySelectorAll('img'));



//Funcion para poner las piezas en el tablero

const puzzle = {
    piezasAux : [].concat(arrayCompletada),
    detectarModo() {
        formularioModo.radios.forEach(radio => {
            if(radio.checked) {
                switch(radio.value) {
                    case 'facil': 
                        [this.piezasAux[8],this.piezasAux[2]] = [this.piezasAux[2],this.piezasAux[8]];
                        [this.piezasAux[5],this.piezasAux[8]] = [this.piezasAux[8],this.piezasAux[5]];
                        break;
                    case 'dificil':
                        this.piezasAux = desordenarArray(arrayCompletada);
                        console.log(this.piezasAux);
                }   
            }
        });
    },

    mostrarPuzzle () {
        this.piezasAux = [].concat(arrayCompletada);
        this.detectarModo();
        borrarContenido(contenedorPuzzle);
        this.piezasAux.forEach(pieza => {
            contenedorPuzzle.appendChild(pieza);
            console.log("Se inicio el puzzle")
        })
    },


    añadirBotonesPartidaIniciada () {
        borrarContenido(contenedorBotones);
        contenedorBotones.appendChild(botonPararPartidas.crear());
    },
    comprobarSiGana() {
        for (let i = 0; i < this.piezasAux.length; i++) {
            if (this.piezasAux[i] !== arrayCompletada[i]) {
                return false;
            }
        }
        return true;
    },





}



contenedorBotones.appendChild(botonIniciarPartida.crear());
contenedorBotones.appendChild(formularioModo.crear());

console.log(puzzle.comprobarSiGana())