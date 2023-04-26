class DivisionPorCeroError(Exception):
    pass

class EntradaNoValidaError(Exception):
    pass


class Calculadora:

    def __init__(self, a, b):
        self.a       = a
        self.b = b


    def __add__ (self):

        return Calculadora(self.a + self.b)

    def __sub__ (self, otro):

        return Calculadora(self.a - otro.a, self.b - otro.b)

    def __mul__ (self, otro):
       
        return Calculadora(self.a * self.b) 

    def __truediv__ (self, otro):
        
        return Calculadora((self.a * otro.a + self.b * otro.b)/(pow(otro.a,2) + pow(otro.b,2)) , (self.b * otro.a - self.a * otro.b)/(pow(otro.real,2) + pow(otro.b,2)) ) 



