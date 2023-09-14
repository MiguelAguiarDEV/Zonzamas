<?php

namespace App\fuctions;

function factorial(int $num)
{   

    $resultado = 1;
    $aux = 0;
    if ($num < 0){
        return -1;
    }
    while ($num > 0){
        $resultado *= $num;
        $num -= 1;
    }
    return $resultado;
}

