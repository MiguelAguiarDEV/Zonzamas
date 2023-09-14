"""
    Clase Animal
Crear una clase abstracta "Animal" con dos métodos abstractos: "hacer_sonido" y "moverse". 
Luego, crear dos subclases concretas "Perro" y "Gato" que hereden de la clase "Animal" y definir los métodos abstractos.

El método "hacer_sonido" deberá utilizarse para imprimir el sonido que hace el animal ("Guau!" para los perros y "Miau!" para los gatos),
mientras que el método "moverse" deberá imprimir un mensaje indicando cómo se mueve el animal: dibuja con caracteres el huella de un perro y de un gato. 

Finalmente, crear dos instancias, una de la clase "Perro" y otra de la clase "Gato", y llamar a los métodos "hacer_sonido" y "moverse" 
de cada una de ellas para comprobar su correcto funcionamiento.
"""
import time
import os
from animal import *

class Perro(Animal):

    fotogramas = {
            0 : "                                                     @@@   @@@@   \n"+
                "           @@@ @@                                   @@@@@@@@@@@@  \n"+
                "          @@@@@@@@@              @@@@                             \n"+
                "                               @@@@@@@@@                          \n"+
                "                                      ▄██▄                        \n"+
                "                          ▄████▄▄▄▄▄▄███████                      \n"+
                "                        ▄█▀████████████▀                          \n"+
                "                       ▄▀ █▀██▀▀▀▀▀██▀▀▄                          \n"+
                "                         █▀  ▀█▄    ▀█▄▀▀                         \n"+
                "░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░\n"+                
                "░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░\n",

            1 : "                                            @@@   @@@@            \n"+
                "  @@@ @@                                   @@@@@@@@@@@@           \n"+
                " @@@@@@@@@              @@@@                                      \n"+
                "                      @@@@@@@@@                                   \n"+
                "                                      ▄██▄                        \n"+
                "                          ▄████▄▄▄▄▄▄███████                      \n"+
                "                        ▄█▀████████████▀                          \n"+
                "                       ▄▀ ██▀██▀▀▀████                            \n"+
                "                          █▄ ▀█▄  █▄ ▀█▄                          \n"+
                "░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░\n"+                
                "░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░\n",
                
            2 : "                              @@   @@@                            \n"+
                "@@                          @@@@@@@@@@@@                 @@@@     \n"+
                "@@@                              ▄▄▄                  @@@@@@@@  @@\n"+
                "           @@@@                 ███████             @@@@@@@@@@@@@@\n"+
                "        @@@@@@@@@              ▄████                              \n"+
                "                          ▄█████████▀█▄                           \n"+
                "                        ▄█▀███████▀██ ▀▀                          \n"+
                "                       ▄▀ ██▀██▀    █▄                            \n"+
                "                          █▄ ▀█▄                                  \n"+
                "░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░\n"+                
                "░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░\n",
                
            3 : "                @@   @@@                                          \n"+
                "              @@@@@@@@@@@@       ▄██▄         @@@@                \n"+
                "                                ███████     @@@@@@@@  @@          \n"+
                " @@@@                          ▄████       @@@@@@@@@@@@@@         \n"+
                "@@@@@@@                   ▄██████████                             \n"+
                "                        ▄█▀███████████▄                           \n"+
                "                       ▄▀ ██▀██▀   ▀█ ▀█                          \n"+
                "                          █▄ ▀█▄                                  \n"+
                "                                                                  \n"+                
                "░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░\n"+                
                "░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░\n",
            
            4 : "    @@   @@@                                          @@@         \n"+
                "  @@@@@@@@@@@@                        ▄██▄          @@@@@@@       \n"+
                "                          ▄████▄▄▄▄▄▄███████                      \n"+
                "                        ▄█▀████████████▀                          \n"+
                "                       ▄▀ ██▀██▀▀██▀██                            \n"+
                "                         ▀▀ ▀▀  ▀▀ ▀▀                             \n"+
                "                                                                  \n"+
                "                                                                  \n"+
                "                                                                  \n"+                
                "░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░\n"+                
                "░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░\n",

            5 : "                                @@@                               \n"+
                "  @@@                         @@@@@@@                             \n"+
                "@@@@@@@                      ▄▄▄      ▄██▄              @@@@@@    \n"+
                "                          ▄███████▄▄▄███████        @@@@@@@@@@@@  \n"+
                "                        ▄█▀████████████▀                          \n"+
                "                       ▄▀  █▄ ▀█▄  ▀███▄                          \n"+
                "                            ▀    ▀  █▄ ▀█▄                        \n"+
                "                                                                  \n"+
                "                                                                  \n"+                
                "░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░\n"+                
                "░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░\n",
                }


    def __init__(self):
        self.fotograma = 0

    def hacer_sonido(self):
        return "Guau!"
    
    def moverse(self):           
        self.fotograma += 1
        if self.fotograma == 6:
            self.fotograma = 0      
        return Perro.fotogramas[self.fotograma]        
        
        
perro = Perro()


for i in range(1,20):
    time.sleep(0.5)
    os.system('clear')
    print(perro.moverse())

