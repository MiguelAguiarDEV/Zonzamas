"""
    Clase Automóvil
    Crear una clase "Automóvil" con un atributo privado "kilometraje" y 
    un método estático "calcular_consumo_de_combustible" que calcule el 
    consumo de combustible en función de un kilometraje que venga dado 
    como parámetro de entrada. Utilizar un setter y un getter para acceder
    al kilometraje.
"""


class Automovil():
    
    def __init__(self, kilometraje:float = 0.00):
        self.kilometraje = kilometraje
        
    @property
    def kilometraje(self):
        return self.__kilometraje   
        
    @kilometraje.setter
    def kilometraje(self,kilometraje):
        self.__kilometraje = kilometraje
                                                        
    @staticmethod
    def calcular_consumo_de_combustible(kilometraje):
        return kilometraje * 1.25
    
    
audiA1_kilometraje = 45.00

print(Automovil.calcular_consumo_de_combustible(audiA1_kilometraje))
