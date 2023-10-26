


//Recoje todos los elementos inputs
const inputNombre = document.getElementById('nombreFormulario');
const inputNumero = document.getElementById('numeroFormulario');
const inputFecha = document.getElementById('fechaFormulario');
const inputCvc = document.getElementById('cvcFormulario');

//Recoje todos los elementos de la tarjeta
const tarjetaNombre = document.getElementById('nombreTarjeta');
const tarjetaNumero = document.getElementById('numeroTarjeta');
const tarjetaFecha = document.getElementById('fechaTarjeta');
const tarjetaCvc = document.getElementById('cvcTarjeta');



//Mascara nombre
const maskName = {
  mask:'',
}


//Mascara numero de la tarjeta
const maskCardNumber = {
  mask:'0000 0000 0000 0000',
};
//Mascara de fecha
const maskDate = {
    mask: Date,
    pattern: "m{/}Y0",
    blocks: {
      Y: {
        mask: IMask.MaskedRange,
        placeholderChar: "Y",
        from: 24,
        to: 99,
        maxLength: 2,
      },
    },
  };
//Mascara de cvc
const maskCvc = {
  mask: "000",
};

IMask(inputFecha, maskDate);
IMask(inputNumero, maskCardNumber);
IMask(inputCvc, maskCvc);

function anhadirEventos (){
    let inputs = [inputNombre,inputNumero,inputFecha,inputCvc];
    let valores = [tarjetaNombre,tarjetaNumero,tarjetaFecha,tarjetaCvc];

    for (let i = 0; i < inputs.length; i++) {  
        inputs[i].addEventListener("keyup", ()=> {
            valores[i].innerHTML = inputs[i].value;
        });
    };
};
anhadirEventos();
