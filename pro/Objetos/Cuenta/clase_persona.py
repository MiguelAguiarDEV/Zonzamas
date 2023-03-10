"""
    
Clase Persona
Vamos a crear una clase llamada Persona. Sus atributos son: nombre, edad y DNI. 
Construye los siguientes métodos para la clase:

Un constructor, donde los datos pueden estar vacíos.
Los setters y getters para cada uno de los atributos. Hay que validar las entradas de datos.
mostrar(): Muestra los datos de la persona.
esMayorDeEdad(): Devuelve un valor lógico indicando si es mayor de edad.
    
"""
from documento import *

class Persona():
    
    def __init__(self, nombre: str = '', edad: int = 18, nif: str = ''):
        self.nombre = nombre
        self.edad   = edad
        self.nif    = nif
        
        
        
    @property
    def nif(self):
        return "NIF: " + self.__nif
    
    
    @nif.setter
    def nif(self, nuevo_valor):
        
        doc = Documento()
        
        if doc.nif_valido(nuevo_valor):
            self.__nif = nuevo_valor
        else:
            print("[ERROR] el NIF insertado no es válido")
            exit()
    
    @property
    def edad(self):
        return self.__edad
    
    @edad.setter
    def edad(self, nuevo_valor):
        
        if isinstance(nuevo_valor, int) and nuevo_valor >= 0 and nuevo_valor <= 120:
            self.__edad = nuevo_valor
        else:
            print("[ERROR] la edad insertada no es válido")
            exit()
    
                
            
    def mostrar(self):
        return f"Nombre: {self.nombre} Edad: {self.__edad} {self.nif} "
    
    
    def es_mayor_de_edad(self):       
        return self.__edad >= 18
    
