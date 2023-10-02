function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const cineContainer = document.getElementById('cine-container');
cineContainer.innerHTML =
    `<h1>Cine Atlántida</h1>
    <p>Seleccione la película que desea reservar</p>
    <div id="peliculas-container"></div>`;

const salas = [];

class SalaCine {
    constructor(nombrePelicula, filas, columnas, precioButaca, portada) {
        this.nombrePelicula = nombrePelicula;
        this.precioButaca = precioButaca;
        this.filas = filas;
        this.columnas = columnas;
        this.butacas = [];
        this.portada = document.createElement("img");
        this.boton = document.createElement("div");

        this.portada.setAttribute("src", portada);

        for (let i = 0; i < filas; i++) {
            this.butacas[i] = [];
            for (let j = 0; j < columnas; j++) {
                this.butacas[i][j] = generarNumeroAleatorio(0, 1); // 0 significa libre
            }
        }

        console.log('Sala de cine creada');
    }

    mostrarButacas() {
        const tablaButacas = document.getElementById("tabla-butacas");
        const contenedor = document.getElementsByClassName("contenedor-butacas");

        for (let i = 0; i < this.filas; i++) {
            const fila = document.createElement("tr");

            for (let j = 0; j < this.columnas; j++) {
                const columna = document.createElement("td");
                columna.innerHTML = "<img class='butaca' src='img/sofa.png'>";

                if (this.butacas[i][j] == 1) {
                    columna.className = "celda libre";
                    columna.onclick = function () {
                        columna.className = "celda seleccionada";
                        this.butacas[i][j] = 2;
                    }.bind(this);
                } else {
                    columna.className = "celda ocupado";
                }

                fila.appendChild(columna);
            }

            tablaButacas.appendChild(fila);
        }

        const boton = document.createElement("div");
        boton.className = "boton-confirmar";
        boton.innerText = "Reservar";
        boton.onclick = this.confirmarReserva.bind(this);
        contenedor[0].appendChild(boton);
    }

    confirmarReserva() {
        let precio = 0;

        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                if (this.butacas[i][j] == 2) {
                    precio += this.precioButaca;
                }
            }
        }

        const confirmacion = confirm(`¿Quiere reservar las butacas seleccionadas?\nPrecio total: ${precio}$`);

        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                if (this.butacas[i][j] == 2) {
                    if (confirmacion) {
                        this.reservar(i, j);
                        console.log("Reservado");
                    } else {
                        this.butacas[i][j] = 1;
                    }
                } else {
                    console.log("No reservado");
                }
            }
        }
        this.mostrarSala();
    }

    reservar(fila, columna) {
        if (this.butacas[fila][columna] == 2) {
            this.butacas[fila][columna] = 0;
            this.mostrarSala();
        }
    };

    mostrarPortada() {
        this.portada.className = "portada";
        this.portada.onclick = this.mostrarSala.bind(this);
        return this.portada;
    };

    mostrarSala() {
        cineContainer.innerHTML = "";
        cineContainer.appendChild(crearBoton("img/flecha-izquierda.png", "boton-inicio"));
        const sala = document.createElement("div");
        sala.className = "div-sala";

        sala.innerHTML = `
        <div class="cabecera">
            <img class="portada-sala" src="${this.portada.getAttribute("src")}">
            <font class='nombre'><font class="pelicula">${this.nombrePelicula}</font></font>
        </div>
        <div class="contenedor-butacas">
            <table id="tabla-butacas"></table>
        </div>
        `;

        cineContainer.appendChild(sala);
        this.mostrarButacas();
    };
}

function crearBoton(ruta, clase) {
    const boton = document.createElement("div");
    boton.className = clase;
    let imgAtras = document.createElement("img");
    imgAtras.setAttribute("src", ruta);

    boton.onclick = mostrarCine;
    boton.appendChild(imgAtras);
    return boton;
}

function mostrarCine() {
    cineContainer.innerHTML = `<h1>Cine Atlántida</h1>
    <p>Seleccione la película que desea reservar</p>
    <div id="peliculas-container"></div>`;

    const contenedorPeliculas = document.getElementById('peliculas-container');

    for (let i = 0; i < salas.length; i++) {
        contenedorPeliculas.appendChild(salas[i].mostrarPortada());
    }
}

const sala1 = new SalaCine('Megalodón', 5, 5, 10, "img/megalodon.jpg");
const sala2 = new SalaCine('La Monja', 15, 10, 5, "img/lamonja.jpg");
const sala3 = new SalaCine('Time', 10, 10, 5, "img/time.jpg");
const sala4 = new SalaCine('El Exorcista', 8, 8, 8, "img/exorcista.jpg");
const sala5 = new SalaCine('Titanic', 12, 12, 6, "img/titanic.jpg");

salas.push(sala1, sala2, sala3, sala4, sala5);
mostrarCine();
