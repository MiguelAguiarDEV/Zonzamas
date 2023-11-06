const myUL = document.getElementById("myUL");
let jsonData = {
    "/": {
        "tipo": "directorio",
		toggled: true,
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

function createTreeHTML(node, parentElement) {
	parentElement.innerHTML = "";
    for (const name in node) {
        const item = node[name];
        const li = document.createElement("li");
        const span = document.createElement("span");
		const botonCrear = document.createElement("button");
		const botonBorrar = document.createElement("button");
        span.className = (item.tipo === "directorio" ? "box "+(item.toggled ? "check-box" : "") : "");
        span.textContent = name;
		botonCrear.className = "crearCarpeta";
		botonCrear.innerText = "+";
		botonBorrar.className = "borrar";
		botonBorrar.innerText = "-";
		botonBorrar.onclick = function(){
			delete node[this.parentElement.firstChild.innerText];
			createTreeHTML(jsonData, myUL);
		}
        li.appendChild(span);
        if (item.tipo === "directorio" && item.contenido) {
			
			li.appendChild(botonCrear);
			if (li.firstChild.innerText !== "/") {
				li.appendChild(botonBorrar);
			}
			
			const ul = document.createElement("ul");
            ul.className = "hijo";
            createTreeHTML(item.contenido, ul);
            li.appendChild(ul);
        }
        parentElement.appendChild(li);
    }
	anadirEventoCrearCarpeta();
	anadirToggler();
}



function anadirToggler() {
	
	var toggler = document.getElementsByClassName("box");
	var i;

	for (i = 0; i < toggler.length; i++) {
		if (toggler[i].classList.contains("check-box")) {
			toggler[i].parentElement.querySelector(".hijo").classList.add("active");
		}
			
		
		toggler[i].addEventListener("click", function() {
			if (this.parentElement.querySelector(".hijo")) {
				this.parentElement.querySelector(".hijo").classList.toggle("active");
				this.classList.toggle("check-box");

				let padre = buscarElementoPorNombre(jsonData, this.parentElement.firstChild.innerText);
				padre.toggled = "true";
			}
		});
	}
}



function anadirEventoCrearCarpeta() {
    const botonCrearesCrearCarpeta = document.querySelectorAll(".crearCarpeta");

    botonCrearesCrearCarpeta.forEach(botonCrear => {
        botonCrear.addEventListener("click", function () {
            const nombre = document.getElementById("nombre").value;

			if (nombre) {

				const padreHTML = this.parentElement.firstChild.innerText;

				const padreJSON = buscarElementoPorNombre(jsonData, padreHTML)

				if(nombre.includes(".")){
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
			console.log(jsonData);
			createTreeHTML(jsonData, myUL);
		});
    });
}

createTreeHTML(jsonData, myUL);

document.getElementById("buscar").addEventListener("keyup", function () {
	if (this.value !== "") {
		let elementos = [];
		document.querySelectorAll("span").forEach(span => {
			if(span.innerText === this.value){
				elementos.push(span.parentElement);
			}
		});
		if (elementos.length > 0) {
			myUL.innerHTML = "";
			elementos.forEach(elemento => {
				myUL.appendChild(elemento);
			});
		} 
		
	} else {
		createTreeHTML(jsonData, myUL);
	}
})


function obtenerNombresDeArchivosYCarpetas(node, listaNombres) {
	for (const nombre in node) {
        if (nombre !== "tipo" && nombre !== "contenido") {
            listaNombres.push(nombre);
        }
        if (node[nombre].tipo === "directorio" && node[nombre].contenido) {
            obtenerNombresDeArchivosYCarpetas(node[nombre].contenido, listaNombres);
        }
    }
}

const listaNombres = [];
obtenerNombresDeArchivosYCarpetas(jsonData, listaNombres);

console.log(listaNombres);



function autocompletar(input, datos) {
    if (input.value.length == input.selectionStart && input.value.length == input.selectionEnd) {
        var candidatos = [];
        for (var i = 0; i < datos.length; i++) {
            if (datos[i].indexOf(input.value) == 0 && datos[i].length > input.value.length)
                candidatos.push(datos[i]);
        }

        if (candidatos.length > 0) {
            if (candidatos.length == 1) input.value = candidatos[0];
            else input.value = masLargoEnComun(candidatos, input.value.length);
            return true;
        }
    }
    return false;
}

function masLargoEnComun(candidatos, indice) {
    var i, ch, memo;
    do {
        memo = null;
        for (i = 0; i < candidatos.length; i++) {
            ch = candidatos[i].charAt(indice);
            if (!ch) break;
            if (!memo) memo = ch;
            else if (ch != memo) break;
        }
    } while (i == candidatos.length && ++indice);

    return candidatos[0].slice(0, indice);
}

var input = document.getElementById('buscar');

input.addEventListener('keydown', function (e) {
    if (e.keyCode === 9 && autocompletar(this, listaNombres)) {
        e.preventDefault();
    }
}, false);

input.focus();
