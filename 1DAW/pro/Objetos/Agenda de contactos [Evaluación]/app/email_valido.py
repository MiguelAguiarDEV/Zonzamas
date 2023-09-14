def validarEmail(email):

    posArroba = int(0)
    emailValido = False
    
    correo = email
    
    
    if correo.find("@") > 0:
        posArroba = int(correo.find("@"))
        if correo.find(".", posArroba, -1) < (len(correo) -1) and correo.find(".",posArroba ,-1) > posArroba and 1 < correo.find(".",posArroba, -1) - posArroba:

            print(correo.find(".", correo.find(".",posArroba ,-1)))
            emailValido = True
                
    
    
    return  emailValido
