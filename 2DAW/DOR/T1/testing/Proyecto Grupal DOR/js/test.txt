
/* <h1>Ingresa un texto:</h1>
 <input type="text" id="inputText" oninput="mostrarTexto()">
 <div id="output"></div>*/

function mostrarTexto() {
    const inputElement = document.getElementById('numero');
    const outputElement = document.getElementById('p_numero');
    const text = inputElement.value;

    // Inserta un espacio cada 4 caracteres
    const textWithSpaces = text.replace(/(.{4})/g, "$1 ");

    outputElement.textContent = textWithSpaces;
}





//Mirate esto Miguel 
function validarInput(input) {
    // Expresión regular para verificar que solo hay números
    var regex = /^[0-9]+$/;
  
    // Obtener el valor del input
    var valor = input.value;
  
    if (regex.test(valor) && valor.length <= 16) {
      // El valor es válido
      return true;
    } else {
      // El valor no es válido
      return false;
    }
  }
  
  // Ejemplo de cómo usar la función
  var miInput = document.getElementById("miInput"); // Reemplaza "miInput" con el ID de tu input
  miInput.addEventListener("input", function() {
    if (!validarInput(this)) {
      alert("El valor debe ser numérico y no exceder los 16 caracteres.");
      this.value = this.value.slice(0, 16); // Truncar el valor si es demasiado largo
    }
  });
  