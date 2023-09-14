#Clase Casa
class Edificio:
    def __init__(self,numero_puertas:int,numero_ventanas:int,coordenadas:str ):
        self.numero_puertas = numero_puertas
        self.numero_ventanas = numero_ventanas
        self.coordenadas = coordenadas
    
    @property
    def numero_puertas(self):
        return self.__numero_puertas
    
    @property
    def numero_ventanas(self):
        return self.__numero_ventanas
    
    @property
    def coordenadas(self):
        return self.__coordenadas
        
    @numero_puertas.setter
    def numero_puertas(self,nuevo_numero_puertas):
        
        if nuevo_numero_puertas > 0: 
            self.__numero_puertas = nuevo_numero_puertas
        return "No es un numero de puertas valido"    
    @numero_ventanas.setter
    def numero_ventanas(self,nuevo_numero_ventanas):
        
        if nuevo_numero_ventanas > 0:
            self.__numero_ventanas = nuevo_numero_ventanas
        return "No es un numero de ventanas valido"
    
    @coordenadas.setter
    def coordenadas(self,nuevas_coordenadas):
        if nuevas_coordenadas[0] == "(" and nuevas_coordenadas[-1] == ")" and nuevas_coordenadas[1:nuevas_coordenadas.find(",")].isnumeric() and nuevas_coordenadas[nuevas_coordenadas.find(",")+1:-1].isnumeric():
            self.__coordenadas = nuevas_coordenadas



#Clase Casa
class Casa(Edificio):
    def __init__(self, numero_puertas: int, numero_ventanas: int, coordenadas: str,habitantes: int,numero_habitaciones: int,numero_banhos: int):
        super().__init__(numero_puertas, numero_ventanas, coordenadas)
        self.habitantes = habitantes
        self.numero_habitaciones = numero_habitaciones
        self.numero_banhos = numero_banhos
        
        
        
