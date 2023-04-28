let inputField = document.getElementById("input-field")
let operacion = "";
let valor1 = null;
function addToInput(value) {
    inputField.value += value;
}

function calculate() {
    let resultado;
    

    switch (operacion) {
        case "+":
            resultado = Number(valor1) + Number(inputField.value);
            break;
        case "-":
            resultado = Number(valor1) - Number(inputField.value);
            break;
        case "*":
            resultado = Number(valor1) * Number(inputField.value);
            break;
        case "/":
            resultado = Number(valor1) / Number(inputField.value);
            break;
        case "%":
            resultado = Number(valor1) % Number(inputField.value);
            break;
        default:
            resultado = "";
            break;
    }

    inputField.value = resultado;
    valor1 = resultado;
    operacion = "";
}

function reset(){
    inputField.value = ""
    operacion = "";
    valor1 = null;
    valor2 = null;
}


function declareOperation(value) {
    operacion = value;
    valor1 = inputField.value;
    inputField.value = ""
    console.log(operacion)
}