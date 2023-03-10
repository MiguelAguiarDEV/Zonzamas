posArroba = int(0)
emailValido = False

while not emailValido:
    correo = input("Introduce un email valido: ")


    if correo.find("@") > 0:
        posArroba = int(correo.find("@"))
        if correo.find(".", posArroba, -1) < (len(correo) -1) and correo.find(".",posArroba ,-1) > posArroba and 1 < correo.find(".",posArroba, -1) - posArroba:
            emailValido = True
            


    if not emailValido:
        print(correo + " NO ES un email valido")
    else:
        print(correo + " ES un email valido")