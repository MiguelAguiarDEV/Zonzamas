//Importar funciones.
import { numeroRandom } from './functions/numeroRandom.js';


//Importar funciones.



//Creo una lista para guardar las salas de cine.





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
{{[^]}}


    
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
        mostrarPortada() {
            var self = this; // Almacenamos una referencia al objeto actual
            this.portada.className = "portada";
            this.portada.onclick = function () {
                self.mostrarSala(); // Usamos "self" en lugar de "this" para acceder a mostrarSala()
            };
            return this.portada;
        };

        mostrarSala() {
            cine.innerHTML = ""
            cine.appendChild(crearBoton())

            this.portada.className = "portada-sala";
            cine.appendChild(this.portada)
            

            sala = 
            
        };
        
}


function crearBoton(){
    const boton = document.createElement("div");
    boton.className = "boton-inicio"
    let imgAtras = document.createElement("img");
    imgAtras.setAttribute("src","img/flecha-izquierda.png");
    
    boton.onclick = function ()
    {
        mostrarCine()
    }
    boton.appendChild(imgAtras)
    return boton
}





const sala1 = crearSala('Megalodon',5,5,10,"img/megalodon.jpg")
const sala2 = crearSala('La Monja',15,10,5,"img/lamonja.jpg")
const sala3 = crearSala('La Monja',10,10,5,"img/time.jpg")
const sala4 = crearSala('La Monja',10,10,5,"img/time.jpg")
const sala5 = crearSala('La Monja',10,10,5,"img/time.jpg")

mostrarCine() 