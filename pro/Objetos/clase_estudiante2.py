"""
Clase Estudiante (Segunda parte)
Crear una clase "Estudiante" con un método estático cantidad_compañeros que devuelva la cantidad de compañeros que 
tiene el estudiante. La cantidad de compañeros irá incrementando en función del número de objetos de 
la clase Estudiante que se vayan creando. 
"""


class Estudiante:

    numero_estudiantes = 0
    
    def __init__(self,nombre:str,edad : int):
        self.nombre = nombre
        self.edad = edad

        
        
    @property
    def nombre(self):
        return self.__nombre  
    
    @nombre.setter
    def nombre(self,nombre):
        self.__nombre = nombre
        Estudiante.numero_estudiantes += 1

    @staticmethod
    def cantidad_estudiantes():
        return Estudiante.numero_estudiantes
        
    
miguel = Estudiante("Miguel",19)
otro = Estudiante("Carlos",20)



print(Estudiante.cantidad_estudiantes())