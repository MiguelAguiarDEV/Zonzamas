// eje 2.1
function array_aleatorio(min, max, n) {
    array = []
    for (let i = 0; i < n; i++) {

        array[i] = Math.trunc(((Math.random() * (max-min+1)))) + min
    }
    array_aleatoria = array
    return array
}

function numeros_unicos(array) {
    array_unico = []
    for (numero of array) {
        if (array.indexOf(numero) == array.lastIndexOf(numero)) {
            array_unico.push(numero)
        }
    }
    return array_unico
}

function pintar_array() {
    code = "<table><tr>"
    array_aleatoria = array_aleatorio(Number(document.getElementById("minimo").value), Number(document.getElementById("maximo").value), Number(document.getElementById("cantidad").value))
    array_unica = numeros_unicos(array_aleatoria)
    for (numero of array_aleatoria) {
        if (array_unica.includes(numero)) {
            code += `<td style='background-color:red'>${numero}</td>`
            continue
        }
        code += `<td>${numero}</td>`
    }
    code += "</tr></table><br>"
    document.body.innerHTML += code
}

// console.log(numeros_unicos([1, 2, 3, 2, 3, 4, 5, 5]))

// eje 2.2
function ordenacion(array) {
    array_ordenado = []

    contador = array.length
    while (contador != 0) {
        numero_menor = NaN;
        for (numero of array) {
            if (Number.isNaN(numero)) {
                continue
            }
            if (numero < numero_menor || Number.isNaN(numero_menor)) {
                numero_menor = numero
            }
        }
        array[array.indexOf(numero_menor)] = NaN
        array_ordenado.push(numero_menor)
        contador--
    }
    return array_ordenado
}

function pintar_ordenacion() {
    code = "<table><tr>"
    array_aleatoria = array_aleatoria
    for (numero of array_aleatoria) {
        code += `<td>${numero}</td>`
    }
    code += "</tr></table>"
    document.body.innerHTML += code

    code = "<table><tr>"
    array_ordenado = ordenacion(array_aleatoria)
    for (numero of array_ordenado) {
        code += `<td>${numero}</td>`
    }
    code += "</tr></table>"
    document.body.innerHTML += code
}

console.log(ordenacion([5, 6, 1, 3, 8, 9, 2, 5]))
