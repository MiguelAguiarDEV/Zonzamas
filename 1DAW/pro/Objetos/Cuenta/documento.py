
class Documento():
    
    def __init__(self) -> None:
        pass


    def nif_valido(self, nif):
        letrasDNI = 'TRWAGMYFPDXBNJZSQVHLCKE'
        if len(nif) == 9:
            dni = nif[0:-1]
            if dni.isnumeric():
                posLetra = int(dni)%23
                if nif[-1].upper() == letrasDNI[posLetra]:
                    return True

        return False    