
"""
   
Clase Pizza
Crea una clase "Pizza" con atributos "ingredientes" y "tamaño" y métodos "agregar_ingrediente", "quitar_ingrediente" y
"mostrar_ingredientes". El método "agregar_ingrediente" debe añadir un ingrediente a la lista de ingredientes de la pizza, 
el método "quitar_ingrediente" debe eliminar un ingrediente de la lista de ingredientes de la pizza y el método 
"mostrar_ingredientes" debe imprimir todos los ingredientes de la pizza.    
"""


class Pizza():
    
    
    def __init__(self,*argumentos_entrada):
        self.lista_ingredientes = []
        self.tamanho = 0
        
        for ingrediente in argumentos_entrada:           
            self.agregar_ingrediente(ingrediente)
        
        
    def agregar_ingrediente(self,*args):
        
        for ingrediente in args:
            if self.lista_ingredientes.count(ingrediente) == 0:
                self.lista_ingredientes.append(ingrediente)
                self.tamanho += 1
                
                
    def quitar_ingrediente(self,*args):
        
        for ingrediente in args:
            if self.lista_ingredientes.count(ingrediente) > 0:
                self.lista_ingredientes.remove(ingrediente)
                self.tamanho -= 1
                
    def mostrar_ingredientes(self):
        
        
        definicion_pizza = f"La pizza tiene un tamaño de {self.tamanho} y está creada con los ingredientes: "
        
        for ingrediente in self.lista_ingredientes:            
            definicion_pizza += "\n - " + ingrediente
            
        return definicion_pizza
            
        
marinera = Pizza("Gambas", "atún", "queso","tomate")


print(marinera.mostrar_ingredientes())

marinera.quitar_ingrediente("Gambas", "atún")

print(marinera.mostrar_ingredientes())

marinera.agregar_ingrediente("Gambas", "atún")

print(marinera.mostrar_ingredientes())













