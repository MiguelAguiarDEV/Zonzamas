from clase_foro import Foro

class Forero():
    
    id_forero_ultimo = 0
    
    def __init__(self,nick):
        self.nick = nick
        
        self.id_forero = Forero.id_forero_ultimo
        
        Forero.id_forero_ultimo += 1
        
        
    def insertar(self, mensaje):
        
        dic_mensaje = {}
        dic_mensaje['id_forero'] = self.id_forero
        dic_mensaje['nick'] = self.nick
        dic_mensaje['mensaje'] = mensaje
        
        
        Foro.insertar(dic_mensaje)
        
    def borrar(self, id_mensaje):
        return Foro.borrar(id_mensaje, self.id_forero)
    
    
    def editar(self, id_mensaje, mensaje):
        
        return Foro.editar(id_mensaje, mensaje, self.id_forero)
        
        
        
andres = Forero("Andrés")
jaime  = Forero("Jaime")

andres.insertar("Hola, soy nuevo en el foro")
andres.insertar("Soy natural de Órzola")
andres.insertar("Me gusta el Ajedrez")
jaime.insertar("Hola Andrés, bienvenido al Foro")

print(jaime.borrar(1))
print(jaime.borrar(2))


print(Foro.contenido)

print("\n\n")


andres.editar(1,"Hola, soy Andrés y soy nuevo en el Foro")



print(Foro.mostrar())