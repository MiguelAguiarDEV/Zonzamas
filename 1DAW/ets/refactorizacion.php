...
function es_mayor_edad(){
    return $this->edad >= 18;
...


...
function datos_personales($persona,$extra) {
    $extra = "nombre: " + $persona->nombre;
    $extra .= "apellidos: " + $persona->apellidos;
    
    //detalles de impresión



    return $extra;
}

function datos_personales_extra($persona,$extra) {

    //detalles de impresión
    
    $extra .= "dirección: " + $persona->numero .'º '. $persona->direccion;

    return "nombre: " + $persona->nombre  "apellidos: " + $persona->apellidos . "dirección: " + $persona->numero .'º '. $persona->direccion;
}
...



...
if (es_mayor_edad()){
    $permiso = $permiso + 1000;
    otorgar($permiso);
    
}
else
{
    $permiso = $permiso - 1000;
    otorgar($permiso);
}
...

...
$datos_persona = $nombre . $apllidos;
echo $datos_persona;

$datos_persona = $numero . $direccion
echo $datos_persona;
...

...
if ($edad > 18){
    return True;
}
else if( tiene_permiso_padres() ){
    return True;
}
else
{
    if ( se_encuentra_emancipado())
    {
        return True;
    }
    else
    {
        return False;
    }
}
...


...
function datos_personales() {
    echo "nombre: " + $this->nombre;
    echo "apellidos: " + $this->apellidos;
    
    //detalles de impresión

    echo "dirección: " + $this->numero .'º '. $this->direccion;
}
...

...
function get_titulo($codigo_modulo)
{
    if ($codigo_modulo == 'ETS')
        return 'Entornos de Desarrollo';
    elseif ($pais == 'PRO')
        return 'Programación';
    elseif ($pais == 'ADE')
        return 'Administración de Sistemas Gestores de BBDD';
    elseif
    ...

}
...

...
if ($edad >= 18 and $permiso_conducir == True and $titulacion == 'FINALIZADA')
{
    echo "Listo para el trabajo";
}
else
{
    echo "No está listo para el trabajo";
}
...