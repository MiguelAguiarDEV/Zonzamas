// Obtener el elemento de la lista desordenada con el ID "myUL"
const myUL = document.getElementById("myUL");

// Estructura de datos JSON que representa la jerarquía de carpetas y archivos
let jsonData = {
    "/": {
        "tipo": "directorio",
        toggled: false,
        "contenido": {
            "documentos": {
                "tipo": "directorio",
                toggled: false,
                "contenido": {
                    "resume.txt": {
                        "tipo": "archivo"
                    },
                    "report.doc": {
                        "tipo": "archivo"
                    }
                }
            },
            "imágenes": {
                "tipo": "directorio",
                toggled: false,
                "contenido": {
                    "vacaciones": {
                        "tipo": "directorio",
                        toggled: false,
                        "contenido": {
                            "playa.jpg": {
                                "tipo": "archivo"
                            },
                            "montañas.jpg": {
                                "tipo": "archivo"
                            }
                        }
                    }
                }
            }
        }
    }
};

// Función para buscar un elemento por su nombre en la estructura JSON
function buscarElementoPorNombre(node, nombre) {
    for (const key in node) {
        if (key === nombre) {
            return node[key];
        } else if (node[key].tipo === "directorio" && node[key].contenido) {
            const resultado = buscarElementoPorNombre(node[key].contenido, nombre);
            if (resultado) {
                return resultado;
            }
        }
    }
    return null; // Elemento no encontrado
}

// Función para crear la estructura de árbol HTML
function createTreeHTML(node, parentElement) {
    // Limpiar el contenido del elemento padre
    parentElement.innerHTML = "";
    for (const name in node) {
        const item = node[name];
        const li = document.createElement("li");
        const span = document.createElement("span");
        const botonCrear = document.createElement("button");
        const botonBorrar = document.createElement("button");

        // Establecer la clase del elemento span según el tipo y el estado de 'toggled'
        span.className = (item.tipo === "directorio" ? "box " + (item.toggled ? "check-box" : "") : "");
        span.textContent = name;
        botonCrear.className = "crearCarpeta";
        botonCrear.innerText = "+";
        botonBorrar.className = "borrar";
        botonBorrar.innerText = "X";

        // Evento de clic para el botón de borrar
        botonBorrar.onclick = function () {
            if (item.tipo === "archivo") {
                delete node[this.parentElement.firstChild.innerText];
                createTreeHTML(jsonData, myUL);
                console.log("Borrado: " + this.parentElement.firstChild.innerText);
                input.dispatchEvent(keyupEvent);
            } else {
                if (Object.keys(item.contenido).length === 0) {
                    delete node[this.parentElement.firstChild.innerText];
                    createTreeHTML(jsonData, myUL);
                    console.log("Borrado: " + this.parentElement.firstChild.innerText);
                    input.dispatchEvent(keyupEvent);
                } else {
                    alert("No se puede borrar una carpeta con elementos dentro");
                    input.dispatchEvent(keyupEvent);
                }
            }
        }

        li.appendChild(span);
        if (li.firstChild.innerText !== "/") {
            li.appendChild(botonBorrar);
        }
        if (item.tipo === "directorio" && item.contenido) {
            const ul = document.createElement("ul");
            li.appendChild(botonCrear);
            ul.className = "hijo";
            createTreeHTML(item.contenido, ul);
            li.appendChild(ul);
        }
        parentElement.appendChild(li);
    }
    anadirEventoCrearCarpeta();
    anadirToggler();
}

// Función para agregar eventos al hacer clic en los elementos del árbol
function anadirToggler() {
    var toggler = document.getElementsByClassName("box");
    var i;

    for (i = 0; i < toggler.length; i++) {
        if (toggler[i].classList.contains("check-box")) {
            toggler[i].parentElement.querySelector(".hijo").classList.add("active");
        }

        toggler[i].addEventListener("click", function () {
            if (this.parentElement.querySelector(".hijo")) {
                this.parentElement.querySelector(".hijo").classList.toggle("active");
                this.classList.toggle("check-box");

                // Actualizar el estado 'toggled' en la estructura JSON
                let padre = buscarElementoPorNombre(jsonData, this.parentElement.firstChild.innerText);
                padre.toggled = "true";
                console.log("Toggler clicado: " + this.parentElement.firstChild.innerText);
            }
        });
    }
}

// Función para agregar eventos al hacer clic en el botón de crear carpeta
function anadirEventoCrearCarpeta() {
    const botonCrearesCrearCarpeta = document.querySelectorAll(".crearCarpeta");

    botonCrearesCrearCarpeta.forEach(botonCrear => {
        botonCrear.addEventListener("click", function () {
            const nombre = document.getElementById("nombre").value;

            if (nombre) {
                const padreHTML = this.parentElement.firstChild.innerText;
                const padreJSON = buscarElementoPorNombre(jsonData, padreHTML);
                if (Object.keys(padreJSON.contenido).includes(nombre)) {
                    alert("Ya existe un elemento con ese nombre");
                } else {
                    if (nombre.includes(".")) {
                        padreJSON.contenido[nombre] = {
                            "tipo": "archivo",

                        }
                    } else {
                        padreJSON.contenido[nombre] = {
                            "tipo": "directorio",
                            "contenido": {},
                        }
                    }
                }

                console.log("Carpeta creada: " + nombre);
                console.log(jsonData);
                createTreeHTML(jsonData, myUL);
                input.value = "";
                input.dispatchEvent(keyupEvent);
            }
        });
    });
}
const input = document.getElementById('buscar');
// Inicialización del árbol y eventos
createTreeHTML(jsonData, myUL);

const keyupEvent = new Event("keyup");

input.addEventListener("keyup", function () {
    if (this.value !== "") {
        let elementos = [];
        let spans = document.querySelectorAll("span");
        spans.forEach(span => {
            if (span.innerText.includes(this.value)) {
                elementos.push(span.parentElement);
            } else {
                jsonData["/"].toggled = true;
                createTreeHTML(jsonData, myUL);
            }
        });
        if (elementos.length > 0) {
            myUL.innerHTML = "";

            elementos.forEach(elemento => {
                elemento.firstChild.classList = "box";
                if (elemento.lastChild.classList.contains("hijo")) {
                    elemento.lastChild.classList = "hijo";
                }
                myUL.appendChild(elemento);
            });
        }
    } else {
        createTreeHTML(jsonData, myUL);
    }
});


// Función para obtener nombres de archivos y carpetas
function obtenerNombresDeArchivosYCarpetas() {
    let array = [];
    let spans = document.querySelectorAll("span");
    spans.forEach(span => {
        array.push(span.textContent);
    });
    return array;
}


function autocompletar() {
    var coincidencias = [];
    obtenerNombresDeArchivosYCarpetas().forEach(element => {
        if (element.includes(input.value)) {
            coincidencias.push(element);
        }
    });
    console.log("Coincidencias: " + coincidencias);
    if (coincidencias.length == 1) {
        input.value = coincidencias[0];
        console.log("Autocompletado: " + coincidencias[0]);
    }
    return true;
}

input.addEventListener('keydown', function (e) {
    if (e.key === "Tab" && autocompletar()) {
        e.preventDefault();
    }
}, false);

// Establecer el enfoque en el campo de búsqueda al cargar la página
input.focus();
