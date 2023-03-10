"""
Crea una clase "Estudiante" con atributos "nombre", "edad" y "calificaciones" 
(una lista de calificaciones) y métodos "agregar_calificacion", "mostrar_calificaciones" 
y "promedio_calificaciones". El método "agregar_calificacion" debe añadir una calificación 
a la lista de calificaciones del estudiante, el método "mostrar_calificaciones" debe imprimir
todas las calificaciones del estudiante y el método "promedio_calificaciones" debe calcular 
y devolver
"""


class Estudiante:
    
    def __init__(self,nombre,edad : int):
        self.__nombre = nombre
        self.__edad = edad
        self.__calificaciones = {}
        
    def agregar_calificacion(self,modulo,nota):

            self.__calificaciones[modulo.title] = int(nota)
            
            
    def mostrar_calificacion(self,*args):
        
        calificaciones = ""
        
        for modulo in args:
            
            calificaciones += modulo+" = "+str(self.__calificaciones.get(modulo.title))+"\n"
            
        return calificaciones
    
    def promedio_calificacion(self):
        
        promedio = 0
        
        for nota in self.__calificaciones.values():
            
            promedio += nota
            
        return promedio/len(self.__calificaciones.items())    
        
        



miguel = Estudiante("Miguel",19)
miguel.agregar_calificacion("Mates",8)
miguel.agregar_calificacion("Lengua",6)
print(miguel.mostrar_calificacion("Mates","Lengua"))        
print(miguel.promedio_calificacion())