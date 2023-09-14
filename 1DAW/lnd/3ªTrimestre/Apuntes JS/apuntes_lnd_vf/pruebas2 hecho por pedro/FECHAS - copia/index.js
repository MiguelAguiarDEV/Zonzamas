
function calcularEdad() {

    dato = document.getElementById('fecha').value; //obtiene el valor del id fecha y se lo metemos a dato

    fechaNacimiento = new Date(dato); //hacemos una variable fechanacimiento con un objeto tipo date que contenga el dato como fecha

    auxiliar = Date.now(); //sacamos el día de hoy
    fechaActual = new Date(auxiliar); //creamos un objeto date con el día de hoy

    resultado =  fechaActual.getFullYear() - fechaNacimiento.getFullYear(); //hacemos la resta pero con getFullYear sacamos los años de diferencia
    
    document.getElementById('resultado').innerHTML += resultado; //lo metemos dentro del id resultado
    
    return resultado;

}

function tiempoHastaNavidad() {

    meses_con_31 = [0,2,4,6,7,9,11]

    auxiliar = Date.now();
    fechaActual = new Date(auxiliar);

    navidad = new Date('2023-12-25');

    mesesHastaNavidad = navidad.getMonth() - fechaActual.getMonth();
    
    if (meses_con_31.includes(fechaActual.getMonth())) {
        resultado = mesesHastaNavidad*31 + (31 - fechaActual.getDate());
    } 
    else {
        resultado = mesesHastaNavidad*31 + (30 - fechaActual.getDate());
    }

    document.getElementById('resultado2').innerHTML += resultado;
    return resultado
}

function mostrarFecha() {
    fechaActual = new Date();
  
    opcionesFecha = {
      weekday: "long", // día de la semana (Lunes, Martes, etc.)
      day: "2-digit", // día del mes con dos dígitos (01, 02, etc.)
      month: "long", // nombre del mes (Enero, Febrero, etc.)
      year: "numeric" // año con cuatro dígitos (1990, 2023, etc.)
    };
  
    opcionesHora = {
      hour: "2-digit", // hora en formato de 12 horas con dos dígitos (03, 04, etc.)
      minute: "2-digit", // minutos con dos dígitos (14, 30, etc.)
      second: "2-digit", // segundos con dos dígitos (18, 45, etc.)
      hour12: true // indica si se usa el formato de 12 horas (AM/PM)
    };
  
    fechaFormateada = fechaActual.toLocaleTimeString("en-US", opcionesHora) + " " +
      fechaActual.toLocaleDateString("es-ES", opcionesFecha);
  
    console.log(fechaFormateada);
    return fechaFormateada;
  }

//buscar los lunes

function buscarLunes1Enero(añoInicio, añoFin) {
    for (let año = añoInicio; año <= añoFin; año++) {
      fecha = new Date(año, 0, 1); // Crear una fecha para el 1 de enero del año actual //año, mes, día
      if (fecha.getDay() === 1) { // Comprobar si el día de la semana es lunes (1 es el código para lunes) getDay me saca el día de la semana
        console.log("1 de enero de " + año + " es lunes");
      }
    }
}

//tiempo transcurrido
function calcularTiempoIngreso() {
    const inicio = new Date(); // Obtener el tiempo actual al iniciar el ingreso de datos
  
    const nombre = prompt("Ingresa tu nombre:");
    const apellido1 = prompt("Ingresa tu primer apellido:");
    const apellido2 = prompt("Ingresa tu segundo apellido:");
  
    const fin = new Date(); // Obtener el tiempo actual al finalizar el ingreso de datos
  
    const tiempoTranscurrido = fin - inicio; // Calcular la diferencia de tiempo en milisegundos
  
    console.log("Tiempo transcurrido: " + tiempoTranscurrido + " milisegundos");
    console.log("Nombre: " + nombre);
    console.log("Apellidos: " + apellido1 + " " + apellido2);
  }
  
  calcularTiempoIngreso();
  
  