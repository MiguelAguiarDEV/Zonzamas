"""
[Diccionario] Registro de usuarios
Cree un programa que registre en una base de datos creada con un diccionario los siguientes 
parámetros:

Nombre de usuario
Apellidos
Dirección
NIF
E-mail (puede ser más de uno)
Teléfono (puede ser más de uno)
Luego, con esa base de datos, permite la búsqueda de usuarios por cualquiera de sus datos. 
Una vez localizado muestra toda la información del usuario.

Realiza la validación del NIF y del E-mail con las funciones anteriores.
"""

###############################################
#      Función para validar E-mail            #
###############################################
def email_valido(email):
   return (email.count("@")==1) and ( email[-3:]==".es" or email[-4:]==".com") and (email.find(".es") > (email.find("@")+1) or  email.find(".com") > email.find("@")+1)
 
##########################################
#      Función para validar NIF          #
##########################################
def nif_valido(nif):
 
   if len(nif) == 9 and nif != '':
       letra = nif[-1:].upper()
       dni = int(nif[0:8])
       restoLetra = dni % 23
       comprobacion = "TRWAGMYFPDXBNJZSQVHLCKE"
 
       return comprobacion[restoLetra] == letra #buscar un elemento en una cadena mediante una posicion

 
   return False

###############################################
#      Función para validar Teléfono          #
###############################################
def telefono_valido(telefono):
    return len(telefono)== 9 and telefono.isnumeric()



#print("Elige la opción adecuada:\n[I] Insertar un nuevo usuario.\n[B] Buscar un elemento en el diccionario.[M] Mostrar el diccionario.[T] Terminar el programa.")



opcion = ""

usuarios = {}


while opcion != 'T':
    
    if opcion == 'I':
        
        usuario = {}
        
        nombre_usuario = input("Inserta el nombre del nuevo usuario: \n")       
        apellidos = input("Inserta los apellidos de " + nombre_usuario + "\n")
        direccion = input("Inserta la direccion de " + nombre_usuario + "\n")
        
        
        nif = input("Inserta el NIF de " + nombre_usuario + "\n")
        
        while not nif_valido(nif):
            nif = input("Error al insertar el NIF, inserta el NIF de " + nombre_usuario+ "\n")
        
        
        email = "1"
        
        emails = {}
        
        i = 1
        while email != '':
            
            email = input("Inserta E-mail número {}: "+ "\n".format(i))
            
            if email_valido(email):
                emails[i] = email
                i += 1
                
                
        telefono = "1"
        telefonos = {}
        i = 1
        
        while telefono != '':
            telefono = input("Inserta el telefono número {}: "+ "\n".format(i))
            
            if telefono_valido(telefono):
                telefonos[i] = telefono
                i += 1
                
                
        usuario['nombre'] = nombre_usuario
        usuario['apellidos'] = apellidos
        usuario['direccion'] = direccion
        usuario['nif'] = nif
        usuario['emails'] = emails
        usuario['telefonos'] = telefonos
        
                
        usuarios[nif] = usuario
        
        
    elif opcion == 'B':
        palabra_a_buscar = input("Inserta el texto por el cual desea realizar la búsqueda"+ "\n")
        
        UsuariosEncontrados = {}
        for nif, usuario in usuarios.items():
            
            if palabra_a_buscar in nif:
                UsuariosEncontrados[nif] = usuario
                
            for clave, valor in usuario.items():
                
                if clave != 'emails' and clave != 'telefonos':
                    if palabra_a_buscar in valor:
                        UsuariosEncontrados[nif] = usuario
                else:
                    if clave == 'emails':
                        for numero_email, email in valor.items():
                            if palabra_a_buscar in email:
                                UsuariosEncontrados[nif] = usuario
                    else:
                        for iterador, telefono in valor.items():
                            if palabra_a_buscar in telefono:
                                UsuariosEncontrados[nif] = usuario

                
        
        print(UsuariosEncontrados)
        
        
    elif opcion == 'M':
        print(usuarios)
    
    
    
    opcion = input("Elige la opción adecuada:\n[I] Insertar un nuevo usuario.\n[B] Buscar un elemento en el diccionario.\n[M] Mostrar el diccionario.\n[T] Terminar el programa.\n")
    opcion = opcion.upper()
    
    
print("El programa ha finalizado")







