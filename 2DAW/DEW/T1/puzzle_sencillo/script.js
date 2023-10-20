const contenedorPuzzle = document.getElementById('contenedor-puzzle');
const contenedorBotones = document.getElementById('contenedor-botones');


console.log('Este es el contenedor del puzzle: ', contenedorPuzzle);
console.log('Este es el contenedor de los botones: ', contenedorBotones);

// Botones



const botonIniciarPartida = {
    boton: document.createElement('button'),
    texto: 'Iniciar Partida',
    funcion: function () {
        console.log("Iniciar Partida");
    }

    , // No uses paréntesis para asignar la función
    crear: function () { // Usa la palabra clave 'function' para definir métodos dentro del objeto
        this.boton.innerText = this.texto; // Usa 'this' para acceder a las propiedades del objeto
        this.boton.classList.add('boton', 'boton-iniciar');
        this.boton.addEventListener('click', this.funcion);
        contenedorBotones.appendChild(this.boton);
        console.log("Se agrego  el boton Iniciar")
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
        contenedorBotones.appendChild(this.boton);
        console.log("Se agrego  el boton Parar")
    }
}

const formularioModo = {
    form: document.createElement('form'),
    
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
        
        const radios = document.getElementsByName('modo');
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
        
        // Agregar el formulario al contenedor (reemplaza 'contenedor' con el ID de tu contenedor real)
        contenedorBotones.appendChild(this.form);
    }
};

// Llama a la función para crear el formulario


arrayCompletada = document.querySelectorAll('td')

class puzzle {
    constructor() {

        //Asignar el modo ( Dificl / Facil )
        arrayModo = radios.array.forEach(radio => {
            if(radio.checked) {
                switch(radio.value) {
                    case 'facil': 
                }
            }
        });

        console.log('Este es el modo: ', modo);
        
        
    }
}






function iniciarPartida() {


    console.log('Iniciar Partida');
}





botonIniciarPartida.crear();
botonPararPartidas.crear();
formularioModo.crear();
