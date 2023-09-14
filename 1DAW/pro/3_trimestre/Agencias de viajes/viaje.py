import abc
from avion import Avion
import json
import ast


class Viaje():
    archivo_viajes = "viajes.json"
        
    
    def __init__(self, avion : Avion, origen, destino, precio,billetes_comprados = {}):
    
        self.origen = origen
        self.destino = destino
        self.precio = precio
        self.billetes_comprados = billetes_comprados 
        self.avion = avion.capacidad
        self.capacidad = avion.capacidad

        
    def anhadir_viaje(self):


        file = open(Viaje.archivo_viajes,'r')

        contenido = file.read()

        datos_viaje = ast.literal_eval(contenido)

        file.close()

        file = open(Viaje.archivo_viajes,'w')

        datos_viaje[self.origen+"-"+self.destino] = vars(self)

        file.write(json.dumps(datos_viaje))




    def eliminar_viaje(self):
        file = open(Viaje.archivo_viajes,'r')

        contenido = file.read()

        datos_viaje = ast.literal_eval(contenido)

        file.close()

        file = open(Viaje.archivo_viajes,'w')

        del datos_viaje[self.origen+"-"+self.destino]

        file.write(json.dumps(datos_viaje))

    def buscar_viaje(self):
        file = open(Viaje.archivo_viajes,'r')
        encontrados = {}
        contenido = file.read()
        datos_viaje = ast.literal_eval(contenido)
        for codigo_viaje, datos_viaje in datos_viaje.items():
            if self.origen+"-"+self.destino in codigo_viaje:
                encontrados[codigo_viaje] = datos_viaje
            if self.origen+"-"+self.destino in str(datos_viaje.values()):
                encontrados[codigo_viaje] = datos_viaje

        return encontrados

        
    

avion = Avion("747",700)

viaje = Viaje(avion,"LZT", "GC", 40)

viaje.anhadir_viaje()