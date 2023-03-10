def del_reves(lista):
    i = len(lista)-1
    lista_reves = []
    while i >= 0:
        lista_reves.append(lista[i])
        i -= 1
    return lista_reves



tecla = ""
seguir = True
while seguir:

    num = int(input("incerte un numero para hacer el cuadrado: "))
    numSumas = num
    seguir = True
    centro = []
    i = num
    columnas = []


    while i > 0:
        centro.append(numSumas)
        numSumas -= 1
        columnas.append(centro[:])
        i -= 1
        
    print(columnas)    
    j = 0
    while len(columnas[j]) < num:
        columnas[j].append(columnas[j][(len(columnas[j]))-1])
        if len(columnas[j]) == num:
            j += 1


    for columna in columnas:
        columna.extend(del_reves(columna))
        del columna[num]
        
        
    columnas.extend(del_reves(columnas))
    del columnas[num]
    for i in columnas:
        print(i)
    
    tecla = input("si no quiere hacer otro cuadrado pulse k")
    if tecla == "K" or tecla == "k":
        seguir = False  
    
    
    
    
    

