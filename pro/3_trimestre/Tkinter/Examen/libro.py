class Libro():
    def __init__(self,nombre,editorial,autor,anho):
        self.__nombre = nombre
        self.__editorial = editorial
        self.__autor = autor
        self.__anho = anho
        
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
    def editorial(self):
        return self.__editorial
    
    @editorial.setter
    def editorial(self, nuevo_editorial):
        if not nuevo_editorial:
            raise Exception('editorial', 'No se ha insertado una editorial. ')
        else:
            self.__editorial = nuevo_editorial
            
    @property
    def autor(self):
        return self.__autor
    
    @autor.setter
    def autor(self, nuevo_autor):
        if not nuevo_autor:
            raise Exception('autor', 'No se ha insertado un autor. ')
        else:
            self.__autor = nuevo_autor

    @property
    def anho(self):
        return self.__anho
    
    @anho.setter
    def anho(self, nuevo_anho):
        if not nuevo_anho:
            raise Exception('año', 'No se ha insertado un año. ')
        else:
            self._anho = nuevo_anho



    
            
            