 
function algoritmo_cesar(frase, desplazo =3) {
    frase_cesar = ""
    for (let i = 0; i < frase.length; i++) {
        if (frase[i] == " ") {
            letra_remplazo = String.fromCharCode("a".charCodeAt(0)-1 + desplazo)
        }else if (frase[i] == "`") {
            letra_remplazo = " "
        }
        else {
            letra_remplazo = String.fromCharCode(frase[i].charCodeAt(0) + desplazo)
        }


        frase_cesar += letra_remplazo
    }
    return frase_cesar
}

console.log(algoritmo_cesar("Historia de la criptografia Metodo usado por los romanos",3))


function cifrado_rail(frase, lineas) {
    marco =[]
    for (let i = 0; i < lineas; i++) {
        marco.push([])
    }


    while ((frase.length) % lineas != 0) {
        frase += " "
    }

    j = 0
    for (let i = 0; i < frase.length; i++) {
        marco[j].push(frase[i])
        j += 1
        if (j==lineas) {
            j = 0
        }
    }

    frase_ciffrada = ""
    for (linea of marco ) {
        frase_ciffrada += linea.join("")
        
    }

    pintar_tabla(marco)

    return frase_ciffrada
}

function pintar_tabla(marco) {

    tabla = "<table>"
    for (line of marco) {
        tabla += "<tr>"
        for (letra of line){
            tabla += ` <td>${letra}</td>`
        }
        tabla += "</tr>"
    }
    tabla += "</table>"

        document.body.innerHTML += tabla
    }

// console.log(cifrado_rail("Historia de la criptografía - Método usado por Rail Fences", 4))


