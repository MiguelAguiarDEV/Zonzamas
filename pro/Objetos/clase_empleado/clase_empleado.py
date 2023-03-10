class Empleado():
    def __init__(self,nombre: str,apellidos: str,salario: float = 0):
        self.nombre = nombre
        self.apellidos = apellidos
        self.salario = salario
        
    
    
    @property
    def nombre(self):
        return self.__nombre
    
    @nombre.setter
    def nombre(self,nombre):
        self.__nombre = nombre

    
    @property
    def apellidos(self):
        return self.__apellidos
    
    @apellidos.setter
    def apellidos(self,apellidos):
        self.__apellidos = apellidos
    
    @property
    def salario(self):
        return self.__salario
    
    @salario.setter
    def salario(self,salario):
        self.__salario = salario
    
    def aumentar_salario(self):
            self.salario += self.salario * 0.10
        
class Gerente(Empleado):
    def __init__(self, nombre: str, apellidos: str, salario: int = 0,bono: float = 0):
        super().__init__(nombre, apellidos, salario)
        self.bono = bono
    
    @property
    def bono(self):
        return self.__bono
    
    @bono.setter
    def bono(self,nuevo_bono):
        self.__bono = nuevo_bono
        
    def aumentar_bono(self):
        self.bono += self.bono * 0.20
        


empleado = Empleado("Miguel","Aguiar",400)

empleado.aumentar_salario()


print(empleado.salario)

gerente = Gerente("Gerente", "Paco", 300,200)

gerente.aumentar_salario()
gerente.aumentar_bono()


print(gerente.bono)