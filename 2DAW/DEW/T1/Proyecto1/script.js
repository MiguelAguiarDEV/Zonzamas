
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

while (numCartelesValido == false){
  var numCarteles = Number(prompt("Ingrese el numero de carteles"));
  numCartelesValido = numValido(numCarteles, 10);
  if (numCartelesValido == false){
    alert("Numero no valido");
  }
};


var coloresSemaforoEsValido = false;  

while (coloresSemaforoEsValido == false){
  var colSemaforo = prompt("Ingrese el color de la semaforo");
  coloresSemaforoEsValido = esColorValido(colSemaforo);
  if (coloresSemaforoEsValido == false){
    alert("Color no valido");
  }
};

var numCochesValido = false;

while (numCochesValido == false){
  var numCoches = Number(prompt("Ingrese el numero de coches"));
  numCochesValido = numValido(numCoches, 10);
  if (numCochesValido == false){
    alert("Numero no valido");
  }
};

var numPuertaValido = false;

while (numPuertaValido == false){
  var numPuerta = Number(prompt("Ingrese el numero de puertas"));
  numPuertaValido = numValido(numPuerta, 10);
  if (numPuertaValido == false){
    alert("Numero no valido");
  }
};







document.write(cartel.repeat(numCarteles)+"<br>");

if (numPuerta > 0) {
    document.write("<div id='contenedor'><div>",numPuerta,"</div>",puerta,"</div><br>");        
}
else {
  alert("Numero de puertas no valido");
  console.log("Numero de puertas no valido");
}
document.write(escaparate,"<br>");

document.write(reloj);


if (esColorValido(colSemaforo)) {   
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
      default:
          alert("Color no valido");
      }
    }
    else {
      alert("Color no valido");
  };




    document.write("<br>");
document.write(coche.repeat(numCoches));
