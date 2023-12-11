
<?php
header("Access-Control-Allow-Origin: http://formulario");
header("Access-Control-Allow-Methods: POST, GET");
header("Access-Control-Allow-Headers: Content-Type");


if(isset($_POST["x"])){

        $obj = json_decode($_POST["x"], false);
        $myJSON = json_encode($obj);
        echo ($myJSON);

  } else {
        $myObj = new stdClass;
        $myObj->nombre = "Pepe";
        $myObj->apellidos = "Lopez Perez";
        $myObj->dni = "12345678X";
        $myObj->fechaNacimiento = "22/09/2000";
        $myObj->codigoPostal = 35500;
        $myObj->email = "pepe@gmail.com";
        $myObj->telefonoFijo = "928666666";
        $myObj->telefonoMovil = "666999666";
        $myObj->tarjetaCredito = "4539955085883327";
        $myObj->iban = "ES7921000813610123456789";
        $myObj->contrasena = "Pepe123456789*";
        $myJSON = json_encode($myObj);
        echo $myJSON;
  }
?>