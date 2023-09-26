    

    
    
//              [
//              ["✅","✅","✅","✅","✅","✅","✅","✅","✅","✅"],
//              ["✅","✅","✅","✅","✅","✅","✅","✅","✅","✅"],
//              ["✅","✅","✅","✅","✅","✅","✅","✅","✅","✅"],
//              ["✅","✅","✅","✅","✅","✅","✅","✅","✅","✅"],
//              ["✅","✅","✅","✅","✅","✅","✅","✅","✅","✅"],
//              ["✅","✅","✅","✅","✅","✅","✅","✅","✅","✅"],
//              ["✅","✅","✅","✅","✅","✅","✅","✅","✅","✅"],
//              ["✅","✅","✅","✅","✅","✅","✅","✅","✅","✅"],
//              ["✅","✅","✅","✅","✅","✅","✅","✅","✅","✅"],
//              ["✅","✅","✅","✅","✅","✅","✅","✅","✅","✅"],
//              ];



function crearMatriz(col,fil){
    var matriz = [];
    
    for (i = 0; i < col; i++) {
        matriz[i] = [];
        for (j = 0; j < fil; j++) {
            matriz[i][j] = i.toString()+"-"+ j.toString();
        }
    }
    return matriz
}


function dibujarMatriz(matriz) {

    // Crear un contenedor para la matriz
    var contMatriz = document.createElement("div");
    contMatriz.setAttribute("class", "cont-matriz");
    contMatriz.setAttribute("id", "matriz1");
  
    // Agregar el contenedor al cuerpo del documento
    document.body.appendChild(contMatriz);
  
    // Recorrer la matriz y crear elementos de columna y celdas de texto
    for (var i = 0; i < matriz.length; i++) {
      // Crear una columna para cada fila
      var col = document.createElement("div");
      col.setAttribute("class", "col-matriz");
  
      // Agregar la columna al contenedor de la matriz
      document.getElementById("matriz1").appendChild(col);
  
      for (var j = 0; j < matriz[i].length; j++) {
        // Crear un nodo de texto para cada elemento de la matriz
        var elementoDiv = document.createElement("div");

        elementoDiv.textContent = matriz[i][j];
  
        // Agregar el elemento div a la columna
        col.appendChild((elementoDiv).setAttribute("class", "celda-matriz","id",+i.toString()+j.toString()));
      }
    }
  }


var matriz = crearMatriz(10,10);

dibujarMatriz(matriz);