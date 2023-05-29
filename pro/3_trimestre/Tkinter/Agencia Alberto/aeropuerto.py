class Aeropuerto():
    
    listado = ['Lanzarote', 'Gran Canaria', 'Fuerteventura', 'Tenerife', 'La Palma', 'La Gomera', 'El Hierro']
    
    def __init__(self, sede):
        self.sede = sede
    
    @property
    def sede(self):
        return self.__sede
    
    @sede.setter
    def sede(self, nueva_sede):
        if nueva_sede in Aeropuerto.listado:
            self.__sede = nueva_sede
        else:
            raise Exception('sede', 'La sede introducida no se encuentra en nuestro listado')