class Tablamultiplicar:
    
    def crear(self,numero):
        i = 0
        Tablamultiplicar = "" 
        while i < 10:
            Tablamultiplicar += "#"+str(i)+" x "+str(numero)+" = "+str(i*numero)+"\n"
            i+=1
        return Tablamultiplicar    
        
            
tabla = Tablamultiplicar()

print(tabla.crear(5))