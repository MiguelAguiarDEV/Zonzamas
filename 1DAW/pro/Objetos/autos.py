"""
Clase Auto
Crea una clase "Auto" con atributos "marca", "modelo", "año" y "velocidad" y métodos "acelerar", "frenar" y "mostrar_información". 
El método "acelerar" debe aumentar la velocidad en 10 unidades, el método "frenar" debe disminuir la velocidad en 7 unidades y 
el método "mostrar_información" debe imprimir los atributos del auto.
    
"""


class Auto():
    
    
    def __init__(self, marca, modelo, anho):
        self.marca = marca
        self.modelo = modelo
        self.anho = anho
        self.__velocidad = 0
        
        
    def acelerar(self):
        self.__velocidad += 10
        
    def frenar(self):        
        self.__velocidad -= 7
        
        if self.__velocidad < 0:
            self.__velocidad = 0
        
        
    def mostrar_informacion(self):
        return f"El coche marca {self.marca} modelo {self.modelo} del año {self.anho} va a una velocidad de {self.__velocidad} km/h"
    
    
renault = Auto("Renault", "Twingo", 1993)


print(renault.mostrar_informacion())

renault.acelerar()
renault.acelerar()

print(renault.mostrar_informacion())

renault.frenar()

print(renault.mostrar_informacion())