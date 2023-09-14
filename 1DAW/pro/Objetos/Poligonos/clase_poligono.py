"""
Vamos a crear unas clases para gestionar polígonos. Para ello haremos uso de una clase, Polígono, 
que tendrá métodos para calcular el área del polígono.
Luego tendremos otras dos clases que serán herencia de Polígono. Estas son Triangulo y Rectangulo.

Crea una función que reciba como parámetro de entrada un Poligono y devuelva el poligono del que se tratra y su área. 
"""


class Poligono:
    def __init__(self,num_lados:int,tipo:str):
        self.num_lados = num_lados
        self.tipo = tipo
    @property
    def num_lados(self):
        return self.__num_lados
    
    @num_lados.setter
    def num_lados(self,num_lados):
        self.__num_lados = num_lados
        
    @property
    def tipo(self):
        return self.__tipo.title()
    @tipo.setter
    def tipo(self,tipo):
        self.__tipo = tipo
        
    def calcular_area(self):
        return "[ERROR] Se necesitan mas datos"
    
    