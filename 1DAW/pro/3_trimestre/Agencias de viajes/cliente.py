from errores import *
from nif import Nif


class Cliente():
    def __init__(self, nif, nombre, apellido1, apellido2):
        self._nif = nif
        self.nombre = nombre
        self.apellido1 = apellido1
        self.apellido2 = apellido2
        
    @property
    def nif(self):
        return self._nif
    @nif.setter
    def nombre(self,nif):
        if Nif.nif_valido(nif):
            self._nif = nif
            return self._nif
        else: 
            raise NifNoValido
        
    
