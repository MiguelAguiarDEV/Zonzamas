"""
Clase Foro
Crea una clase que tenga una variable estática con el contenido del foro (Foro). 
Luego crea una clase Forero que tenga los métodos:

insertar(mensaje): Inserta un mensaje en un foro, especificando previamente el nombre/nick de la persona que ha escrito y el ID del mensaje.
borrar(id): Borra un mensaje del foro relacionado con el id pasado como parámetro. Sólo puede borrar mensajes creados por el usuario.
editar(id): Edita el mensaje con el id en cuestión. 
"""

class Foro():
    
    contenido = {}
    
    id_mensaje = 0
        
    def __init__(self) -> None:
        pass
    
    @staticmethod
    def insertar(mensaje : dict):
        
        Foro.id_mensaje += 1
        
        Foro.contenido[Foro.id_mensaje] = mensaje
        
        return Foro.id_mensaje
        
    
    @staticmethod
    def borrar(id_mensaje, id_forero):
        
        if Foro.contenido[id_mensaje]['id_forero'] == id_forero:
            del Foro.contenido[id_mensaje]
            return f"Se ha eliminado el mensaje con id:{id_mensaje} con éxito"
        else:
            return "No ha sido posible eliminar el mensaje"
        
 
    @staticmethod
    def editar(id_mensaje, mensaje : str, id_forero):
        if Foro.contenido[id_mensaje]['id_forero'] == id_forero:
            Foro.contenido[id_mensaje]['mensaje'] = mensaje
            return f"Se ha editado el mensaje con id:{id_mensaje} con éxito"
        else:
            return "No ha sido posible editar el mensaje"
        
        
    @staticmethod
    def mostrar():
        salida = ""
        for id_mensaje,mensaje in Foro.contenido.items():
            salida += f"""
                {id_mensaje:>4d} + Usuario: {mensaje['nick']}[{mensaje['id_forero']}] 
                     + Mensaje: {mensaje['mensaje']}
                +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++"""
            
        return salida
