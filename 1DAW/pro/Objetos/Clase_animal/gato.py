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

class Gato(Animal):

    def __init__(self):
        self.paso = 0

    def hacer_sonido(self):
        return "Miau!"
    
    def moverse(self):
        
        
        
        if self.paso == 0:
            self.paso = 1
        else:
            self.paso = 0
    
        huellas = {
            0 : "░░░░░░░░░░░░░░░░█▄▄░░\n"+
                "░░░░▄████▄▄▄▄▄▄█████░\n"+
                "░░▄█▀████████████▀░░░\n"+
                "░▄▀░█▀██▀▀▀▀▀██▀▀▄░░░\n"+
                "░░░█▀░░▀█▄░░░░▀█▄▀▀░░",

            1 : "░░░░░░░░░░░░░░░░█▄▄░░\n"+
                "░░░░▄████▄▄▄▄▄▄█████░\n"+
                "░░▄█▀████████████▀░░░\n"+
                "░▄▀░██▀██▀▀▀████ ░░░░\n"+
                "░░░░█▄░▀█▄░░█▄ ▀█▄░░░"}
                        
        return huellas[self.paso]        
        
        
gato = Gato()


for i in range(1,20):
    time.sleep(0.5)
    os.system('clear')
    print(gato.moverse())

