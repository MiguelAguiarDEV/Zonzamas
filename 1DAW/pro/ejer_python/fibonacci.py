numeroSiguiente = 0
numeroAnterior = 0
numeroActual = int(input("Introduce el primer numero"))
final = int(input("introduce final: "))
print(numeroAnterior)
print(numeroActual)
while numeroSiguiente < final:
    
    numeroSiguiente = numeroActual + numeroAnterior
    print(numeroSiguiente)
    numeroAnterior = numeroActual             
    numeroActual = numeroSiguiente

    
    
    