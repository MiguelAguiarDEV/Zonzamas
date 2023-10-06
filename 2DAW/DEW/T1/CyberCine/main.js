function numeroRandom (min,max)
{

    return Math.floor(Math.random() * (max - min + 1)) + min
}




var salas = [];



function crearSala(nombrePelicula, filas, columnas, precioButaca, portada) {
    let sala = new salaCine(nombrePelicula, filas, columnas, precioButaca, portada);
    salas.push(sala);

    console.log('Sala creada');
    console.log(salas);

    return sala; // Devuelve la sala creada
}




    
function mostrarCine()
    {
        const cine = document.getElementById('cine');
        cine.innerHTML =    
        `<div id="header" class="bg-black fg-white cyber-razor-bottom pt-0 pl-8 pb-4">
        <span class="cyberpunk-font-og f-x2-5 texto-cabecera">
            <span class="c">C</span>yber <span class="p">P</span>unk <span class="mini-cine">cine</span>
        </span>
        </div>
        <div id="main">

        </div>`;
        const main = document.getElementById('main');

        for (let i=0; i < salas.length; i++)
        {
            main.appendChild(salas[i].mostrarPortada());
        }


    }


    
    
    //Clase sala cine: 
    class salaCine
    {    
        constructor(nombrePelicula, filas, columnas, precioButaca,portada)
        {
            this.nombrePelicula = nombrePelicula;
            this.precioButaca = precioButaca;
            this.filas = filas;
            this.columnas = columnas;
            this.butacas = [];
            this.portada = document.createElement("img");
            this.boton = document.createElement("div");
            
            
            this.portada.setAttribute("src",portada)
            // Verificar si ya existen las butacas en el localStorage
            const butacasGuardadasJSON = localStorage.getItem(`${nombrePelicula}_butacas`);
            if (butacasGuardadasJSON) {
                // Si existen, recuperarlas del localStorage
                this.butacas = JSON.parse(butacasGuardadasJSON);
            } else {
                // Si no existen, crear nuevas butacas
                this.butacas = this.crearButacasAleatorias();
                // Guardar las butacas en el localStorage
                this.guardarButacasEnLocalStorage();
            }
        
            console.log('Sala de cine creada');
            }
        
        // Resto de la definición de la clase
    
        // Método para crear butacas aleatorias
        crearButacasAleatorias() {
        const butacas = [];
        for (let i = 0; i < this.filas; i++) {
            butacas[i] = [];
            for (let j = 0; j < this.columnas; j++) {
            butacas[i][j] = numeroRandom(0, 1); // 0 significa libre
            }
        }
        return butacas;
        }
    
        // Método para guardar todas las butacas en el localStorage
        guardarButacasEnLocalStorage() {
            localStorage.setItem(`${this.nombrePelicula}_butacas`, JSON.stringify(this.butacas));
        }
       
        mostrarButacas() {
            var self = this;
            const tablaButacas = document.getElementById("tabla-butacas");
            const contenedor = document.getElementsByClassName("contenedor-butacas");
            for (let i = 0; i < self.filas; i++)
            {
                const fila = document.createElement("tr");
                for (let j = 0; j < self.columnas; j++) {
                    const columna = document.createElement("td");
                    columna.innerHTML = `<img class='butaca' src='img/sofa.png'>`;
        
                    if (self.butacas[i][j] == 1) {
                        columna.className = "celda libre";
                        columna.onclick = function () {
                            columna.className = "celda seleccionada";
                            
                            self.butacas[i][j] = 2;
                            self.guardarButacasEnLocalStorage()
                            
                        };
                    } else {
                        columna.className = "celda ocupado";
                        // columna.onclick = function () {
                        //     columna.className = "celda libre";
                        //     self.liberar(i, j);
                        // };
                    }
        
                    fila.appendChild(columna);
                }
                tablaButacas.appendChild(fila);
               
            }
            
            var boton = document.createElement("div");
            boton.className = "boton-confirmar";
            boton.innerText = "Reservar";
            boton.onclick = function () {
                self.confirmarReserva();
            };
            contenedor[0].innerHTML += `<button class="cyber-button bg-red fg-white">
            Comfirmar reserva
            <span class="glitchtext">ASDDAUHSDaas</span>
            <span class="tag">R25</span>
        </button>`;
        }

        

        confirmarReserva () {
            var precio = 0;
            for (let i = 0; i < this.filas; i++)
            {
                for (let j = 0; j < this.columnas; j++)
                {
                    if (this.butacas[i][j] == 2) {
                        precio += this.precioButaca;
                    }
                }
            }
            
            var a = confirm(`Quiere reservar las butacas seleccionadas?\n
            Precio total: ` + precio+"$");
            
            for (let i = 0; i < this.filas; i++)
            {
                for (let j = 0; j < this.columnas; j++)
                {
                    if (this.butacas[i][j] == 2) {
                        if(a){
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
            this.guardarButacasEnLocalStorage()
            this.mostrarSala();
        }



        reservar (fila, columna) {
            
            if (this.butacas[fila][columna] == 2) {
                this.butacas[fila][columna] = 0;
                this.mostrarSala();
                
            } 
            this.guardarButacasEnLocalStorage()
        };
    
        // // Método para liberar asientos
        // liberar (fila, columna) {

        //     if (this.butacas[fila][columna] == 0) 
        //     {
        //         this.butacas[fila][columna] = 1; // true significa libre
        //     }
        // };


        mostrarPortada() 
        {
            var self = this;
            const portada = document.createElement("div");
            portada.className = "portada-inicio cyber-button cyber-tile-big fg-white bg-dark mr-4  vt-bot";
            portada.onclick = function ()
            {
                self.mostrarSala();
            };
            portada.innerHTML = `
            <img class="img-portda-inicio" src="${self.portada.getAttribute("src")}">
                <span class="code-block mt-2" id="code0" data-title="Nombre:">${this.nombrePelicula}</span>

                <span class="code-block mt-2" id="code0" data-title="Precio:">${this.precioButaca}$</span>
                <span class="glitchtext">AJHKSDJKHASJHDKLAJSLDKHASHKLJHKLJASDHJKt</span>
    

            `
            return portada;
        };

        mostrarSala() 
        {
            cine.innerHTML = ""
            cine.appendChild(crearBoton("img/flecha3.png","boton-inicio"));
            const sala = document.createElement("div");
            sala.className = "div-sala";

            sala.innerHTML = ` 
            <div class="cabecera-sala">
                <img class="portada-sala" src="${this.portada.getAttribute("src")}">
                <font class='nombre'>Nombre: ${this.nombrePelicula}</font>
            </div>
            <div class = "contenedor-butacas">
                <table id = "tabla-butacas"></table>

            </div>
            `

            
            cine.appendChild(sala);
            this.mostrarButacas()
        };   
};


function crearBoton(ruta,clase){
    const boton = document.createElement("div");
    boton.className = clase;
    let imgAtras = document.createElement("img");
    imgAtras.setAttribute("src",ruta);
    
    boton.onclick = function ()
    {
        mostrarCine()
    }
    boton.appendChild(imgAtras)
    return boton
}






    const sala1 = crearSala('Megalodón', 5, 5, 10, "./img/megalodon.jpg");
    const sala2 = crearSala('La Monja', 15, 10, 5, "./img/lamonja.jpg");
    const sala3 = crearSala('Time', 10, 10, 5, "./img/time.jpg");
    const sala4 = crearSala('El Exorcista', 8, 8, 8, "./img/exorcista.jpg");
    const sala5 = crearSala('Titanic', 12, 12, 6, "./img/titanic.jpg");


mostrarCine() 