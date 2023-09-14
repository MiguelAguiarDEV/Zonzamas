from persona import *

class Contacto(Persona):
    def __init__(self, nombre, primer_apellido, segundo_apellido, nif, edad, direccion,telf_fijo,telf_movil,email):
        super().__init__(nombre, primer_apellido, segundo_apellido, nif, edad)
        self.direccion = direccion
        self.telf_fijo = telf_fijo
        self.telf_movil = telf_movil
        self.email = email