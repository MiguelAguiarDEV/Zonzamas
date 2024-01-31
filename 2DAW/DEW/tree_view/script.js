function rotar(elemento) {
  console.log($(elemento).data("toggled"));
  if (!$(elemento).data("toggled")) {
    $(elemento).data("toggled", true);
    $(elemento).animate(
      {
        rotate: "90deg",
      },
      500
    );
  } else {
    $(elemento).data("toggled", false);
    $(elemento).animate(
      {
        rotate: "0deg",
      },
      500
    );
  }
  console.log("se roto");
}
rotar(".btn-exp");

function añadirOnClickCrear() {
  $(".btn-add").click(function () {
    // Encuentra los elementos "hijos" más cercanos y los almacena en una variable
    var hijosList = $(this).closest(".dir").find(".hijos:first");

    // Agrega la foto de fichero.
    Swal.fire({
      title: "Introduce el nombre del fichero o directorio",
      input: "text",
      inputLabel: "Nombre",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value.trim()) {
          // Verifica si el valor está vacío o solo contiene espacios en blanco
          return "El nombre no puede estar vacío";
        } else if (yaExiste(value, $(this).closest(".dir"))) {
          return "El nombre ya existe";
        } else {
          // Verifica si el valor contiene un punto
          crearFicDir(value, hijosList);
          añadirOnClickCrear();
        }
      },
    });
  });
}
añadirOnClickCrear();

function añadirOnClickRotar(elemento) {
  elemento.click(function () {
    // Activa y desacriva la visibilidad de los elementos "hijos"
    $(this).parent().siblings(".hijos").toggle(500);
    rotar(this);
    console.log("se ha pulsado");
  });
}
añadirOnClickRotar($(".btn-exp"));

function crearFicDir(nombre, dir) {
  if (nombre.includes(".")) {
    html = `
            <ul class="fic"><img src="img/file.png" alt="">${nombre}</ul>
            `;
    dir.append(html);
  } else {
    html = `
            <ul class="dir">
                <span class="dir-inf">
                    <img src="img/folder.png" alt="">
                    <span class="dir-nom">${nombre}</span>
                    <button class="btn-dir btn btn-add">+</button>
                    <button toggled=true class="btn-dir btn btn-exp"><div>></div></button>
                </span>
                <ul class="hijos">
        
                </ul>
            </ul>
            `;
    dir.append(html);
    rotar(dir.find(".btn-exp").last());
    añadirOnClickRotar(dir.find(".btn-exp").last());
  }
  return html;
}

function yaExiste(nombre, dir) {
  return obtenerNombresHijos(dir).includes(nombre);
}

function obtenerNombresHijos(carpeta) {
  //Array para guardar los nombres de los hijos.
  var nombresHijos = [];
  // Obtener las carpetas hijas de la carpeta.
  carpeta.find("> .hijos > .dir > .dir-inf > .dir-nom").each(function () {
    nombresHijos.push($(this).text()); // Agregar el nombre del hijo al array
  });
  // Obtener los ficheros hijos de la carpeta.
  carpeta.find("> .hijos > .fic").each(function () {
    nombresHijos.push($(this).text()); // Agregar el nombre del hijo al array
  });
  // Devolver el array con los nombres de los hijos
  return nombresHijos;
}
