lista = []

for i in range(0,1000):
    lista.append(i)





def numeros_pares(lista_numeros):
    return list(filter(lambda x: x%2 == 0,lista_numeros))

    
print(numeros_pares(lista))