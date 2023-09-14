


class Avion():
    
    modelos = {
        
        'Airbus 319' : 1
       ,'Airbus 320' : 250
       ,'Airbus 321' : 260
       ,'Boeing 737' : 450
       ,'Boeing 747' : 460
    }
    
    def __init__(self, modelo):
        self.modelo = modelo
        
        
        
    @property
    def modelo(self):
        return self.__modelo
    
    @modelo.setter
    def modelo(self, nuevo_modelo):
        if nuevo_modelo in Avion.modelos:
            self.__modelo = nuevo_modelo
        else:
            raise Exception('modelo', ' El modelo del avión no se encuentra en el listado.')
        
    @property
    def capacidad(self):
        return Avion.modelos.get(self.__modelo)
        
        
        
