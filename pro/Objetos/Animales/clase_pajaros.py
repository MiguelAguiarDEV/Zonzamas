from clase_aves import Ave

class Pajaro(Ave):
    def __init__(self, nombre: str, especie: str, edad: int, alas=2,pico = 1):
        super().__init__(nombre, especie, edad, alas)
        self.pico = pico

    def picotear(self):
        return "El pájaro está picoteando"


    @property
    def pico(self):
        return self.__pico
    @pico.setter
    def pico(self,pico):
        self.__pico = pico

piolin = Pajaro("Piolin","Canario",2)


print(piolin.comunicarse())
print(piolin.volar())
print(piolin.picotear())