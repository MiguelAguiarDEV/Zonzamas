
const escaparate = "<img src='img/escaparate.png' alt='escaparate'>";
const puerta = "<img src='img/puerta.png' alt='puerta'>";
const cartel = "<img src='img/cartel.png' alt='cartel'>";
const reloj = "<img src='img/reloj.jpg' alt='reloj'>";
const coche = "<img src='img/coche.jpg' alt='coche'>";
const semaforoRojo = "<img src='img/semaforo_rojo.jpg' alt='semaforo'>";
const semaforoVerde = "<img src='img/semaforo_verde.jpg' alt='semaforo'>";
const semaforoAmarillo = "<img src='img/semaforo_amarillo.jpg' alt='semaforo'>";
function numValido(numero, numeroMaximo) {
    
  if (!isNaN(numero) && numero >= 0 && numero <= numeroMaximo) {
      return true;
  } else {
      return false;
  }
};

const coloresValidos = ["rojo", "verde","amarillo"]; 

function esColorValido(color) {
    

    if (typeof color === "string") {
        if (coloresValidos.includes(color.toLocaleLowerCase())) {
            console.log(color)
            return true;
        };  
    };
    return false;
};    



var numCartelesValido = false;
var numCarteles
while (numCartelesValido == false){
  numCarteles = Number(prompt("Ingrese el numero de carteles"));
  numCartelesValido = numValido(numCarteles, 10);
  if (numCartelesValido == false){
    alert("Numero no valido");
  }
};


var coloresSemaforoEsValido = false;  
var colSemaforo
while (coloresSemaforoEsValido == false){
  colSemaforo = prompt("Ingrese el color de la semaforo");
  coloresSemaforoEsValido = esColorValido(colSemaforo);
  if (coloresSemaforoEsValido == false){
    alert("Color no valido");
  }
};

var numCochesValido = false;
var numCoches
while (numCochesValido == false){
  numCoches = Number(prompt("Ingrese el numero de coches"));
  numCochesValido = numValido(numCoches, 10);
  if (numCochesValido == false){
    alert("Numero no valido");
  }
};


var numPuertasValido = false;
var numPuertas;
while (numPuertasValido == false){
  numPuertas = Number(prompt("Ingrese el numero de puertas que hay"));
  numPuertasValido = numValido(numPuertas, 10);
  if (numPuertasValido == false){
    alert("Numero no valido");
  }
};



var numPuertaValido = false;
var numPuerta;
while (numPuertaValido == false){
  numPuerta = Number(prompt("Ingrese el numero de la primera puerta"));
  numPuertaValido = numValido(numPuerta, 10);
  if (numPuertaValido == false){
    alert("Numero no valido");
  }
};

var numerosPuertas = [];

for (i=0; i<numPuertas; i++){ 
  numerosPuertas.push(numPuerta);
  numPuerta += 2;
}; 


var numEscaparatesValido = false;
var numEscaparates;
while (numEscaparatesValido == false){
  numEscaparates = Number(prompt("Ingrese el numero de escaparates"));
  numEscaparatesValido = numValido(numEscaparates, 10);
  console.log("hola")
  if (numEscaparatesValido == false){
    alert("Numero no valido");
  }
};


var ofertas = [];
var oferta;
var i = 0;
while (ofertas.length < numEscaparates){
  oferta = Number(prompt("Ingrese el numero de la oferta del escaparate numero",i));
  if (numValido(oferta, 100)){
  ofertas.push(oferta);
  console.log(oferta)
  i++;
  }
};


function verTiempo() {
    let tiempo = new Date();
    let hora = tiempo.getHours();
    let min = tiempo.getMinutes();
    let sec = tiempo.getSeconds();
    
    am_pm = "AM";
    
     if (hora >= 12) {
        if (hora > 12) hora -= 12;
        am_pm = "PM";
    } else if (hora == 0) {
        hr = 12;
        am_pm = "AM";
    }
 
    hora = hora < 10 ? "0" + hora : hora;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
 
    let tiempoActual = hora + ":" + min + ":" + sec + am_pm;
    document.getElementById("reloj").innerHTML = tiempoActual;
  };








document.write(cartel.repeat(numCarteles),"<br>");
document.write(escaparate.repeat(numEscaparates),"<br>");




document.write("<div>");
ofertas.forEach(oferta => {
  document.write("<div class='oferta'>",oferta,"%</div>");
});
document.write("</div>");


document.write(puerta.repeat(numPuertas),"<br>");
console.log(numPuertas,"Numero de puertas");




document.write("<div>");


numerosPuertas.forEach(puerta => {
  document.write("<div>",puerta,"</div>");
});
document.write("</div>");


document.write("<br>");


document.write("<div id='contenedor-reloj-semaforo'>");
document.write("<div id='reloj'></div>")
setInterval(verTiempo, 1000);

switch (colSemaforo) {
  case "verde":
    document.write(semaforoVerde);
    break;
  case "rojo":
    document.write(semaforoRojo);
    break;
  case "amarillo":
    document.write(semaforoAmarillo);
    break;
};
document.write("</div>");


document.write("<br>");
document.write(coche.repeat(numCoches));
