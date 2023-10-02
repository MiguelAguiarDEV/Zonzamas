function numeroRandom (min,max)
{

    return Math.floor(Math.random() * (max - min + 1)) + min
}


const cine = document.getElementById('cine');
cine.innerHTML =    
`<h1>Cine Atlantida</h1>

<p>Seleccione la pelicula que quiera reservar</p>
<div id="contenedorPeliculas">

</div>`;


var salas = [];



function crearSala(nombrePelicula, filas, columnas, precioButaca,portada)
    {
        let sala = new salaCine(nombrePelicula, filas, columnas, precioButaca,portada);
        salas.push(sala);

        console.log('Sala creada');
        console.log(salas);
        
        
        
    }



    
function mostrarCine()
    {
        const cine = document.getElementById('cine');
        cine.innerHTML =    
        `<h1>Cine Atlantida</h1>

        <p>Seleccione la pelicula que quiera reservar</p>
        <div id="contenedorPeliculas">

        </div>`;
        const contenedorPeliculas = document.getElementById('contenedorPeliculas');

        for (let i=0; i < salas.length; i++)
        {
            contenedorPeliculas.appendChild(salas[i].mostrarPortada());
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
            for (let i = 0; i < filas; i++)
            {
                this.butacas[i] = [];
                
                for (let j = 0; j < columnas; j++)
                {
                    this.butacas[i][j] = numeroRandom(0, 1); // 0 significa libre
                }
            }
            
            console.log('Sala de cine creada');
            
        
        
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
                    columna.innerHTML = "<img class='butaca' src='img/sofa.png'>";
        
                    if (self.butacas[i][j] == 1) {
                        columna.className = "celda libre";
                        columna.onclick = function () {
                            columna.className = "celda seleccionada";
                            
                            self.butacas[i][j] = 2;
                            
                            
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
            contenedor[0].appendChild(boton);
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
            this.mostrarSala();
        }



        reservar (fila, columna) {
            
            if (this.butacas[fila][columna] == 2) {
                this.butacas[fila][columna] = 0;
                this.mostrarSala();
                
            } 
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
            this.portada.className = "portada";
            this.portada.onclick = function ()
            {
                self.mostrarSala();
            };
            return this.portada;
        };

        mostrarSala() 
        {
            cine.innerHTML = ""
            cine.appendChild(crearBoton("img/flecha-izquierda.png","boton-inicio"));
            const sala = document.createElement("div");
            sala.className = "div-sala";

            sala.innerHTML = `
            <div class="cabecera">
                <img class="portada-sala" src="${this.portada.getAttribute("src")}">
                <font class='nombre'>nombre:<font class="pelicula">${this.nombrePelicula}</font></font>
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






const sala1 =  crearSala('Megalodón', 5, 5, 10, "img/megalodon.jpg");
const sala2 =  crearSala('La Monja', 15, 10, 5, "img/lamonja.jpg");
const sala3 =  crearSala('Time', 10, 10, 5, "img/time.jpg");
const sala4 =  crearSala('El Exorcista', 8, 8, 8, "img/exorcista.jpg");
const sala5 =  crearSala('Titanic', 12, 12, 6, "img/titanic.jpg");

mostrarCine() 