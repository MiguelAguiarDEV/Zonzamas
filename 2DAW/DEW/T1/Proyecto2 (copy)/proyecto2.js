// Definir una sala de cine como un objeto
function SalaCine(filas, columnas, pelicula, precio) {
    this.filas = filas;
    this.columnas = columnas;
    this.pelicula = pelicula;
    this.precio = precio;
    this.asientos = [];

    // Inicializar la matriz de asientos como libres
    for (let i = 0; i < filas; i++) {
        this.asientos[i] = [];
        for (let j = 0; j < columnas; j++) {
            this.asientos[i][j] = true; // true significa libre
        }
    }

    // Método para reservar asientos
    this.reservar = function (fila, columna) {
        if (fila >= 0 && fila < this.filas && columna >= 0 && columna < this.columnas) {
            if (this.asientos[fila][columna]) {
                this.asientos[fila][columna] = false; // false significa ocupado
                return true; // Reserva exitosa
            } else {
                return false; // Asiento ocupado
            }
        } else {
            return false; // Fila o columna inválida
        }
    };

    // Método para liberar asientos
    this.liberar = function (fila, columna) {
        if (fila >= 0 && fila < this.filas && columna >= 0 && columna < this.columnas) {
            if (!this.asientos[fila][columna]) {
                this.asientos[fila][columna] = true; // true significa libre
                return true; // Liberación exitosa
            } else {
                return false; // Asiento ya está libre
            }
        } else {
            return false; // Fila o columna inválida
        }
    };
}

// Crear instancias de salas de cine
const sala1 = new SalaCine(5, 8, "Película 1", 10);
const sala2 = new SalaCine(6, 10, "Película 2", 12);
const sala3 = new SalaCine(4, 6, "Película 3", 8);

// Función para mostrar las butacas disponibles en una sala
function mostrarButacas() {
    const peliculaSelect = document.getElementById("peliculaSelect");
    const peliculaSeleccionada = peliculaSelect.value;

    let sala;

    if (peliculaSeleccionada === "pelicula1") {
        sala = sala1;
    } else if (peliculaSeleccionada === "pelicula2") {
        sala = sala2;
    } else if (peliculaSeleccionada === "pelicula3") {
        sala = sala3;
    }

    const tablaButacas = document.getElementById("tablaButacas");
    tablaButacas.innerHTML = "";

    for (let i = 0; i < sala.filas; i++) {
        const fila = document.createElement("tr");
        for (let j = 0; j < sala.columnas; j++) {
            const columna = document.createElement("td");
            columna.textContent = `${i + 1},${j + 1}`;

            if (sala.asientos[i][j]) {
                columna.className = "libre";
                columna.onclick = function () {
                    seleccionarButaca(i, j, sala);
                };
            } else {
                columna.className = "ocupado";
                columna.onclick = function () {
                    cancelarReserva(i, j, sala);
                };
            }

            fila.appendChild(columna);
        }
        tablaButacas.appendChild(fila);
    }

    document.getElementById("butacas").style.display = "block";
}


function cancelarReserva(fila, columna, sala) {
    if (fila >= 0 && fila < sala.filas && columna >= 0 && columna < sala.columnas) {
        if (!sala.asientos[fila][columna]) {
            sala.liberar(fila, columna);
            mostrarButacas();
        }
    }
}

// Función para seleccionar butacas
function seleccionarButaca(fila, columna, sala) {
    const seleccionButacas = document.getElementById("seleccionButacas");
    const valorActual = seleccionButacas.value;
    if (valorActual === "") {
        seleccionButacas.value = `${fila + 1},${columna + 1}`;
    } else {
        seleccionButacas.value += `,${fila + 1},${columna + 1}`;
    }

    const totalAPagar = document.getElementById("totalAPagar");
    totalAPagar.textContent = calcularPrecio(sala, seleccionButacas.value);
}

// Función para calcular el precio total
function calcularPrecio(sala, seleccion) {
    const asientosSeleccionados = seleccion.split(",");
    let total = 0;
    for (let i = 0; i < asientosSeleccionados.length; i += 2){
        total += sala.precio
    }
    return total;
}

// Función para reservar butacas
function reservarButacas() {
    const seleccionButacas = document.getElementById("seleccionButacas");
    const seleccion = seleccionButacas.value;

    const peliculaSelect = document.getElementById("peliculaSelect");
    const peliculaSeleccionada = peliculaSelect.value;

    let sala;

    if (peliculaSeleccionada === "pelicula1") {
        sala = sala1;
    } else if (peliculaSeleccionada === "pelicula2") {
        sala = sala2;
    } else if (peliculaSeleccionada === "pelicula3") {
        sala = sala3;
    }

    const asientosSeleccionados = seleccion.split(",");
    const asientosReservados = new Set();

    for (let i = 0; i < asientosSeleccionados.length; i += 2) {
        const fila = parseInt(asientosSeleccionados[i]) - 1;
        const columna = parseInt(asientosSeleccionados[i + 1]) - 1;

        if (fila >= 0 && fila < sala.filas && columna >= 0 && columna < sala.columnas) {
            const exito = sala.reservar(fila, columna);
            if (exito) {
                asientosReservados.add(`${fila},${columna}`);
            }
        }
    }

    if (asientosReservados.size > 0) {
        console.log("Butacas reservadas con éxito:", Array.from(asientosReservados).join(", "));
        const totalAPagar = document.getElementById("totalAPagar");
        totalAPagar.textContent = calcularPrecio(sala, Array.from(asientosReservados).join(","));
        mostrarButacas();
        seleccionButacas.value = "";
    } else {
        console.log("Ninguna butaca seleccionada o todas están ocupadas.");
        alert("Ninguna butaca seleccionada o todas están ocupadas.");
    }
}

// Función para cambiar la selección de butacas
function cambiarSeleccion() {
    const seleccionButacas = document.getElementById("seleccionButacas");
    seleccionButacas.value = "";
    const totalAPagar = document.getElementById("totalAPagar");
    totalAPagar.textContent = 0;
    mostrarButacas();
}
