""" 
Ejercicio interfaz informal
Una colección es un conjunto de elementos que puede realizar una serie de método
estaVacia(): devuelve true si la colección está vacía y false en caso contrario.
extraer(): devuelve y elimina el primer elemento de la colección.
primero(): devuelve el primer elemento de la colección.
añadir(): añade un elemento por el extremo que corresponda, y devuelve true si se ha añadido y false en caso contrario.
ultimo(): devuelve el último elemento de la colección.
A continuación, escribe una clase Pila, que implemente esta interfaz.


Una pila es una cola LIFO (Last In First Out)

Una cola FIFO (First In First Out)
"""

from abc import ABC, abstractmethod

class Coleccion(ABC):
    
    @abstractmethod
    def estaVacia(self):
        pass
    
    @abstractmethod
    def extraer(self):
        pass
    
    @abstractmethod
    def primero(self):
        pass
    
    @abstractmethod
    def anhadir(self):
        pass
    
    @abstractmethod
    def ultimo(self):
        pass
    