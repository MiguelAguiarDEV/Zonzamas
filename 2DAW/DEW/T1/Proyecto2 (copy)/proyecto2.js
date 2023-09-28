//Importar funciones.
import { numeroRandom } from './functions/numeroRandom.js';


//Importar funciones.



//Creo una lista para guardar las salas de cine.




class Cine 
{   
    constructor()
    {
        const cine = document.getElementById('cine');
        cine.innerHTML =    
        `<h1>Cine Atlantida</h1>
        
        <div id="contenedorPeliculas">
            <p>Seleccione la pelicula que quiera reservar</p>

        </div>`;
        
    }
    static salas = [];
    static crearSala(nombrePelicula, filas, columnas, precioButaca,portada)
    {
        let sala = new salaCine(nombrePelicula, filas, columnas, precioButaca,portada);
        Cine.salas.push(sala);

        console.log('Sala creada');
        console.log(Cine.salas);
        
        
        
    }

    
    static mostrarSalas()
    {
        const contenedorPeliculas = document.getElementById('contenedorPeliculas');



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
        this.portada = portada;
        for (let i = 0; i < filas; i++)
        {
            this.butacas[i] = [];

            for (let j = 0; j < columnas; j++)
            {
                this.butacas[i][j] = numeroRandom(0, 1); // 0 significa libre
            }
        }

        console.log('Sala de cine creada');
        

        function mostrarSala()
        {
            const contenedorPeliculas = document.getElementById('contenedorPeliculas');

            contenedorPeliculas.appendChild(this.portada);
            
        }
        
    }
}



const sala1 = Cine.crearSala('Megalodon',5,5,10,"<img src='img/megalodon.jpg'>")
const sala2 = Cine.crearSala('La Monja',10,5,5,"<img src='img/monja.jpg'>")
