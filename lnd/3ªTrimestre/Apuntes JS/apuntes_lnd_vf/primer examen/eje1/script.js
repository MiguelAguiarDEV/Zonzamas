// eje 1.1

function matriz() {
    return document.getElementById("frase").value.split("")
}

// console.log(matriz("Hola, como estas?"))

// eje 1.2
function matriz_coloreada() {
    frase = matriz()
    code = "<table style='border-collapse: collapse;'><tr>"
    for (letra of frase) {
        if (["a", "e", "i", "o", "u"].includes(letra.toLowerCase())) {
            code += `<td style='background-color: blue;border:1px solid black;width:20px;'>${letra}</td>`
            continue
        }
        if (letra == " "){
            code += `<td style='background-color: red;border:1px solid black; width:20px;'>${letra}</td>`
            continue
        }
        code += `<td style='border:1px solid black;width:20px;'>${letra}</td>`
    }
    code += "</tr></table>"
    document.write(code)
}



// eje 1.3
function palabra_dentro(palabra, frase) {
    pos = frase.indexOf(palabra)
    if (pos == -1) {
        return "no existe"
    }
    return pos
}

console.log(palabra_dentro("l","hola"))