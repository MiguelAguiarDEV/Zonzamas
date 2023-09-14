from clase_Elctrodomestico import *


class Televisor(Electrodomestico):
    
    tipos_televisor = ("OLED", "LED", "LCD", "PLASMA", "QLED")
    
    
    def __init__(self, tipos_eficiencia: dict, precio: float, marca: str,tipo:str,resolucion:str,tamanho_pantalla:int):
        super().__init__(tipos_eficiencia, precio, marca)

        self.tipo = tipo
        self.resolucion = resolucion
        self.tamanho_pantalla = tamanho_pantalla

    @property
    def tipo(self):
        return self.__tipo
    @property
    def resoulucion(self):
        return self.__resolucion
    
    @property
    def tamanho_pantalla(self):
        return self.__tamanho_pantalla
    
    @resoulucion.setter
    def resolucion(self,resolucion):
        self.__resolucion = resolucion
        
    
    @tipo.setter
    def tipo(self,tipo):
        if tipo in Televisor.tipos_televisor:
            self.__tipo = tipo
        else:
            return "No es un tipo de televisor valido"
        
    @tamanho_pantalla.setter
    def tamanho_pantalla(self,tamanho_pantalla):
        if tamanho_pantalla < 140 or tamanho_pantalla > 6:
            self.__tamanho_pantalla = tamanho_pantalla
        return "No es un tamaño de pantalla valido"    
    def mostrar_datos(self):
        return super().mostrar_datos() + f"\nTipo: {self.tipo}\nResolucion: {self.resolucion}\nTamaño de pantalla: {self.tamanho_pantalla} pulgadas"       
            

