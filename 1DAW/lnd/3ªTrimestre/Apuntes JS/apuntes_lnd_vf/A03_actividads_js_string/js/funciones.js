
function contarOcurrencias(frase, busqueda) {
    return(frase.split(busqueda).length -1)
}

console.log(contarOcurrencias("holalala", "la"))


function agregarIndice(frase) {
    resultado = "";
    for (let i = 0; i < frase.length; i++) {
        resultado += frase[i] + i
    }
    return resultado
}

console.log(agregarIndice("hola"))


function invertirTexto(frase) {
    resultado = ""
    for (let i = 0; i < frase.length; i++){
        resultado += frase[frase.length -i -1]
    }
    resultado = resultado.replace("a","4")
    resultado = resultado.replace("e","3")
    resultado = resultado.replace("i","1")
    resultado = resultado.replace("o","0")
    resultado = resultado.replace("u","5")
    return resultado
}

console.log(invertirTexto("hola"))