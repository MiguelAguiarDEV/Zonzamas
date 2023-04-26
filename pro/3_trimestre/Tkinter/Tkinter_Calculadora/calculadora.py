class DivisionPorCeroError(Exception):
    pass

class EntradaNoValidaError(Exception):
    pass


class Calculadora:

    def sumar(self, a, b):
        if  not isinstance(a,str) and not isinstance(b,str):
            return   a + b
        raise EntradaNoValidaError

    def restar (self, a, b):
        if  not isinstance(a,str) and not isinstance(b,str):
            return a - b
        raise EntradaNoValidaError
    
    def multiplicar (self, a, b):
        if  not isinstance(a,str) and not isinstance(b,str):
            return a * b
        raise EntradaNoValidaError
    
    def dividir (self, a, b):
        if  not isinstance(a,str) and not isinstance(b,str):
            if b == 0:
                raise DivisionPorCeroError
            return a / b
        raise EntradaNoValidaError


