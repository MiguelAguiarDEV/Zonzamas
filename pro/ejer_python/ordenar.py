def ordenar(lista):  
    
    for i in range(0,len(lista)-1):  
        for j in range(len(lista)-1):  
            if(lista[j]>lista[j+1]):  
                temporal = lista[j]  
                lista[j] = lista[j+1]  
                lista[j+1] = temporal  
    return lista  

seguir = True
while seguir:
    seguir = False
    lista = input("Introduce los numeros que quieras ordenar separados por espacios: ").split()
    i = 0 
    for numero in lista:
        
        if lista[i].replace("-", "").isnumeric() == False:
            print("ERROR: Solo puedes introducir numeros.")
            seguir = True
        i += 1



        
####################### METODO 2 #####################################
#seguir = True
#while seguir:
#    num = input('Introudce el numero en la lista. Si no quieres introducir mas ponga cualquier letra.')
#
#    if num.isnumeric():
#        lista.append(int(num))
#
#    else:
#        seguir = False


##################  METODO 3 para introducir los numeros ##############3
#seguir = True
#while seguir:  
#    
#    lista.append(int(input("Intoduce un numero para la lista.\n")))
#    print("Estos son los numeros que tienes en la lista.\n",lista)
#
#    quiereSeguir = input("Quieres seguir introduciendo numeros? Si/No")
#    if quiereSeguir != "Si" and quiereSeguir != "si"  and quiereSeguir != "SI":
#        seguir = False

print("La lista sin ordenar es: ", lista)
print("La lista ordenada es: ", ordenar(lista))  