


const escaparate = "<img src='escaparate.png' alt='escaparate' width='100px'>";
const puerta = "<img src='puerta.png' alt='puerta' width='100px'>";
const cartel = "<img src='cartel.png' alt='cartel' width='100px'>";
const reloj = "<img src='reloj.jpg' alt='reloj' width='100px'>";
const coche = "<img src='coche.jpg' alt='coche' width='100px'>";
const semaforoRojo = "<img src='semaforo_rojo.jpg' alt='semaforo' width=100px'>";
const semaforoVerde = "<img src='semaforo_verde.jpg' alt='semaforo' width=100px'>";
const semaforoAmarillo = "<img src='semaforo_amarillo.jpg' alt='semaforo' width=100px'>";



function generar() {

    var numCarteles = document.getElementById("input-num-carteles").value;    
    var colSemaforo = document.getElementById("sel-color").value;    
    var numCoches = document.getElementById("input-num-coches").value;    
    var numPuerta = document.getElementById("input-num-puerta").value;    


	document.write("<style>");

	document.write("* { font-size: 200px;font-weight: bold;}img,font {border:1px solid black;padding:0;margin:0;}img {width:100px;height:100px;}");
	document.write("</style <br>")
    document.write(cartel.repeat(numCarteles)+"<br>");

    if (numPuerta > 0) {
        document.write("<font size='10px'> ",numPuerta,"</font>",puerta,"<br>");        
    }

    document.write(escaparate,"<br>");

    document.write(reloj);

    switch (colSemaforo) {
        case "Verde":
          document.write(semaforoVerde);
          break;
        case "Rojo":
          document.write(semaforoRojo);
          break;
        case "Amarillo":
          document.write(semaforoAmarillo);
          break;
        default:
            alert("estado no valido");
        }
        document.write("<br>");
    document.write(coche.repeat(numCoches));
};




  boton.addEventListener("click", generar);