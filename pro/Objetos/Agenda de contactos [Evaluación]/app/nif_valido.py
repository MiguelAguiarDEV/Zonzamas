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
            
            