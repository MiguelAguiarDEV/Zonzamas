"""
    Enunciado de nivel avanzado: Crea una clase "Animal" con atributos "nombre", "especie" y "edad" y un método "comunicarse()" 
    que imprima "El animal está comunicándose". 
    
    Crea una clase "Aves" que herede de "Animales" y añada un atributo "alas" y un método "volar()"
    que imprima "La ave está volando". 
    Crea una clase "Pájaros" que herede de "Aves" y 
    añada un atributo "pico" y un método "picotear()" 
    que imprima "El pájaro está picoteando". Crea un objeto de la clase "Pájaros" y 
    utiliza los métodos "comunicarse()", "volar()" y "picotear()".
    Además, crea los getters y setters para los atributos "nombre", "especie", "edad", "alas" y "pico" realizando las validaciones oportunas.
    """


class Animal():
    def __init__(self,nombre: str,especie: str,edad: int):
        self.nombre = nombre
        self.especie = especie
        self.edad = edad


    @property
    def nombre(self):
        return self.__nombre
    @nombre.setter
    def nombre(self,nombre):
        self.__nombre = nombre



    @property
    def especie(self):
        return self.__especie
    @especie.setter
    def especie(self,especie):
        self.__especie = especie



    @property
    def edad(self):
        return self.__edad
    @edad.setter
    def edad(self,edad):
        self.__edad = edad


    def comunicarse(self):
        return "El animal está comunicándose"
