from cliente import Cliente
import abc
from viaje import Viaje
import ast


class Reserva():
    
    @staticmethod
    def anhadir_reserva(codigo_del_vuelo,cliente : Cliente, numero_billetes):
        
        file = open(Viaje.archivo_viajes,'r')
        
        contenido = file.read()

        datos_viajes = ast.literal_eval(contenido)


        datos_viajes[codigo_del_vuelo]["billetes_comprados"][cliente.nif] = numero_billetes
        
        file.write(json.dumps(datos_viaje))


        
        

    