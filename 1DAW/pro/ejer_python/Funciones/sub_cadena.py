def subCadena(texto, inicio, final):
    
    subCadena = ""
    
    if inicio <= final and len(texto):
        while inicio <= final:
            subCadena += texto[inicio]
            inicio += 1
    return subCadena
texto = str(input("Introduce el Texto :\n"))
print("Siendo 1 el primer caracter del texto \n")
inicio = (int(input("Introduce el inicio de la subCadena :\n"))) - 1
final = (int(input("Introduce el final de la subcadena :\n"))) -1 

print("La subCadena es : ", subCadena(texto, inicio, final))