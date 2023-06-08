//1.1
numero_enlances = document.getElementsByTagName("a").length
document.write("<br><b>numero de enlances: </b>" + numero_enlances)

//1.2
enlaces = document.getElementsByTagName("a")
penultimo_enlace = enlaces[enlaces.length - 1 - 1]
document.write("<br> <b>penultimo enlace: </b>", penultimo_enlace.href)

//1.3
paso = [...enlaces]
contador = 0
paso.forEach(function (ele, indx, array) {
    if (ele.href == "http://prueba/") {
        contador++
    }
});
document.write("<br> <b>enlances a http://prueba/:</b> ",contador)

//1.4
tercer_parrafo = document.getElementsByTagName("p")[2]
document.write("<br><b>enlances en el tercer parrafo: </b>", tercer_parrafo.getElementsByTagName("a").length)

//1.5
mi_objeto = document.createElement("nuevoNodo")
mi_objeto.innerText = "CIFP Zonzamas"
document.write("<br>")
document.body.appendChild(mi_objeto)

//1.6
nuevo_parrafo = document.getElementsByTagName("p")[1].cloneNode(true)
document.getElementsByTagName("p")[2].insertAdjacentElement("afterend", nuevo_parrafo)


//2
function anadelista() {
    lista = document.getElementById("lista")
    nuevo_elemento = document.createElement("li")
    nuevo_elemento.innerText= "Lorem ipsum"
    lista.appendChild(nuevo_elemento)
}

function eliminalista() {
    lista = document.getElementById("lista")
    lista.children[lista.children.length-1].remove()

}

//3
function anadefila() {
    tabla = document.querySelector("table")
    console.log(tabla)
    fila = document.createElement("tr")

    color = Math.floor(Math.random() * 16777215).toString(16);
    color = "#" + color
    fila.style.backgroundColor = color

    celda1 = document.createElement("td")
    celda1.innerText = "celda " + Number(tabla.children.length +2) + "1"
    
    celda2 = document.createElement("td")
    celda2.innerText = "celda " + Number(tabla.children.length + 2) + "2"
    
    celda3 = document.createElement("td")
    celda3.innerText = "celda " + Number(tabla.children.length + 2) + "3"

    fila.appendChild(celda1)
    fila.appendChild(celda2)
    fila.appendChild(celda3)
    tabla.appendChild(fila)
}

function eliminafila() {
    tabla = document.querySelector("table")
    tabla.children[tabla.children.length -1].remove()
}