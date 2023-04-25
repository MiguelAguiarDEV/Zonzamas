

class Avion():
    
    
    tipos_aviones = ['Boeing 747', 'Boeing 737','Airbus a380']
    
    tipos = {
         tipos_aviones[0] : 700
        ,tipos_aviones[1] : 800
        ,tipos_aviones[2] : 900
    }
    
    def __init__(self, modelo='', capacidad= 700) -> None:
        
        self.modelo    = modelo
        self.capacidad = capacidad
        
        
    @staticmethod
    def representacion():
        
        informacion = ''
        i = 0
        for modelo, capacidad in Avion.tipos.items():
            
            informacion += f"""
                [{i}] Modelo: {modelo} Capacidad: {capacidad}
            
            """
            i += 1
            
        return informacion
            
            
print(Avion.tipos)