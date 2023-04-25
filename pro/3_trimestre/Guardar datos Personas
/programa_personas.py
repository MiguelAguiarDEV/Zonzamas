from validaciones import Validaciones
from gestordearchivo import GestorDeArchivo

#print("Elige la opción adecuada:\n[I] Insertar un nuevo usuario.\n[B] Buscar un elemento en el diccionario.[M] Mostrar el diccionario.[T] Terminar el programa.")

gestor = GestorDeArchivo()
validaciones = Validaciones()

opcion = ""

while opcion != 'T':
    
    
    
    ###############################################
    #      Opcion para insertar usuarios          #
    ###############################################    
    
    if opcion == 'I':
        
        usuario = {}
        
        nombre_usuario = input("Inserta el nombre del nuevo usuario: \n")       
        apellidos = input("Inserta los apellidos de " + nombre_usuario + "\n")
        calle = input("Inserta la calle de " + nombre_usuario + "\n")
        numero_puerta = input("Inserta el numero de puerta " + nombre_usuario + "\n")
        codigo_postal = input("Inserta el codigo postal de " + nombre_usuario + "\n")
        
        
        nif = input("Inserta el NIF de " + nombre_usuario + "\n")
        
        while not validaciones.nif_valido(nif):
            nif = input("Error al insertar el NIF, inserta el NIF de " + nombre_usuario+ "\n")
        
        
        email = input("Inserta el email de " + nombre_usuario + "\n")
        
        while not validaciones.email_valido(email):
            email = input("Error al insertar el email. Inserta el email de " + nombre_usuario+ "\n")
                

        telefono = input("Inserta el telefono de " + nombre_usuario + "\n")
        
        while not validaciones.telefono_valido(telefono):
            telefono = input("Error al insertar el telefono. Inserta el telefono de " + nombre_usuario+ "\n")
                
                
        
                
        gestor.insertar_datos("personas.txt",nombre_usuario,apellidos,calle,numero_puerta,codigo_postal,nif,email,telefono)




#     ###############################################
#     #      Opcion para buscar usuarios            #
#     ###############################################  
        
        
#     elif opcion == 'B':
#         palabra_a_buscar = input("Inserta el texto por el cual desea realizar la búsqueda"+ "\n")
        
#         UsuariosEncontrados = {}
#         for nif, usuario in usuarios.items():
            
#             if palabra_a_buscar in nif:
#                 UsuariosEncontrados[nif] = usuario
                
#             for clave, valor in usuario.items():
                
#                 if clave != 'emails' and clave != 'telefonos':
#                     if palabra_a_buscar in valor:
#                         UsuariosEncontrados[nif] = usuario
#                 else:
#                     if clave == 'emails':
#                         for numero_email, email in valor.items():
#                             if palabra_a_buscar in email:
#                                 UsuariosEncontrados[nif] = usuario
#                     else:
#                         for iterador, telefono in valor.items():
#                             if palabra_a_buscar in telefono:
#                                 UsuariosEncontrados[nif] = usuario

                
        
#         print(UsuariosEncontrados)



#     ###############################################
#     #    Opcion para mostrar todos los usuarios   #
#     ###############################################       

#     elif opcion == 'M':
#         print(usuarios)
    
    
    
    opcion = input("Elige la opción adecuada:\n[I] Insertar un nuevo usuario.\n[B] Buscar un elemento en el diccionario.\n[M] Mostrar el diccionario.\n[T] Terminar el programa.\n")
    opcion = opcion.upper()
    
    
# print("El programa ha finalizado")







