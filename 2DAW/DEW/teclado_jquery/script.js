
const $texto = $("#texto");
const $cursor = $("#cursor");

const $tecladoNormal = $(".normal");
const $tecladoMayus = $(".mayus");
const $tecladoAltGr = $(".altgr");

const $contenedor = $(".contenedor");

var tipoTeclado = $tecladoNormal;

const espacio = "&nbsp;";
//$Borrar todos los teclados
$(".teclado").remove();

//Funcion para cambiar y renderizar los teclados
function cambiarTeclado(nuevoTeclado) {
  //Borrar el teclado que exista
  $contenedor.children().remove();
  //Añadir el nuevo teclado
  $contenedor.append(nuevoTeclado);
  addEventClick();
}

//Funcion para añadir los eventos.
function addEventClick() {
  $(".tecla").click(function () {
    let tecla = $(this).html();
    escribir(tecla);
    console.log("Key pressed:", tecla);
  });
}
//Evento para el funcionamiento del teclado
$(document).keydown(function (event) {
  event.preventDefault(); // Prevent the default behavior of the keydown event
  // event.key contains the value of the pressed key
  tecla = String(event.key);
  escribir(tecla);
  console.log("Key pressed:", tecla);
});

var posicionCursor = 0;
var bloqMayusActivo = false;

//Funcion que recive una string de tecla y la escribe en $texto
function escribir(tecla) {
  $cursor.remove();
  let texto1 = "";
  let texto2 = "";

  //Dividir el texto segun la posicion del cursor
  if ($texto.html().length > 0) {
    texto1 = $texto.html().slice(0, posicionCursor);
    texto2 = $texto.html().slice(posicionCursor);
  } else {
    texto1 = "";
    texto2 = "";
  }

  //Casos dependiendo de la tecla pulsada
  switch (tecla) {
    case "Shift":
      tipoTeclado = $tecladoMayus;
      console.log("Se cambio a shift");
      break;

    //En caso que se pulse el espacio
    case " ":
      console.log("Se pulso el espacio");
    case "Espacio":
      console.log("Se pulso el espacio");
      texto1 += espacio;
      posicionCursor = texto1.length;
      break;
    //En caso de que se pulsen las flechas
    
    case "🠔":
    case "ArrowLeft":
        //En caso de que se pulse la flecha izquierda y detectar si hay un espacio o un caracter especial
      if (texto1.length > 0) {
        if (texto1.substring(texto1.length - 6) == espacio) {
          console.log("hay un espacio");
          posicionCursor = posicionCursor - 6;
        } else if (/^&.{4};$/.test(texto1.slice(-6))) {
          posicionCursor = posicionCursor - 6;
        } else if (/^&.{3};$/.test(texto1.slice(-5))) {
            posicionCursor = posicionCursor - 5;
        } else if (/^&.{2};$/.test(texto1.slice(-4))) {
            posicionCursor = posicionCursor - 4;
        } else if (texto1.slice(-4) == "<br>") {
            posicionCursor = posicionCursor - 4;
        } else {
          posicionCursor = posicionCursor - 1;
        }
        texto1 = texto.innerHTML.slice(0, posicionCursor);
        texto2 = texto.innerHTML.slice(posicionCursor);
      }
      break;

    case "🠖":
    case "ArrowRight":
        //En caso de que se pulse la flecha derecha
        //Y detectar si hay un espacio o un caracter especial
      if (texto2.length > 0) {
        if (texto2.substring(0, 6) == espacio) {
          posicionCursor = posicionCursor + 6;
        } else if (/^&.{4};$/.test(texto2.slice(0, 6))) {
          posicionCursor = posicionCursor + 6;
        } else if (/^&.{3};$/.test(texto2.slice(0, 5))) {
            posicionCursor = posicionCursor + 5;
        } else if (/^&.{2};$/.test(texto2.slice(0, 4))) {
            posicionCursor = posicionCursor + 4;
        } else if (texto2.slice(0, 4) == "<br>") {
            posicionCursor = posicionCursor + 4;
        } else {
          posicionCursor = posicionCursor + 1;
        }
        texto1 = texto.innerHTML.slice(0, posicionCursor);
        texto2 = texto.innerHTML.slice(posicionCursor);
      }
      break;
    case "Retroceso":
    case "Backspace":
      if (texto1.length > 0) {
        //Detectar caracteres especiales para poder borrarlos
        if (texto1.substring(texto1.length - 6) == espacio) {
          console.log("hay un espacio");
          posicionCursor = posicionCursor - 6;
          texto1 = $texto.html().slice(0, posicionCursor);
          texto2 = $texto.html().slice(posicionCursor + 6);
        } else if (/^&.{4};$/.test(texto1.slice(-6))) {
          posicionCursor = posicionCursor - 6;
          texto1 = $texto.html().slice(0, posicionCursor);
          texto2 = $texto.html().slice(posicionCursor + 6);
        } else if (/^&.{3};$/.test(texto1.slice(-5))) {
          posicionCursor = posicionCursor - 5;
          texto1 = $texto.html().slice(0, posicionCursor);
          texto2 = $texto.html().slice(posicionCursor + 5);
        } else if (/^&.{2};$/.test(texto1.slice(-4))) {
          posicionCursor = posicionCursor - 4;
          texto1 = $texto.html().slice(0, posicionCursor);
          texto2 = $texto.html().slice(posicionCursor + 4);
        } else if (texto1.slice(-4) == "<br>") {
          posicionCursor = posicionCursor - 4;
          texto1 = $texto.html().slice(0, posicionCursor);
          texto2 = $texto.html().slice(posicionCursor + 4);
        } else {
        //En caso de que no sea un caracter especial
          posicionCursor = posicionCursor - 1;
          texto1 = $texto.html().slice(0, posicionCursor);
          texto2 = $texto.html().slice(posicionCursor + 1);
        }
      }
      break;

    case "&amp;":
    case "&":
      texto1 += "&amp;";
      posicionCursor = texto1.length;
      break;

    case "&lt;":
    case "<":
      texto1 += "&lt;";
      posicionCursor = texto1.length;
      break;
    case "&gt;":
    case ">":
      texto1 += "&gt;";
      posicionCursor = texto1.length;
      break;
    case "Enter":
    case "Intro":
      texto1 += "<br>";
      posicionCursor = texto1.length;
      break;
    case "Tab":
        texto1 += "&nbsp;&nbsp;&nbsp;&nbsp;";
        posicionCursor = texto1.length;
        break;
    
    case "CapsLock":
        if (bloqMayusActivo) {
            bloqMayusActivo = false;
            tipoTeclado = $tecladoNormal;
        } else {
            bloqMayusActivo = true;
            tipoTeclado = $tecladoMayus;
        }
        console.log("BloqMayús activado:", bloqMayusActivo);
        break;
    case "AltGraph":
    case "AltGr":
        tipoTeclado = $tecladoAltGr;
        break;
    default:
      if (
        (tecla.length == 1) &
        (tecla != " ") &
        ((tecla != "🠖") & (tecla != "🠔"))
      ) {
        texto1 += tipoTeclado == $tecladoMayus ? tecla.toUpperCase() : tecla;
        if (bloqMayusActivo) {
          tipoTeclado = $tecladoMayus;
        } else {
          tipoTeclado = $tecladoNormal;
        }
        posicionCursor = texto1.length;
      }
  }

  $texto.html(texto1);
  $texto.append($cursor);
  $cursor.after(texto2);
  console.log("Posicision cursor:", posicionCursor);
  gaming(tecla);  
  cambiarTeclado(tipoTeclado);
  if(bloqMayusActivo){
    $(".circulo").addClass("circulo-active");
  }else{
    $(".circulo").removeClass("circulo-active");
  
  }
}

//Inicializa el teclado
cambiarTeclado($tecladoNormal);


function gaming(tecla) {
    var tecla = tecla;
    if (tipoTeclado == $tecladoMayus && tecla.length == 1) {
        tecla = tecla.toUpperCase();
    }else if (tecla=="Backspace") {
        tecla = "Retroceso";
    }else if (tecla=="CapsLock") {
        tecla = "BloqMayús";
    }else if (tecla==" " || tecla=="Espacio") {
        tecla = "Espacio";
    }
    const $selectedTecla = $(".tecla").filter(function() {
        return $(this).hasClass(tecla);
    });
    $selectedTecla.toggleClass("tecla-active");
    setTimeout(function() {
        $selectedTecla.removeClass("tecla-active");
    }, 100);    
}



