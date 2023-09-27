
function crearMatriz(col,fil){
    var matriz = [];
    
    for (i = 0; i < col; i++) {
        matriz[i] = [];
        for (j = 0; j < fil; j++) {
            matriz[i][j] = 0;
        }
    }
    return matriz
}


class Cine {
	constructor() {
		this.salas = [];
		const cine = document.createElement("div");

		cine.setAttribute("id", "cine");
		cine.setAttribute("class", "contenedor cine");

		document.body.appendChild(cine);
	}	

	crearSala(numColumna, numFila,nomPelicula,precEntrada) {
		var nombre = this.salas.length
		const nuevaSala = new salaCine(nombre,numColumna, numFila,nomPelicula,precEntrada);
		this.salas.push(nuevaSala);
	}
	mostrarSalas(){
		for (var i = 0; i < this.salas.length; i++) {
			this.cine.appendChild(this.salas[i].contenedor);
        }
	}
}

  

class salaCine {
	
  	constructor(nombreSala,numColumna,numFila,nomPelicula,precEntrada){
		this.nombreSala = nombreSala;
		this.nomPelicula = nomPelicula;
		this.precEntrada = precEntrada;
		this.asientos = crearMatriz(numColumna,numFila);  


		// Crear un contenedor para la sala
		const contenedor = document.createElement("div");

		// Establecer los atributos id y class
		contenedor.setAttribute("id", this.nombreSala);
		contenedor.setAttribute("class", "contenedor contenedor-sala");		
		contenedor.setAttribute("onclick", "salaCine.verAsientos()");
		document.getElementById("cine").appendChild(contenedor);
		contenedor.textContent = this.nomPelicula;
	}

	verAsientos(){
		console.log(this.asientos);
	}
	
	
	
}







Cine = new Cine()

sala1 = Cine.crearSala(10,10, "Avatar", 6.00);

sala2 = Cine.crearSala(20,10, "Ninja",6.00);

console.log(Cine.salas)






function main(){
	Cine.mostrarSalas();
}