from coleccion import *


class FIFO(Coleccion):
    
    def __init__(self):
        self.coleccion = []
        
        
    def estaVacia(self):
        
        """
        if len(self.coleccion) == 0 :
            return True
        else:
            return False
        """
        return len(self.coleccion) == 0
    
    
    def extraer(self):       
        return self.coleccion.pop()
    
    
    def primero(self):
        return self.coleccion[0]
    
    def anhadir(self, elemento_nuevo):
        self.coleccion.append(elemento_nuevo)
        
        return True
    
    def ultimo(self):
        return self.coleccion[-1]