import math

class Punto():
    def __init__(self,cordenada_x : int = 0, cordenada_y : int = 0):
        
        self.cordenada_x = cordenada_x
        self.cordenada_y = cordenada_y

    def __str__(self):
        return f"({self.cordenada_x}, {self.cordenada_y})"

    def cuadrante(self):

        if self.cordenada_x > 0 and self.cordenada_y > 0:
            return f"El punto {self} esta en el cuadrante 1."

        elif self.cordenada_x > 0 and self.cordenada_y < 0:
            return f"El punto {self} esta en el cuadrante 2."

        elif self.cordenada_x < 0 and self.cordenada_y < 0:
            return f"El punto {self} esta en el cuadrante 3."
        
        elif self.cordenada_x < 0 and self.cordenada_y > 0:
            return f"El punto {self} esta en el cuadrante 4."
        
        elif self.cordenada_x == 0 and self.cordenada_y == 0:
            return f"El punto {self} esta en el centro."        

        elif self.cordenada_x == 0 and self.cordenada_y != 0:
            return f"El punto {self} esta sobre el eje Y."
        
        elif self.cordenada_x != 0 and self.cordenada_y == 0:
            return f"El punto {self} esta sobre el eje X."

    def vector(self,otro_punto):
        vector_resultante = f"({otro_punto.cordenada_x - self.cordenada_x},{otro_punto.cordenada_y - self.cordenada_y})"
        return  f"El vector resultante entre el punto {self} y el punto {otro_punto} es {vector_resultante}"
        
    
    def distancia(self,otro_punto):
        distancia_resultante = math.sqrt((otro_punto.cordenada_x - self.cordenada_x)**2 + (otro_punto.cordenada_y - self.cordenada_y)**2)
        return f"La distancia entre el punto {self} y el punto {otro_punto} es {distancia_resultante}"
    
    


A = Punto(2,3)

B = Punto(5,5)

C = Punto(-3,-1)

D = Punto(0,0)

puntos = {"A" : A, "B" : B, "C" : C, "D" : D}

for nombre_punto, punto in puntos.items():
    print(nombre_punto, " = ", punto)


print(A.cuadrante())

print(C.cuadrante())

print(D.cuadrante())

print(A.vector(B))

print(B.vector(A))

print(A.distancia(B))

print(B.distancia(A))



origen = Punto(0,0)
mas_lejano = ""
for nombre_punto, punto in puntos.items():
    aux = punto
    nombre_aux = nombre_punto
    for nombre_punto, punto in puntos.items():
        if aux.distancia(origen) > punto.distancia(origen):
            mas_lejano = nombre_aux
        else:
            mas_lejano = nombre_punto
print(mas_lejano)


##Arreglat que le mas lejano es el D(0,0)

