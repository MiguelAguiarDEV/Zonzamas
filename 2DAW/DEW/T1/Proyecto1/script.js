
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


var carteles = [];
var oferta;
var i=1;
while (carteles.length < numEscaparates){
  oferta = prompt("Ingrese el texto del cartel numero"+i);

  carteles.push(oferta);
  console.log(oferta)
  i++
  
};

var coloresSemaforoEsValido = false;  
var colSemaforo;
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
  numCochesValido = numValido(numCoches, 100);
  if (numCochesValido == false){
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

for (i=0; i<numEscaparates; i++){ 
  numerosPuertas.push(numPuerta);
  numPuerta += 2;
}; 


var ofertas = [];
var oferta;
var i=1;
while (ofertas.length < numEscaparates){
  oferta = prompt("Ingrese el numero de la oferta del escaparate numero"+i+"º");

  ofertas.push(oferta);
  console.log(oferta)
  i++
  
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


//Pintar las imagenes de los carteles
document.write("<div class='contenedor max-contenedor'>")
document.write("<div class='contenedor sub-contenedor'>"+("<div class='contenedor sub2-contenedor'>"+cartel+"</div>").repeat(numEscaparates)+"</div></div>");
document.write("</div>")	


//Pintar los numero de las puertas
document.write("<div class='contenedor max-contenedor'><div class='contenedor sub-contenedor'>");
numerosPuertas.forEach(numero => {
	document.write("<div class='contenedor sub2-contenedor'>",numero,"</div>");
});
document.write("</div>")

//Pintar las imagenes de las puertas
document.write("<div class='contenedor sub-contenedor'>"+("<div class='contenedor sub2-contenedor'>"+puerta+"</div>").repeat(numEscaparates)+"</div></div>");



//Pintar las ofertas
document.write("<div class='contenedor max-contenedor'><div class='contenedor sub-contenedor'>");
ofertas.forEach(oferta => {
	document.write("<div class='contenedor sub2-contenedor'>",oferta,"</div>");
});
document.write("</div>")


//Pintar las imagenes de los escaparates
document.write("<div class='contenedor sub-contenedor'>"+("<div class='contenedor sub2-contenedor'>"+escaparate+"</div>").repeat(numEscaparates)+"</div></div>");


document.write("<div class='contenedor max-contenedor'><div class='contenedor sub-contenedor'>");
document.write("<div class='contenedor sub2-contenedor' id='reloj'></div>");


document.write("<div class='contenedor sub2-contenedor'>");
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
document.write("</div></div></div>")


document.write("<div class='contenedor max-contenedor'><div class='contenedor sub-contenedor'>"+("<div class='contenedor sub2-contenedor'>"+coche+"</div>").repeat(numCoches)+"</div></div></div>");






setInterval(verTiempo, 1000);





