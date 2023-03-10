""""

Clase Cuenta
Crea una clase llamada Cuenta que tendrá los siguientes atributos: titular (que es una persona) y 
cantidad (puede tener decimales). El titular será obligatorio y la cantidad es opcional. Construye 
los siguientes métodos para la clase:

Un constructor, donde los datos pueden estar vacíos.
Los setters y getters para cada uno de los atributos. El atributo no se puede modificar directamente,
sólo ingresando o retirando dinero.
mostrar(): Muestra los datos de la cuenta.
ingresar(cantidad): se ingresa una cantidad a la cuenta, si la cantidad introducida es negativa, 
no se hará nada.
retirar(cantidad): se retira una cantidad a la cuenta. La cuenta puede estar en números rojos.


"""

from clase_persona import Persona

class Cuenta():
    
    
    def __init__(self, titular : Persona, cantidad_entrada = 0.0):
        self.titular = titular #titular es de la clase Persona
        self.__cantidad = 0
        self.cantidad = cantidad_entrada
        
        
        
        
    @property
    def cantidad(self):
        return self.__cantidad
        
    @cantidad.setter
    def cantidad(self, nuevo_valor):
        self.__cantidad = self.__cantidad + nuevo_valor
        
        
    def mostrar(self):
        return self.titular.mostrar() + " Cantidad: " + str(round(self.__cantidad,2))
    
    def ingresar(self, cantidad):
        if cantidad > 0 :
            self.cantidad = cantidad
            
            
    def retirar(self, cantidad):
        self.cantidad = -cantidad
        
"""
cuenta_andres = Cuenta(Persona("Andrés", 22, "78551004R"),20)


print(cuenta_andres.mostrar())

cuenta_andres.ingresar(100)

print(cuenta_andres.mostrar())

cuenta_andres.ingresar(120.1241834264)

print(cuenta_andres.mostrar())

cuenta_andres.retirar(10)
print(cuenta_andres.mostrar())


print(cuenta_andres.titular.mostrar())
"""