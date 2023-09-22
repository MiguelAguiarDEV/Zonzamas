<?php



function gen_fibonacci($lenght){
	$fibonacci = array();
	if ($lenght < 2 ){
		return [0];
	}
	elseif ($lenght == 2){
		return [0,1];
	}
	else {
		$fibonacci[0] = 0;
        $fibonacci[1] = 1;
        for ($i=2; $i < $lenght; $i++) { 
            $fibonacci[$i] = $fibonacci[$i-1] + $fibonacci[$i-2];
        }
        return $fibonacci;
	}
};
	
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Mi Página PHP con Estilos</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
    <form action="index.php" method="post">
        <label for="longitud">¿De cuantos numeros quieres que sea la sucesion?</label>
        <input type="text" name="longitud" id="longitud">
        <input type="submit" value="Enviar">
    </form>

            
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $longitud = $_POST["longitud"];
        
        $lista_valores = gen_fibonacci($longitud);
        $tabla = "";
        
        $tabla.= "<table>";
        for ($posicion=0;$posicion < count($lista_valores);$posicion++) {;

            
            $tabla.= "<tr>";

                for ($i=0;$i<count($lista_valores);$i++) {;
                    if($i == $posicion){
                        $tabla.= "<td id='celda-valor'><strong>".$lista_valores[$posicion]."</strong></td>";
                    }
                    else{
                        $tabla.= "<td></td>";

                    };
                };
            $tabla.= "</tr>";
        };
        $tabla.= "</table>";
        echo $tabla;
    };


    
    ?>
    
</body>
</html>

