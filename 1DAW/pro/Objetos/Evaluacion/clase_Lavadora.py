from clase_Elctrodomestico import *


class Lavadora(Electrodomestico):
    
    def __init__(self, tipos_eficiencia: dict, precio: float, marca: str,capacidad: int,velocidad_centrifugado: int):
        super().__init__(tipos_eficiencia, precio, marca)

        self.capacidad = capacidad
        self.velocidad_centrifugado = velocidad_centrifugado
        
    
    @property 
    def capacidad(self):
        return self.__capacidad

    @property 
    def velocidad_centrifugado(self):
        return self.__velocidad_centrifugado
    
    @velocidad_centrifugado.setter
    def velocidad_centrifugado(self,velocidad_centrifugado):
        if velocidad_centrifugado < 1500 or velocidad_centrifugado > 200:
            self.__velocidad_centrifugado = velocidad_centrifugado
        return "No es una velocidad de centrifugado valida"
            
    @capacidad.setter
    def capacidad(self,capacidad):
        if capacidad < 15 or capacidad > 4:
            self.__capacidad = capacidad
        else:
            return "No es una capacidad valida"

    def mostrar_datos(self):
        return super().mostrar_datos() + f"\nCapacidad: {self.capacidad} kg\nVelocidad de centrifugado: {self.velocidad_centrifugado} rpm"       
    
    
    
