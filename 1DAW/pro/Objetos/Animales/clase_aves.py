from clase_animales import Animal 

class Ave(Animal):
    def __init__(self, nombre: str, especie: str, edad: int,alas = 2):
        super().__init__(nombre, especie, edad)
        self.alas = alas
        
    def volar(self):
        return "La ave está volando"


    @property
    def alas(self):
        return self.__alas
    @alas.setter
    def alas(self,alas):
        self.__alas = alas