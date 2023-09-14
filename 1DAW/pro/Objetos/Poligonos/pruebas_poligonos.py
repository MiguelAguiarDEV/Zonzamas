from clase_poligono import Poligono
from clase_rectangulo import Rectangulo
from clase_triangulo import Triangulo


def datos_poligono(poligono: Poligono):
    
    tipo = poligono.tipo
    num_lados = poligono.num_lados 
    if poligono.tipo in ("Triangulo","Rectangulo"):
        area = poligono.calcular_area()
        return f"Tipo: {tipo}\nNumero de lados: {num_lados}\nArea: {area}"
    return f"Tipo: {tipo}\nNumero de lados: {num_lados}"
    
    
triangulo1 = Triangulo(3,4)


print(datos_poligono(triangulo1))