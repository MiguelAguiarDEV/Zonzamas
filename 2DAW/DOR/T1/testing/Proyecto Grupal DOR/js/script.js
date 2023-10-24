const inputNumeroTarjeta = document.getElementById('numero');
const textoTarjeta = document.getElementById('p_numero');



function soloNumeros() {
    
}

inputNumeroTarjeta.addEventListener("input", soloNumeros)
/*function mostrarTexto() {
    const inputElement = document.getElementById('numero');
    const outputElement = document.getElementById('p_numero');
    const text = inputElement.value;

    // Asegura que el texto tenga un máximo de 19 caracteres
    if (text.length < 19) {
        // text = text.slice(0, 16);
        inputElement.value = text;
    }else {
        text = text.slice(0,19)
        inputElement.value = text;
    }
    // Inserta un espacio cada 4 caracteres
    const textWithSpaces = text.replace(/(.{4})/g, "$1 ");

    outputElement.textContent = textWithSpaces;
}*/





function validarInput(input) {
    // Expresión regular para verificar que solo hay números
    var tumama = input.value;
    var regex = /^[0-9]+$/;
  
    // Obtener el valor del input
    var valor = input.value;
  
    if (regex.test(valor) && valor.length <= 16) {
      // El valor es válido
      return true;
    } else {
      // El valor no es válido
      input.value = input.value.slice(0, input.value.length-1)
      return true;
    }
  }
  
  // Ejemplo de cómo usar la función
  var miInput = document.getElementById("numero"); // Reemplaza "miInput" con el ID de tu input
  miInput.addEventListener("input", function() {
    if (!validarInput(this)) {
      this.value = this.value.slice(0, 16); // Truncar el valor si es demasiado largo
    }
  });
  