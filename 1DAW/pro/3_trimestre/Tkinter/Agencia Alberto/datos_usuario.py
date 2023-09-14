import json
import os

class DatosUsuario:
    ruta_guardado_usuarios = os.path.dirname(__file__) + os.sep + 'bbdd' + os.sep + 'viajes.json'

    def __init__(self):
        pass
        
    def cargar_datos(self, ruta=ruta_guardado_usuarios):
        with open(ruta) as archivo_usuarios_json:
            datos = json.load(archivo_usuarios_json)
            return datos
    
    def verificar_credenciales(self, nombre_usuario, contrasena):
        datos_usuarios = self.cargar_datos()
        if nombre_usuario in datos_usuarios["Usuarios"]:
            if datos_usuarios["Usuarios"][nombre_usuario] == contrasena:
                return True
        return False
