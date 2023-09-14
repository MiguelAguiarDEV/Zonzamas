//Titulo
document.write('<h1 id="titulo">Empezamos con JS</h1>');

//Lista
document.write('<ol>');
    document.write('<li>Lunes</li>');
    document.write('<li>Martes</li>');
    document.write('<ol class="lista lista-letras">');
        document.write('<li>Lo que sea</li>');
        document.write('<li>Otro</li>');
    document.write('</ol>');
document.write('</ol>');


//Tabla
document.write('<div class ="tabla">');

    //Primera fila 
    document.write('<p class="primera-fila item">ID</p>' +
    '<p class="primera-fila item">Isla</p>' +
    '<p class="primera-fila item">Capital</p>' +
    '<p class="primera-fila item">Población</p>');

    //Segunda fila
    document.write('<p class="segunda-fila item">1</p>' +
    '<p class="segunda-fila item">Lanzarote</p>' +
    '<p class="segunda-fila item">Arrecife</p>' +
    '<p class="segunda-fila item">135.000</p>');

    //Tercera fila
    document.write('<p class="tercera-fila item">2</p>' +
    '<p class="tercera-fila item">Fuerteventura</p>' +
    '<p class="tercera-fila item">Puerto del Rosario</p>' +
    '<p class="tercera-fila item">115.000</p>');

document.write('</div>'); 
