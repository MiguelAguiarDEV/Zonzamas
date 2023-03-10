class FizzBuzz:
    def __init__(self,booleano:bool):
        self.__booleano = booleano
        
    def mostrar(self):
        i = 0
        numeros_1_al_100 = ""
        if self.__booleano:
            while i < 101:
                numeros_1_al_100 += str(i)+"\n"
                i+=1
            
        else:   
            while i < 101:
                if i%3 == 0 and i%5 == 0:
                    numeros_1_al_100 += "fizzbuzz\n"    
                elif i%3 == 0:
                    numeros_1_al_100 += "fizz\n"
                elif i%5 == 0:
                    numeros_1_al_100 += "buzz\n"
                else:
                    numeros_1_al_100 += str(i)+"\n"
                i+=1
                    
        return numeros_1_al_100
        
tabla = FizzBuzz(False)
print(tabla.mostrar())

tabla = FizzBuzz(True)
print(tabla.mostrar())