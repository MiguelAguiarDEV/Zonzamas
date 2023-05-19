var txt = "Hola, como estas?"




function ejercicio_1_1(texto) {

    var contenedor = document.getElementById("tabla-contenedor");
    var tabla = document.createElement("table");
    var resultado = "";
    var longitud_texto = texto.length;  
    var fila = document.createElement("tr");
    for(let j = 0;j < longitud_texto; j+=1){
    
        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(texto[j]);
        
        celda.appendChild(textoCelda);
        fila.appendChild(celda);

        resultado += texto[j]
        }

        tabla.appendChild(fila);

        contenedor.appendChild(tabla);
        return resultado 
    }





function ejercicio_1_2(texto) {
    var contenedor = document.getElementById("tabla-contenedor");
    var tabla = document.createElement("table");
    var resultado = "";
    var longitud_texto = texto.length;  
    var fila = document.createElement("tr");
    for(let j = 0;j < longitud_texto; j+=1){

        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(texto[j]);

        var letra = texto[j]
        
        if(letra == " "){
            celda.className = "espacio";
        }

        if("aeiou".indexOf(letra) != -1){
            celda.className = "vocal";
        }
        celda.appendChild(textoCelda);
        fila.appendChild(celda);

        resultado += texto[j]
        }

    tabla.appendChild(fila);

    contenedor.appendChild(tabla);
    return resultado 
}



function ejercicio_1_3(texto,palabra){

    var texto_minusculas = texto.toLowerCase()
    var palabra_minusculas = palabra.toLowerCase()
    // Lo pongo en minusculas para no diferenciar entre mayusculas y minusculas ej:  "Hola" == "hola"
        if(texto_minusculas.includes(palabra_minusculas)){
            var posicion = texto_minusculas.indexOf(palabra_minusculas)
            return "Existe en la posicion "+posicion;
        }
    return "No existe"
}



    console.log(ejercicio_1_1(txt))
    console.log(ejercicio_1_2(txt))
    console.log(ejercicio_1_3(txt,"como"))
    
    
    
var min = 20
var n = 11
var max = 30

var n_numeros = max-min
var array = []
for(let i = 0; i <n_numeros; i++){
    array.push(Math.floor(Math.random() * n_numeros) +20);
}


function ejercicio_2_1(array){
    var array_sin_repetidos = []
    for(let i = 0; i < array.length;i++){
        var numero = array[i];
        var contador = 0;
        for(let j = 0; j < array.length;j++){
            if(numero == array[j]){
                contador++;
            }
        }
        if(contador < 2){
            array_sin_repetidos.push(numero)
        }
    }
    
    var contenedor = document.getElementById("tabla-contenedor");
    var tabla = document.createElement("table");
    var fila = document.createElement("tr");
    for(let y = 0;y < array.length; y+=1){

        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(array[y]);
        var numero = array[y]
        if(array_sin_repetidos.indexOf(numero) != -1){
            celda.className = "no_repetidos";
        }
    
        celda.appendChild(textoCelda);
        fila.appendChild(celda);

        }

    tabla.appendChild(fila);

    contenedor.appendChild(tabla);
    return array
}



function ejercicio_2_2(array){
    var contenedor = document.getElementById("tabla-contenedor");
    var tabla = document.createElement("table");
    var fila = document.createElement("tr");
    for(let y = 0;y < array.length; y+=1){

        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(array[y]);
        var numero = array[y]
        celda.appendChild(textoCelda);
        fila.appendChild(celda);
        }
    tabla.appendChild(fila);

    contenedor.appendChild(tabla);
    return array
}



console.log(ejercicio_2_1(array))
console.log(ejercicio_2_2(array))