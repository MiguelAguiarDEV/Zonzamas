class Vector():
    def __init__(self,i: int,j: int,k: int):
        self.i = i
        self.j = j
        self.k = k

    def __mul__(self,vector2):
        return (self.i * vector2.i) + (self.j * vector2.j) +  (self.k * vector2.k)         


    def __pow__(self,vector2):
        return Vector((self.j * vector2.k - self.k * vector2.j),(self.i * vector2.k - self.k * vector2.j),(self.i * vector2.j - self.j * vector2.i))

    def __str__(self):
        return f"{self.i}i,{self.j}j,{self.k}k"

vector1 = Vector(5,4,3)
vector2 = Vector(6,7,8)

u = Vector(3, 1, 0) 
v = Vector(2, 1, -1)


print(vector1 * vector2)

print(vector1 ** vector2)