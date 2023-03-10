lista_asignaturas = []
seguir = True
suma_notas = 0
i = -1


while seguir:
    i += 1
    lista_asignaturas.append(input("Introduce la asignatura: "))
    lista_asignaturas[i] = int(input("Introduce la nota de "+ lista_asignaturas[i] + ":"))
    
    
    if input('\nSi quiere seguir introduciendo notas pulse "K"') == "k":
        seguir = True
    else:
        seguir = False
    
for asignatura in lista_asignaturas :
    suma_notas += asignatura
if suma_notas == 0:
    print ("\n La nota nota_media es: 0")
else:
    nota_media = suma_notas / len(lista_asignaturas)
    print ("\n La nota nota_media es: ",nota_media)    

    print ("\n La nota nota_media es: ",nota_media)
    
    
    
    
    
    
#    metodo juanra
#    
#modulo = '-'
#
#listaModulos = []
#
#
#while modulo != "":
#    
#    modulo = input("Inserta un módulo o deja vacío para continuar:\n")   
#    
#    if modulo != '':
#        listaModulos.append(modulo)
#    
#    
##notas = 0
##for modulo in listaModulos:
##    
##    notas += float(input("Inserta la nota que has sacado en " + modulo + ":\n"))
#
#totalNotas = 0
#totalModulos=0
#for modulo in listaModulos:
#    
#    nota = float(input("Inserta la nota que has sacado en " + modulo + ":\n"))
#    
#    totalNotas = totalNotas + nota
#    totalModulos += 1
#    
#
#print("La nota media de todos los modulos es igual a " +  str(totalNotas/totalModulos) )
#    
#        