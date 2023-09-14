import re

def validar_correo(correo):
    patron = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,3}$"
    return re.match(patron,correo) is not None


print(validar_correo("l1f.mgue@gmai.com"))