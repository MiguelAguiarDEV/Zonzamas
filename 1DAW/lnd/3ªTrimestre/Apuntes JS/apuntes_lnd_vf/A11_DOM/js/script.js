 
function hacer_tabla() {
    filas = Number(document.getElementById("filas").value)
    columnas = Number(document.getElementById("columnas").value)

    mi_tabla = document.createElement("table")
    i = 0
    array_columnas = Array(columnas).fill(0)
    while (i < filas) {
        j=0
        fila = document.createElement("tr")
        while (j < columnas) {
            celda = document.createElement("td")
            numero = Math.trunc(Math.random() * 20) + 1
            celda.innerText = numero
            mi_tabla.appendChild(fila)
            array_columnas[j] += numero
            j++
            fila.appendChild(celda)
            console.log(i,array_columnas)
        }
        i++
    }
    fila_extra = document.createElement("tr")
    array_columnas.forEach(function (ele, indx, array) {
        td = document.createElement("td")
        td.innerText = ele / filas
        fila_extra.appendChild(td)
        console.log(ele, filas)
    })
    mi_tabla.appendChild(fila_extra)

    document.getElementById("resultado").innerHTML = mi_tabla.outerHTML

    calcular_datos()
}

function calcular_datos() {
    mi_array = Array()

    mi_tabla = document.getElementById("resultado").querySelector("table")
    Array.from(mi_tabla.rows).forEach(function (tr, indxtr, arraytr) {
        Array.from(tr.cells).forEach(function (td, indxtd, arraytd) {
            mi_array.push(Number(td.innerText))
        })
    });

    maximo = Math.max(...mi_array)
    minimo = Math.min(...mi_array)

    media = 0
    mi_array.forEach(function (ele, indx, array) {
        media += Number(ele)
    })
    media = Math.trunc((media / mi_array.length)*100)/100

    moda = NaN
    mi_array.forEach(function (ele, indx, array) {
        if (isNaN(moda)) {
            moda = ele
        } else
            if (array.filter(numero => numero == ele).length > array.filter(numero => numero == moda).length) {
                moda = ele
             }
    })

    resultado = document.getElementById("resultado")
    resultado.innerHTML += `maximo: ${maximo} <br>`
    resultado.innerHTML += `minimo: ${minimo} <br>`
    resultado.innerHTML += `media: ${media} <br>`
    resultado.innerHTML += `moda: ${moda} <br>`
}