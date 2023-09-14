def in_dict(dict:dict,clave_buscar:str):
    for clave in dict:
        if clave == clave_buscar:
            return True
    return False    




class Electrodomestico:
    
    dict_eficiencia = {
                     "A": "Inferior a 44,6 kWh/m2/año"
                    ,"B": "Inferior a 72,3 kWh/m2/año"
                    ,"C": "Inferior a 112,1 kWh/m2/año"
                    ,"D": "Inferior a 172,3 kWh/m2/año"
                    ,"E": "Inferior a303,7 kWh/m2/año"
                    ,"F": "Inferior a 382,6 kWh/m2/año"
                    ,"G": "Superior a 382,6 kWh/m2/año"
                    }
    
    
    def __init__(self,tipos_eficiencia:dict,precio:float,marca:str):
        self.tipos_eficiencia = tipos_eficiencia
        self.prcio = precio
        self.marca = marca
        
        
    @property
    def tipos_eficiencia(self):
        return self.__tipos_eficiencia
    @tipos_eficiencia.setter
    def tipos_eficiencia(self,tipos_eficiencia):
        
        if in_dict(Electrodomestico.dict_eficiencia,tipos_eficiencia):
            self.__tipos_eficiencia = tipos_eficiencia
        
    def mostrar_datos(self):
        return f"Eficiencia: {self.tipos_eficiencia}, {Electrodomestico.dict_eficiencia.get(self.tipos_eficiencia)}\nPrecio: {self.prcio}$\nMarca: {self.marca.title()} "




#freidora = Electrodomestico("A",45.99,"bosh")
#print(freidora.mostrar_datos())