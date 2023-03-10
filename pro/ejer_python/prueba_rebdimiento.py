def contar_palabras(oracion):
    oracion = oracion.split(" ")
    resultado = {}
    for palabra in oracion:
        frecuencia = 0
        if palabra not in resultado and palabra != ".":
            for palabra2 in oracion:
                if palabra == palabra2:
                    frecuencia += 1
            resultado[palabra] = frecuencia            
    return resultado

  
            
        



oracion = "El perro corre en el parque. El gato maulla en el tejado."
print(contar_palabras(oracion))      