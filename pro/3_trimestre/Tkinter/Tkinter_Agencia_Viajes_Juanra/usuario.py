class Usuario():
    def __init__(self,nombre,contrasenha):
        self.__nombre = nombre
        self.__contrasenha = contrasenha
        
        
    @property
    def nombre(self):
        return self.__nombre
    
    @nombre.setter
    def nombre(self, nuevo_nombre):
        if not nuevo_nombre:
            raise Exception('nombre', 'No se han insertado un nombre. ')
        else:
            self.__nombre = nuevo_nombre
            
            
    @property
    def contrasenha(self):
        return self.__contrasenha
    
    @contrasenha.setter
    def contrasenha(self, nuevo_contrasenha):
        if not nuevo_contrasenha:
            raise Exception('contrasenha', 'No se ha insertado un contrasenha. ')
        else:
            self.__contrasenha = nuevo_contrasenha

    def diccionario(self):
        return {self.nombre: {"nombre": self.nombre, "contrasenha": self.contrasenha}}
            
            
