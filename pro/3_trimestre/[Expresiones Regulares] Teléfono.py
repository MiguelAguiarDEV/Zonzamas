import re


def validar_numero_telf(telf):
    patron = r"^\+[0-9]{0,2}[\s]?\([0-9]{0,2}\)[\s]?[0-9]+[\-][0-9]+$"
    return re.match(patron,telf) is not None

print(validar_numero_telf("+52 (55) 1234-5678"))