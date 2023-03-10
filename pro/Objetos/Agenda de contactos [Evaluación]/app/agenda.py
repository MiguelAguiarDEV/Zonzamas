from contacto import *
from persona import *
from nif_valido import *
from email_valido import *


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
        self.contactos[contacto.nombre] = {"Nombre" : contacto.nombre ,"Primer Apellido" :contacto.primer_apellido,"Segundo apellido" :contacto.segundo_apellido,"NIF" :contacto.nif, "Edad" :contacto.edad, "Direccion" :contacto.direccion,"Telf fijo" :contacto.telf_fijo,"Telf_movil" :contacto.telf_movil,"Email" :contacto.email}
        
    def mosrar_contactos(self):
        agenda = ""
        for nombre in sorted(self.contactos):
            agenda += "->"+ nombre + "\n"
        return f"Contactos:\n{agenda}"
    
    def buscar_contacto(self,contacto_buscar):
        if contacto_buscar in self.contactos:
            datos_del_contacto = ""
            for dato,valor in self.contactos[contacto_deseado].items():
                datos_del_contacto += dato +": "+str(valor) + "\n"
            return datos_del_contacto
        
        elif contacto_buscar == "":
            return
        else:
            return "Este contacto no esta en la agenda."
       
    def editar_contacto(self,contacto,parametro,nuevo_valor):
        if parametro.title() == "Edad":
            if not isinstance(nuevo_valor):
                return "La edad tiene que ser un valor valido" 
        self.contactos[contacto.title()][parametro.title()]=nuevo_valor
        return self.contactos[contacto.title()]
         



mi_agenda = Agenda() 
        
se_ejecuta = True

while se_ejecuta:
    opcion = input(Agenda.menu_agenda).upper()
    
    match opcion:
        case "X":
            se_ejecuta = False
        
        case "A":
            print("Introduce los datos del contacto:")
            
            nombre = input("Nombre: ").title()
            primer_apellido = input("Primer Apellido: ").title()
            segundo_apellido = input("segundo Apellido: ").title()
            nif = input("NIF: ").title()
            while not validaDNI(nif):
                nif = input("Introduce un valor correcto: ")
            
            
            
            edad = input("Edad: ").title()
            while not edad.isnumeric() and edad < 0:
                edad = input("Introduce un valor correcto: ")
                
                
                
            direccion = input("Direccion: ").title()
            telf_fijo = input("Telefono fijo: ").title()
            telf_movil = input("Telefono movil: ").title()
            email = input("Email: ").title()
            while not validarEmail(email):
                email = input("Introduce un valor correcto")
            
            #Pruebas
            # nombre = "Miguel"
            # primer_apellido = "Santiesteban"
            # segundo_apellido = "Aguiar"
            # nif = "Y1427419F"
            # edad = 20 
            # direccion = "Calle El Antonio Nº11"
            # telf_fijo = "32713712391981"
            # telf_movil = "626995904"
            # email = "l1f.migue@gmail.com"
            
            
            contacto = Contacto(nombre, primer_apellido, segundo_apellido, nif, edad, direccion,telf_fijo,telf_movil,email)
            mi_agenda.anhadir_contacto(contacto)
            
        case "L":
            print(mi_agenda.mosrar_contactos())
        
        case "B":
            contacto_deseado = input("¿Que contacto desea buscar? ")
            print(mi_agenda.buscar_contacto(contacto_deseado))
        
        case "E":
            contacto = input("Que contacto quieres editar?")
            parametro = input("Que parametro quieres editar?")
            nuevo_valor = input("Cual es el nuevo valor del prametro?")
            print(mi_agenda.editar_contacto(contacto,parametro,nuevo_valor))    
            
print(mi_agenda.contactos)


