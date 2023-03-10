from contacto import *
from persona import *

class Agenda():
    
    menu_agenda = """\n\nMenu de Opciones:
[A]Añadir contacto
[L]Lista de contactos
[B]Buscar contacto
[E]Editar contacto
[X]Salir
"""
    
    def __init__(self):
        
        self.contactos = {}
    
    def anhadir_contacto(self,contacto:Contacto):
        self.contactos[contacto.nombre] = {"Primer Apellido :" :contacto.primer_apellido,"Segundo apellido: " :contacto.segundo_apellido,"NIF: " :contacto.nif, "Edad: " :contacto.edad, "Direccion: " :contacto.direccion,"Telf fijo" :contacto.telf_fijo,"Telf_movil: " :contacto.telf_movil,"Email: " :contacto.email}
    
    def mosrar_contactos(self):
        agenda = ""
        for nombre in self.contactos:
            agenda += "->"+ nombre + "\n"
        return f"Contactos:\n{agenda}"
    
    def buscar_contacto(self,contacto_buscar):
        if contacto_buscar.title() in self.contactos:
        
        else:
            return 
        
    




mi_agenda = Agenda() 
        
se_ejecuta = True

while se_ejecuta:
    opcion = input(Agenda.menu_agenda).upper()
    
    match opcion:
        case "X":
            se_ejecuta = False
        
        case "A":
            print("Introduce los datos del contacto:")
            """
            nombre = input("Nombre: ").title()
            primer_apellido = input("Primer Apellido: ").title()
            segundo_apellido = input("segundo Apellido: ").title()
            nif = input("NIF: ").title()
            edad = input("Edad: ").title()
            direccion = input("Direccion: ").title()
            telf_fijo = input("Telefono fijo: ").title()
            tlf_movil = input("Telefono movil: ").title()
            email = input("Email: ").title()
            """
            
            #Pruebas
            nombre = "Miguel"
            primer_apellido = "Santiesteban"
            segundo_apellido = "Aguiar"
            nif = "Y1427419F"
            edad = 20 
            direccion = "Calle El Antonio Nº11"
            telf_fijo = "32713712391981"
            telf_movil = "626995904"
            email = "l1f.migue@gmail.com"
            
            
            contacto = Contacto(nombre, primer_apellido, segundo_apellido, nif, edad, direccion,telf_fijo,telf_movil,email)
            mi_agenda.anhadir_contacto(contacto)
            
        case "L":
            print(mi_agenda.mosrar_contactos())
            
print(mi_agenda.contactos)


