let arrayResultados = [];
for (let i = 0; i < 10000; i++) {
    let resultadoDado1 = Math.floor(Math.random() * 6) + 1;
    let resultadoDado2 = Math.floor(Math.random() * 6) + 1;
    arrayResultados.push(resultadoDado1+resultadoDado2);
}

let resultados = [];

for (let resultado of arrayResultados){
    if (resultados.indexOf(resultado) == -1){
        resultados.unshift(resultado);
    }
}

resultados = resultados.sort(function(a, b) {return a - b;});
console.log(resultados);

let frecuencias = new Array(11).fill(0);

for (let resultado of arrayResultados){
    frecuencias[resultados.indexOf(resultado)] += 1
}

let prueba = 0
frecuencias.forEach( function (numResultado) {
    frecuencias[frecuencias.indexOf(numResultado)] = numResultado / 10000 * 100
    prueba += numResultado / 10000 * 100
    })


for (let resultado of resultados){
    console.log("Resultado: ",resultado," Frecuencia: ",frecuencias[resultados.indexOf(resultado)].toFixed(2),"%")
}
console.log("Suma de las frecuencias = ",prueba.toFixed())

const dice = document.getElementById("dice");

function rollDice() {
  // Generate a random number between 1 and 6
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  
  // Rotate the dice to show the corresponding number
  switch (randomNumber) {
    case 1:
      dice.style.transform = "rotateX(-720deg) rotateY(720deg)";
      break;
    case 2:
      dice.style.transform = "rotateX(-630deg) rotateY(630deg)";
      break;
    case 3:
      dice.style.transform = "rotateX(-540deg) rotateY(540deg)";
      break;
    case 4:
      dice.style.transform = "rotateX(-450deg) rotateY(450deg)";
      break;
    case 5:
      dice.style.transform = "rotateX(-360deg) rotateY(360deg)";
      break;
    case 6:
      dice.style.transform = "rotateX(-270deg) rotateY(270deg)";
      break;
  }
}
