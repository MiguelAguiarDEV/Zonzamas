"""
num = int(input("Introduce un numero"))
resultado = "mayor"
if num == 100:
    resultado = "igual"
elif num < 100:
    resultado = "menor"
print(resultado)
"""

num = int(input("Introduce un numero"))

if num == 100:
    print("es igual")
elif num < 100:
    print("es menor")
else:
    print("es mayor")
    