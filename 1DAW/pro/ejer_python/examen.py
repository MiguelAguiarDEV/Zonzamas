#EJERCICIO 4

numero = int(input("Introduzca un numeor para hacer la piramide"))
aux = numero
while aux > 0:
    aux -= 1
    print(numero)
    numero = str(aux) + str(numero)
   
     
     


#EJERCICIO 3

# def validarEmail(email):

#     posArroba = int(0)
#     emailValido = False
    
#     correo = email
    
    
#     if correo.find("@") > 0:
#         posArroba = int(correo.find("@"))
#         if correo.find(".", posArroba, -1) < (len(correo) -1) and correo.find(".",posArroba ,-1) > posArroba and 1 < correo.find(".",posArroba, -1) - posArroba:

            
#             emailValido = True
                
    
    
#     return  emailValido



# baseDatos = {}

# seguir = True

# while seguir:
#     seguir = True

#     validacionCorreo = False
#     tecla = ""

#     nombre = input("Introduce el nombre del usuario: ").title()

#     apellidos = input("Introduce los apellidos del usuario: ").title()
#     edad = ""
#     while not edad.isnumeric():
#         edad = input("Introduce la edad del usuario: ")
#         if not edad.isnumeric():
#             print("La edad no es valida")
    
#     sexo = input("Introduce el sexo del usuario: ")
    
#     telefono = input("Introduce el telefono del usuario: ")
    
#     correo = ""
    
#     while not validacionCorreo:
#         correo = input("Introduce el correo del usuario: ")
#         validacionCorreo = validarEmail(correo)
#         if validarEmail(correo) == False:
#             print("El correo no es vlaido, introduzcalo de nuevo")
        
        

#     baseDatos.setdefault(nombre, dict(nombre = nombre, apellidos = apellidos, edad = edad, sexo = sexo, telefono = telefono, correo = correo))
#     print("Esto es la base de datos :", baseDatos)


#     tecla = input("Si no quiere introducir mas usuarios pulse k.\n").lower()
#     if tecla == "k":
#         seguir = False

        
# #EJERCICIO 2
# """

# def del_reves(texto):
#     i = len(texto)-1
#     texto_reves = ""
#     while i >= 0:
#         texto_reves += texto[i]
#         i -= 1
#     return texto_reves

# palabra = input("Introduce la palabra que quieres saber si es un palindromo: ").lower()


# palabra_reves = del_reves(palabra)


# if palabra == palabra_reves:
#     print(palabra, " es un palindromo.")
# else:
#     print(palabra, "no es un palindromo")
# """


# #EJERCICIO 1
# """
# def ordenar(lista):  
    
#     for i in range(0,len(lista)-1):  
#         for j in range(len(lista)-1):  
#             if(lista[j]>lista[j+1]):  
#                 temporal = lista[j]  
#                 lista[j] = lista[j+1]  
#                 lista[j+1] = temporal  
#     return lista  


# numerosLoteria = []
# posibleNumeroGanador = 0
# complementario = 0
# reintegro = 0
# for i in range(0,15):
#     numeroValido = False
#     while not numeroValido:
#         print("Introduce el ",i+1,"ª numero ganador de la loteria")
#         posibleNumeroGanador = input()
#         if posibleNumeroGanador.isnumeric():
#             posibleNumeroGanador = int(posibleNumeroGanador)
        
#             if posibleNumeroGanador <= 49:    
#                 numerosLoteria.append(posibleNumeroGanador)
#                 numeroValido = True
#             else:
#                 print("El numero no es valido")
#         else:
#             print("no es numerico")
# numerosLoteria = ordenar(numerosLoteria)
# complementarioValido = False
# while not complementarioValido: 
#     complementario = input("Introduce el numero complementario: ")
#     if complementario.isnumeric():
#         numerosLoteria.append(str(complementario))
#         complementarioValido = True
#     else:
#         print("el complementario no es valido")
        
# reintegroValido = False
# while not reintegroValido: 
#     complementario = input("Introduce el numero complementario: ")
#     if complementario.isnumeric():
#         numerosLoteria.append(str(complementario))
#         reintegroValido = True
#     else:
#         print("el reintegro no es valido")
        

# print(numerosLoteria)
# """
