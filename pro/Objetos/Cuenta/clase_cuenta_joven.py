from clase_cuenta import Cuenta
from clase_persona import Persona


class CuentaJoven(Cuenta):
    def __init__(self, titular: Persona, cantidad: float = 0, bonificacion: int = 0):
        super().__init__(titular, cantidad)
        self.bonificacion = bonificacion
        
    @property
    def bonificacion(self):
        return str(self.__bonificacion) + '%'

    @bonificacion.setter
    def bonificacion(self,bonificacion):
        if isinstance(bonificacion,int) and bonificacion >= 0 and bonificacion <= 100: 
            self.__bonificacion = bonificacion    
        else:
            print("[ERROR]")
            
            
            
            
    def esTitularValido(self):
        return self.titular.es_mayor_de_edad() and self.titular.edad < 25
    
    def retirar(self, cantidad):
        if self.esTitularValido():
            super().retirar(cantidad)
    """
    def ingresar(self, cantidad):
        if self.esTitularValido():    
            super().ingresar(cantidad)
    """
    
    def mostrar(self):
        return super().mostrar() +"\nTipo de Cuenta: Cuenta Joven\nBonificacion = " + self.bonificacion 
    
    
carlos = Persona("Carlos",19,"78588793R")
cuenta_carlos = CuentaJoven(carlos,0,50)


print(cuenta_carlos.mostrar())
cuenta_carlos.ingresar(513)
cuenta_carlos.retirar(200)



