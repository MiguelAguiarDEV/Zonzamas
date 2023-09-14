var txt = "Historia de la criptografía - Método usado por Rail Fences"
function rail(texto,nlineas) {
    var contenedor = document.getElementById("tabla-contenedor");
    var tabla = document.createElement("table");
    var resultado = "";
    var longitud_texto = texto.length; 
    var caracteres_fila = Math.round(longitud_texto / nlineas) 
    for (let i = 0; i < nlineas; i++) {
        var fila = document.createElement("tr");
        var x = 0
        for(let j = i;j < longitud_texto; j+=nlineas){
            x++;
            

            var celda = document.createElement("td");
            var textoCelda = document.createTextNode(texto[j]);
            celda.appendChild(textoCelda);
            fila.appendChild(celda);

            resultado += texto[j]
        }
        tabla.appendChild(fila);
        if(x < caracteres_fila){
            var celda = document.createElement("td");
            var textoCelda = document.createTextNode(" ");
            celda.appendChild(textoCelda);
            fila.appendChild(celda);
            resultado += " "
        }
    }
    contenedor.appendChild(tabla);
    return resultado 
}
console.log(rail(txt,4))
console.log("Ho lrof-t doaFeirdaigi ouoriessie praMds  ln ta cta eoapR c")

