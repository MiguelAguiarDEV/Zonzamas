<?php

require "singleton.php";

class Literales extends Singleton{
    public $literales;

    private static $instance;

    public static function getInstance($idioma) {
        if (null === self::$instance) {
        self::$instance = new self($idioma);
        }
        return self::$instance;
    }

    public function __construct($idioma){
        if ($idioma == "es"){
        
            $this->literales = array(
                "es" => "ES"
                ,"nombre" => "Nombre"
                ,"acerca" => "Acerca de"
                ,"home" => "Inicio"
            );
            
        }else if($idioma == "en"){
            $this->literales = array(
                "idioma" => "EN"
                ,"nombre" => "name"
                ,"acerca" => "about"
                ,"home" => "Home"
            );
        }
    }
}
?>