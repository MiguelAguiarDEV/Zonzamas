from clase_Elctrodomestico import Electrodomestico
from clase_Lavadora import Lavadora
from clase_Televisor import Televisor
class BateriaPruebas():
    televisores = []
    lavadoras = []
    
    def __init__(self,elecrodomestico):
        self.electrodomestico = elecrodomestico
        
    @property
    def electrodomestico(self):
        return self.__electrodomestico
    
    @electrodomestico.setter
    def electrodomestico(self,electrodomestico):
        self.__electrodomestico = electrodomestico
        
    def anhadir_televisor(televisor:Televisor):
        BateriaPruebas.televisores.append(televisor)       
        
    def anhadir_lavadora(lavadora:Lavadora):
        BateriaPruebas.lavadoras.append(lavadora)        

    def mostrar_datos():
        datos = ""
        for televisor in BateriaPruebas.televisores:
            datos += "\n"+televisor.mostrar_datos(())+"\n"
        for lavadora in BateriaPruebas.lavadoras:
            datos += "\n"+lavadora.mostrar_datos()+"\n"
        return datos


prueba = BateriaPruebas(Lavadora("A",4,"bosh",10,400)) 


lavadora = Lavadora(9asfasdf)
prueba.anhadir_lavadora(ñavaldora)

print(BateriaPruebas.mostrar_datos())




