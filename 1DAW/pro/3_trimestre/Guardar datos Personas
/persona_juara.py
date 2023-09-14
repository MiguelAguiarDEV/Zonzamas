"""
    Crea un programa que solicite los datos de una Persona: Nombre, apellido1, apellido2, email, nif, dirección, código postal.
La gestión de estos datos, la debe realizar de la forma más acorde posible a los conceptos que has aprendido hasta ahora.
Cada persona creada, deberá guardar un registro en un fichero llamado personas.txt

"""

from email import Email
from direccion import Direccion


import ast
import json

class Persona():

    archivo_datos = '/home/juanra/Escritorio/python/persona/info.json'

    @staticmethod
    def buscar(texto_a_buscar):
        file = open(Persona.archivo_datos,'r')

        encontrados = {}

        contenido = file.read()

        datos_persona = ast.literal_eval(contenido)


        for nif, persona in datos_persona.items():

            if texto_a_buscar in nif:
                encontrados[nif] = persona

            if texto_a_buscar in str(persona.values()):
                encontrados[nif] = persona

        return encontrados

    def guardar(self):


        file = open(Persona.archivo_datos,'r')

        contenido = file.read()

        datos_persona = ast.literal_eval(contenido)

        file.close()

        file = open(Persona.archivo_datos,'w')

        """
        datos_persona[self.nif] = {

            'nombre' : self.nombre
           ,'apellido1' : self.apellido1
           ,'apellido2' : self.apellido2
           ,'email' : self.email
           ,'direccion' : self.direccion
           ,'codigo_postal' : self.codigo_postal
        }
        """


        datos_persona[self.nif] = vars(self)

        #print(datos_persona)


        file.write(json.dumps(datos_persona))





        """
        contenido = contenido + datos_persona

        file.close()
        """


    @staticmethod
    def validar_nif(nif):
        ValidarNIF = 'TRWAGMYFPDXBNJZSQVHLCKE'
        nif = nif.upper()
        if not nif[0:-1].isnumeric():
            return False

        dni = int(nif[0:-1])

        posLetra = dni % 23
        return ValidarNIF[posLetra] == nif[-1]




    def __init__(self, nombre= '',apellido1='',apellido2='', email='',nif='', direccion='', codigo_postal=''):
        self.nombre     = nombre
        self.apellido1  = apellido1
        self.apellido2  = apellido2
        self.__email    = email
        self.__nif      = nif
        self.direccion  = direccion
        self.__codigo_postal  = codigo_postal


    @property
    def email(self):
        return self.__email

    @email.setter
    def email(self,nuevo_email):
        if Email.validar(nuevo_email):
            self.__email = nuevo_email
        else:
            raise Exception('email','El E-mail es inválido. ')

    @property
    def codigo_postal(self):
        return self.__codigo_postal

    @codigo_postal.setter
    def codigo_postal(self,nuevo_codigo_postal):
        if Direccion.validar_codigo_postal(nuevo_codigo_postal):
            self.__codigo_postal = nuevo_codigo_postal
        else:
            raise Exception('codigo_postal','El código postal es inválido. ')


    @property
    def nif(self):
        return self.__nif

    @nif.setter
    def nif(self,nuevo_nif):
        if Persona.validar_nif(nuevo_nif):
            self.__nif = nuevo_nif
        else:
            raise Exception('nif','El NIF es inválido. ')


"""
andres = Persona()

andres.nombre = "Andrés"
andres.apellido1 = "García"
andres.apellido2 = "Arrocha"
andres.email = "andresgarcia@gmail.com"
andres.direccion = "C/ León y Castillo N182"
andres.nif = "78551006A"
andres.codigo_postal = "35500"


andres.guardar()
"""
