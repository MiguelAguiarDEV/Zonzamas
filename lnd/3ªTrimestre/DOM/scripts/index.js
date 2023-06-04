//Ejercicio 1//
let enlaces = document.getElementsByTagName("a");
console.log(enlaces)


let numero_de_enlaces = enlaces.length;
console.log("Hay",numero_de_enlaces,"enlaces")



let penultimo_enlace = enlaces[enlaces.length-2]
console.log("Señala a esta direccion:",penultimo_enlace.attributes[0])

let j = 0
for (i = 0; i < enlaces.length ; i++ ){
    if (enlaces[i].attributes[0].value == "http://prueba/"){
        j++
    };
};
console.log("Hay",j,"enlaces con la direccion http://prueba/")



let tercer_parrafo = document.getElementsByTagName("p")[2]

let numero_enlaces_3_parrafo = tercer_parrafo.getElementsByTagName("a").length
console.log("Numero de enlaces en el tercer parrafo:",numero_enlaces_3_parrafo);


let nuevoNodo = document.createElement("div");
nuevoNodo.textContent = "CIEFP Zonzamas";
let raiz = document.createElement("div");
raiz.appendChild(nuevoNodo);

document.getElementById("tabla").appendChild(raiz);

let segundo_parrafo = document.getElementsByTagName("p")[1];
let nuevo_parrafo = segundo_parrafo.cloneNode(true);

document.getElementsByTagName("p")[2].insertAdjacentElement("beforeend",nuevo_parrafo);




function anadefila(){
    let fila_anadir = document.createElement("tr")
    const tabla = document.getElementsByTagName("table")[0]
    console.log(tabla)
    tabla.appendChild(fila_anadir)
};