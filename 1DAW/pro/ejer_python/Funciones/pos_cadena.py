def subCadena(texto, inicio, final):
    
    subCadena = ""
    
    if inicio <= final and len(texto):
        while inicio <= final:
            subCadena += texto[inicio]
            inicio += 1
    return subCadena



def posCadena(texto, subTexto):
        
    i = int(0)
    
    while i + len(subTexto) <= len(texto):
        
        if subCadena(texto,i,i+ len(subTexto)-1) == subTexto:
            return i
        else:
            i += 1 
            
    return -1


texto = str(input("Introduce el texto en en el que quieres buscar\n"))

subTexto = str(input("Introduce el subTexto del que quieres saber la posicion\n"))

print(posCadena(texto, subTexto))