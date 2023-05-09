

from avion import Avion
from billete import Billete

import ast
import json

class Viaje():
    
    viajes = {}
    
    archivo_datos = '/home/juanra/Escritorio/python/agencia/viajes.json'

    def __init__(self, origen = '', destino= '', avion = '', precio=0.0) -> None:
        
        self.origen             = origen
        self.destino            = destino
        self.__avion            = avion
        self.__precio           = precio
        self.billetes_comprados = {}
        
        self.cargar_viajes()
        
        
        
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
            
    
    @staticmethod
    def cargar_viajes():
        file = open(Viaje.archivo_datos,'r')
        
        contenido = file.read()
        
        datos_viaje = ast.literal_eval(contenido)
        
        file.close()
        
        
        i = 0
        for id_viaje, _ in datos_viaje.items():
            Viaje.viajes[i] = id_viaje
            i += 1
        
        
    @staticmethod
    def representacion():
        #Para que no aparezca vacío, porque cargar_viajes() se llama en el constructor y este método es estático.
        Viaje.cargar_viajes()
        
        informacion = ''

        for i, id_viaje in Viaje.viajes.items():
            
            informacion += f"[{i}] Viaje:  {id_viaje}\n"

            
        return informacion
        
        
        
        
    
    
    
    def guardar(self):
        

        file = open(Viaje.archivo_datos,'r')
        
        contenido = file.read()
        
        datos_viaje = ast.literal_eval(contenido)
        
        file.close()
        
        #print(datos_viaje)
        
        file = open(Viaje.archivo_datos,'w')

        #datos_viaje = {}
        
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

    
    @staticmethod  
    def guardar_billete(billete : Billete):
        file = open(Viaje.archivo_datos,'r')
        
        contenido = file.read()
        
        datos_viaje = ast.literal_eval(contenido)
        
        file.close()
        
        
        datos_viaje[billete.id_viaje]['billetes_comprados'][billete.nif] = str(billete.num_billetes)

        file = open(Viaje.archivo_datos,'w')
        
        file.write(json.dumps(datos_viaje))
        
        file.close()