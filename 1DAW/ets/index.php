<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>

    <title>Pokemon Page</title>
</head>
<body>


<?php


    if($_GET['pagina'])
    {
        $pagina = $_GET['pagina'];

        $url_a_leer = 'https://pokeapi.co/api/v2/pokemon/?offset='. ($pagina * 20) .'&limit=20';

        
    }
    else
    {
        $url_a_leer =  'https://pokeapi.co/api/v2/pokemon/';

        $pagina =  0;
    }
        

        


    $pokemon_api = file_get_contents($url_a_leer);
    $pokemons = json_decode($pokemon_api,true);

    echo '<pre>';
    //var_dump($pokemons);
    echo '</pre>';
    echo '<ul class = "list-group">';    
    foreach($pokemons["results"] as $clave => $name)
    {
        echo '<li class = "list-group-item">'.$name['name'].'</li>';
    }
    echo '</ul>';
    echo '<a href="/?pagina='.($pagina + 1).'">PAGINA SIGUIENTE</a><br>';
    if($pagina  > 0)
    {
        echo '<a href="/?pagina='.($pagina - 1).'">PAGINA ANTERIOR</a>';
    }
    
    
?>  



    

</body>

</html>