/* -------Fechas------- */

//creacion
d = Date() //fecha actual, aunque pongas cosas dentro, sigue dando la fecha actual, usad new
d = new Date("2018")
d = new Date("2018-12-25") // 2018/12/25 si le pasas formato inccorrecto falla
d = new Date(2018,11,25)   // 2018/12/25 si le pasa el 12 te pone el enero del siguiente año

// to string
d.toDateString() // 'Tue Dec 25 2018'
d.toUTCString() // 'Tue, 25 Dec 2018 00:00:00 GMT'
d.toISOString() // '2018-12-25T00:00:00.000Z'

// obtencion de datos
d.getFullYear() //  2018 !Cuidado con el Date() a secas no funciona tienes que poner el "new"
d.setFullYear(2000) //sirve tanto string como int
d.getMonth();d.setMonth() //mes
d.getDate();d.setDate()  //dia
d.getHours();d.setHours() //hora
d.getMinutes();d.setMinutes() //minuto
d.getSeconds();d.setSeconds() //segundo
d.getMilliseconds();d.setMilliseconds() //milisegundo
d.getDay()// lunes = 1

Date.now() // milisegundos desde el momento computacional 0 o el año de la pera hasta ahora
d.getTime() // hasta el momento de la fecha


d.setDate(d.getDate() + 1); //sumar 1 dia
//conseguir el numero de dias de un mes y año, osea si tiene 31/30/29/28 dias
ndias = new Date(2021, 2, 0).getDate(); //al poner el 0, como la fecha empieza en 1, es como si le 
                                        // restaras 1 a esa fecha, obtienes el numero de dia del ultimo
                                        // dia del mes
new Date(2021, 2, -2); // lo mismo aqui, puedes hacer estas ""restas""


/* -------DOM------- */
mi_objeto = document.getElementsByClassName("borde-gris") //busqueda por clase, te devuelve un HtmlCollection
                                                          // parecido a un array pero no

mi_objeto = document.getElementsByTagName("li") //busqueda por etiqueta
mi_objeto = document.querySelector("div") //busqueda multiusos, devuelve solo uno
mi_objeto = document.querySelector(".borde-gris")
mi_objeto = document.querySelector("div.borde-gris")
mi_objeto = document.querySelectorAll("div")//devuelve todos
mi_objeto.parentElement // para accceder al padre
mi_objeto.children // los hijos
document.getElementsByTagName("div")[0].children // ejemplo, si se usa el queryselector no hace falta indice
document.querySelector("div").replaceChildren(document.createElement("p")) //para sustituir

milista = [...mi_objeto] //convierte collection a array
maximo = Math.max(...mi_array) // para cojer el maximo de un array,
                            // mismo concepto con el *args en python | def suma(*elementos), o lo usas como
                            // suma(1,2,3,4) o suma(*[1,2,3,4]), o eso entiendo

titulo = document.createElement("h2") //crea etiqueta
texto = document.createTextNode("esto es una prueba") //crea texto

mi_objeto_clonado = mi_objeto.cloneNode()//cloneNode(true) para clonar tambien hijos
mi_objeto.isConnected // para saber si esta dentro del html, true/false

mi_objeto.appendChild(mi_objeto_clonado) //añadir al final
mi_objeto.insertAdjacentElement("beforebegin",mi_objeto_clonado) // before/after begin/end
mi_objeto.insertAdjacentHTML("beforebegin","<h1>hola</h1>") // before/after begin/end
mi_objeto.remove() //elimina el objeto del document/html
document.body.append(document.createElement("p")) // lo añade al final del body


// 'beforebegin': Antes del elementoObjetivo.
// 'afterbegin': Dentro del elementoObjetivo, antes de su primer hijo.
// 'beforeend': Dentro del elementoObjetivo, después de su último hijo.
// 'afterend': Después del elementoObjetivo.

// <!-- beforebegin -->
// <p>
//   <!-- afterbegin -->
//   foo
//   <!-- beforeend -->
// </p>
// <!-- afterend -->

mi_objeto.innerText = "hola"
mi_objeto.innerHTML = "<h1>hola</h1>"
mi_objeto.outerHTML = "<div class='div_1'><h1>hola</h1></div>"

mi_objeto.getArribute("class")
mi_objeto.setArribute("class","rojo")

mi_objeto.classList //lista con las clases del objeto
mi_objeto.className // te lo da como una string
mi_objeto.className += "borde-gris" 
mi_objeto.classList.add("rojo","azul") // remove, replace, contains


mis_objetos = document.querySelectorAll(".borde-gris")
miArrayNodos = [...mis_objetos]
miArrayNodos.forEach(function(elemento, indice,array){
    elemento.style.color = "red"
})

myArray = [1, 2, 3, 4, 5]; 
x = myArray.splice(1, 3); //elimina y devuelve desde el elemento de indice 1 hasta tener 3 elementos
x = myArray.splice(1); // elimina y devuelve el elemento de indice 1
i = myArray.indexOf(5); //4, devuelve -1 si no lo ha encontrado

//ejemplo, guardar en un array el contenido de una tabla
mi_array = Array()
mi_tabla = document.querySelector("table")
Array.from(mi_tabla.rows).forEach(function (tr, indxtr, arraytr) {
    Array.from(tr.cells).forEach(function (td, indxtd, arraytd) {
        mi_array.push(td.innerText)
    })
});
// directamente los td, podrias especificar asi document.querySelector("#mi_tabla").querySelectorAll("td")
mi_array = Array()
mi_tabla = document.querySelectorAll("td")
Array.from(mi_tabla).forEach(function (td, indxtr, arraytr) {
    mi_array.push(td.innerText)
});

//edad 
fecha_actual =new Date()
fecha_nac = new Date(2001,2,5) // mes 0 == enero
Math.floor((fecha_actual-fecha_nac)/(1000*60*60*24*365))

// dias hasta navidad
fecha_actual =new Date()
fecha_navidad= new Date()
fecha_navidad.setDate(24)
fecha_navidad.setMonth(11) // mes 11 == diciembre
Math.ceil((fecha_navidad-fecha_actual)/(1000*60*60*24))

//lunes 1 de ener
fecha1 = new Date(2000,0,1)
fecha2 = new Date(2020,0,1)
conteo = 0

if(fecha1.getDay() == 1 && fecha1.getDate() == 1 && fecha1.getMonth()==0 && fecha1>fecha2){
    conteo++
}    
fecha1.setFullYear(fecha1.getFullYear()+1)
fecha1.setMonth(0)
fecha1.setDate(1)

while (fecha1<=fecha2) {
    if(fecha1.getDay() == 1){
        conteo++
    }
    fecha1.setFullYear(fecha1.getFullYear()+1)
}