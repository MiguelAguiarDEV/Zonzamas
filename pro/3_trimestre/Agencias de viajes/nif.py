
class Nif():

    @staticmethod
    def nif_valido(self, nif):
        if len(nif) == 9 and nif != '':
            letra = nif[-1:].upper()
            dni = int(nif[0:8])
            restoLetra = dni % 23
            comprobacion = "TRWAGMYFPDXBNJZSQVHLCKE"
        
            return comprobacion[restoLetra] == letra #buscar un elemento en una cadena mediante una posicion
        
        return False