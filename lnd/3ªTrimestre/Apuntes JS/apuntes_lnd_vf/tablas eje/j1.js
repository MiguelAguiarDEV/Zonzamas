function crear_tabla() {
    filas = Number(document.getElementById("filas").value)
    columnas = Number(document.getElementById("columnas").value)
    
    if (isNaN(filas) || isNaN(columnas)) {
        alert("error")
        return
    }

    code = "<table>"
    for (i = 0; i < filas; i++) {

        if (i == 0) { code += "<tr class='negro'>" }
        else if (i % 2 == 0) { code += "<tr class='gris'>" }
        else if (i % 2 == 1) { code += "<tr class='blanco'>" }
        
        for (let j = 0; j < columnas; j++) {
            code += "<td>"
            code += String(i + 1) + String(j + 1)
            code += "</td>"
        }
        code += "</tr>"
    }
    code += "</table>"

    document.getElementById("resultado").innerHTML = code
}



function crear_tabla_aleatoria() {
    cantidad_numeros = Number(document.getElementById("cantidad_numero").value)
    numero_de_columnas = Number(document.getElementById("numero_de_columnas").value)
    cada_cuanto_negro = Number(document.getElementById("cada_cuanto_negro").value)

    if (isNaN(cantidad_numeros) || isNaN(numero_de_columnas)) {
        alert("error")
        return 
    }

    
    code = "<table>"
    i =0
    while (i < cantidad_numeros) {
        code += "<tr>"
        for (j = 0; j < numero_de_columnas; j++) {
            code += "<td"
            if (i % cada_cuanto_negro == 0) {
                code += " class= 'negro' "
            }
            code += ">"

            if (i < cantidad_numeros) {
                code += Math.trunc(Math.random()*10)+1
            }
            code += "</td>"
            i++
        }
        code += "</tr>"
    }
    code += "</table"
    document.getElementById("resultado_numero").innerHTML = code
}






// function crear_tabla(filas, columnas) {
//     code = "<table>"
//     for (i = 0; i < filas; i++) {
//         code += "<tr>"
//         for (let j = 0; j < columnas; j++) {
//             code += "<td>"
//             code += String(i + 1) + String(j + 1)
//             code += "</td>"
//         }
//         code += "</tr>"
//     }
//     code += "</table>"
//     return code
// }
