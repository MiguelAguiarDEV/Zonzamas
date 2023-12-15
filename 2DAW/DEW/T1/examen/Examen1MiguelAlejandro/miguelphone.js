var registro = []
var registroTiempo = []
const contenedorBtns = document.getElementById("contenedor-btn")
const inputNum = document.getElementById("numero")
const tiempoTxt = document.getElementById("tiempo")
const regex = /^[6-9][0-9]{8}$/
const registroHtml = document.getElementById("registro")
var llamadaInicida = false;

//Se propagan los eventos
contenedorBtns.addEventListener('click', (event) => {
    eventoTeclas(event.target.innerHTML);
});



mostrarRegistro()


//funcion que se ejecuta cuando se pulsa cualquier tecla
function eventoTeclas(tecla){
    console.log("Tecla pulsada:"+ tecla)
    if( ["0","1","2","3","4","5","6","7","8","9"].includes(tecla) && llamadaInicida == false){
        inputNum.classList.remove("invalido")
        inputNum.classList.remove("valido")
        inputNum.value+=tecla;  
    } else if(tecla == "☎️"){
        if(regex.test(inputNum.value)){
            if(llamadaInicida == false){
                console.log("Se llama al numero", inputNum.value)
                inputNum.classList.remove("invalido")
                inputNum.classList.add("valido")
                cronometro.iniciarCronometro();
                llamadaInicida = true
                inputNum.readOnly = true;
            }
        } else{
            console.log("No se llamo, numero invalido")
            inputNum.classList.add("invalido")
            inputNum.classList.remove("valido")
        }
    } else if(tecla == "C"){
        if(llamadaInicida){
            llamadaInicida = false
            guardarRegistro();
            cronometro.pararCronometro()
            cronometro.tiempo = 0;
        }
        mostrarRegistro()
        inputNum.value = ""
        tiempoTxt.textContent = "Tiempo: 00:00:00"
        inputNum.readOnly = false;
    }else if(tecla == "R"){
        inputNum.value = ""
        if(llamadaInicida == false && registro.length >0){
            const numeroUltimaLlamada = registro[registro.length-1]
            inputNum.value = numeroUltimaLlamada
            inputNum.classList.remove("invalido")
            inputNum.classList.add("valido")
            cronometro.iniciarCronometro();
            llamadaInicida = true
            console.log("Se rellama al numero",numeroUltimaLlamada)
            inputNum.readOnly = true;
        }
    }
}   


//Objeto de cronometro para manejo mas facil
const cronometro = {
    tiempo: 0,
    intervalID : null,
    // Inicia el cronómetro
    iniciarCronometro() {
        this.intervalID = setInterval(() => {
            this.tiempo++;
            this.actualizarCronometro();
        }, 1000); // Actualiza el cronómetro cada segundo (1000 ms)
        this.iniciado = true;
    },

    // Detiene el cronómetro
    pararCronometro() {
        clearInterval(this.intervalID);
    },
    // Actualiza la visualización del cronómetro en la interfaz
    actualizarCronometro() {
        const minutos = Math.floor(this.tiempo / 60); // Obtener minutos
        const segundos = this.tiempo % 60; // Obtener segundos
        const horas = Math.floor(this.tiempo / 360)

        const minutosStr = minutos.toString().padStart(2, '0'); // Formatear minutos a dos dígitos
        const segundosStr = segundos.toString().padStart(2, '0'); // Formatear segundos a dos dígitos
        const horasStr = horas.toString().padStart(2,'0')
        tiempoTxt.textContent = `Tiempo: ${horasStr}:${minutosStr}:${segundosStr}`;
    }
};


//Funcion para guardar el registro en el sessionStorage
function guardarRegistro() {
    console.log("Se guardó el registro");
    registro.push(inputNum.value); 
    registroTiempo.push(tiempoTxt.innerHTML)
    console.log("Registro:",registro)
    // Convierte los datos a una cadena JSON y guárdalos en el sessionStorage
    sessionStorage.setItem("registro", JSON.stringify(registro));
    sessionStorage.setItem("registroTiempo", JSON.stringify(registroTiempo));
}

//Recupera y muestra el registro
//No se copia el inputbox n no tiene sentido poder modifcar un registro
function mostrarRegistro(){
    registroHtml.innerHTML = ""
    registro = JSON.parse(sessionStorage.getItem("registro"));
    registroTiempo = JSON.parse(sessionStorage.getItem("registroTiempo"));
    if(registro != null){
        for (let index = 0; index < registro.length; index++) {
           registroHtml.innerHTML += registro[index] + " " + registroTiempo[index] + "<br>";
            
        }   
    }else {
        registro = []
        registroTiempo = []
    }

    console.log("Se muestra el registro:",registro)
}