""" 
Clase Libro
Crea una clase "Libro" con atributos "título", "autor" y "páginas" y métodos "mostrar_información", "abrir_libro" y "cerrar_libro".
El método "mostrar_información" debe imprimir los atributos del libro, el método "abrir_libro" debe imprimir un mensaje indicando 
que el libro está abierto y el método "cerrar_libro" debe imprimir un mensaje indicando que el libro está cerrado.
"""


class Libro():
    
    def __init__(self, titulo, autor, paginas):
        self.titulo  = titulo
        self.autor   = autor
        self.paginas = paginas
        
        self.__estado  = 'Cerrado'
        
    def mostrar_informacion(self):
        
        return f"El libro de títuo  {self.titulo} con autor {self.autor} y número de páginas {self.paginas} se encuentra {self.__estado}"
        
    def abrir_libro(self):
        
        print("El libro se encuentra {} y se ha abierto".format(self.__estado))
        self.cambiar_estado()
        
    def cerrar_libro(self):
        
        print("El libro se encuentra {} y se ha cerrado".format(self.__estado))
        self.cambiar_estado()
        
        
    def cambiar_estado(self):
       
        if self.__estado == 'Abierto':
            self.__estado = 'Cerrado'
        else:
            self.__estado = 'Abierto'


mi_libro = Libro("Las aventuras de Jaime", "Andrés", 20)


print(mi_libro.mostrar_informacion())


mi_libro.abrir_libro()


print(mi_libro.mostrar_informacion())



