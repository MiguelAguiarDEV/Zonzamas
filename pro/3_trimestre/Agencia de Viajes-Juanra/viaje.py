

from avion import Avion

import ast
import json

class Viaje():
    
    archivo_datos = '/home/juanra/Escritorio/python/agencia/viajes.json'
    import ast
    def __init__(self, origen = '', destino= '', avion = '', precio=0.0) -> None:
        
        self.origen             = origen
        self.destino            = destino
        self.__avion            = avion
        self.__precio           = precio
        self.billetes_comprados = {}
        
        
        
    @property
    def avion(self):
        return self.__avion
    
    
    @avion.setter
    def avion(self, nuevo_avion):
        
        lanzar_excepcion = False
        
        if nuevo_avion.isnumeric(): 
            
            nuevo_avion = int(nuevo_avion)
            
            if nuevo_avion not in (0,1,2):
                lanzar_excepcion = True
            else:
                
                nuevo_avion = Avion.tipos_aviones[nuevo_avion]
                
                        
        else:
            if nuevo_avion not in Avion.tipos.keys():
                lanzar_excepcion = True
            
            
            
        if lanzar_excepcion:
            raise Exception('avion','No se ha insertado ningún avión. ')
        
        
        
        
        self.__avion = Avion(nuevo_avion, Avion.tipos[nuevo_avion])
            
            
    @property
    def precio(self):
        return self.__precio 
    archivo_datos
    @precio.setter
    def precio(self, nuevo_precio):
        
        if isinstance(nuevo_precio,(int,float)):
            self.__precio = nuevo_precio
        else:
            raise Exception('precio','No se ha insertado un precio de billete válido. ')
            
    def guardar(self):
        

        file = open(Viaje.archivo_datos,'r')
        
        contenido = file.read()
        
        datos_viaje = ast.literal_eval(contenido)
        
        file.close()
        
        file = open(Viaje.archivo_datos,'w')

        datos_viaje = {}
        
        datos_viaje[self.origen + '-' + self.destino] = {
            'origen' : self.origen
           ,'destino' : self.destino
           ,'billetes_comprados' : {}
           ,'avion' : self.avion.modelo
           ,'precio' : str(self.precio)
        }
     
        
        
        #datos_viaje[self.origen + '-' + self.destino] = vars(self)
        
        #print(datos_viaje)
        
        
        file.write(json.dumps(datos_viaje))
        
        
        file.close()
        
        
        """
        contenido = contenido + datos_viaje
        
     
        """
        
        