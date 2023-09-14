def ordenar(lista):  
    
    for i in range(0,len(lista)-1):  
        for j in range(len(lista)-1):  
            if(lista[j]>lista[j+1]):  
                temporal = lista[j]  
                lista[j] = lista[j+1]  
                lista[j+1] = temporal  
    return lista  