import math

puntos = [(3, 4), (1, 2), (0, 8), (0, 1)]

puntos_ordenador = sorted(puntos, key = lambda punto: math.sqrt(punto[0]**2 + punto[1]**2))

print(puntos_ordenador)


