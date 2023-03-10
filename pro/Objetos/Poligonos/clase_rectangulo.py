from clase_poligono import Poligono
class Rectangulo(Poligono):
    def __init__(self,base:int,altura:int):
        super().__init__(4,"rectangulo")
        self.base = base
        self.altura = altura   
        
    @property
    def base(self):
        return self.__base

    @base.setter
    def base(self,base):
        self.__base = base

    @property
    def altura(self):
        return self.__altura
        
    @altura.setter
    def altura(self,altura):
        self.__altura = altura
        
    def calcular_area(self):
        return self.base * self.altura
    