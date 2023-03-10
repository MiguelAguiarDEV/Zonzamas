def validaDNI(DNI):
    letrasDNI = 'TRWAGMYFPDXBNJZSQVHLCKE'
    nifUser=DNI
    nifEsValido=False
    errores = ""

    if len(nifUser)==9:
        dni=nifUser[0:-1]
        if dni.isnumeric():
            posLetra=int(dni)%23
            if nifUser[-1].upper()==letrasDNI[posLetra]:
                nifEsValido=True

        errores = "No tiene el tamaño correcto."
             
    return nifEsValido
            
            
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
