import datetime
from calendar import weekday
from Clase_Calendario import *



def fechaValida(fecha : int):
    esValido = False
    if int(fecha[4:6]) <= 12 and int(fecha[6: ]) <= 31 and fecha.isnumeric() and int(fecha[4:6]) > 0 and int(fecha[6: ]) > 0:
        
        esValido = True
        
    return  esValido



class CalendarioLaboral(Calendario):

    
    
    
    def __init__(self):
        super().__init__()
        
        self.dias_no_laborales = []    
    
    def dias_no_laborales(self):
        
        return self.dias_no_laborales
        
    
    def set_tipo_dia(self,dia, tipo):

        dia = str(dia)

        if fechaValida(dia) and datetime(int(dia[0:4]),int(dia[4:6]),int(dia[6:])).weekday() not in [5, 6]:
            
            if dia in self.dias_no_laborales and tipo.upper() == "L":
                self.dias_no_laborales.remove(dia)
                
                return f"El dia{dia[6:]} de {dia[4:6]} del {dia[0:4]} ahora es un dia laboral."    
            
            
            if tipo.upper() == "N" and dia not in self.dias_no_laborales:
                
                self.dias_no_laborales.append(dia)
                return "Se a insertado un dia no laborable."
            elif dia in self.dias_no_laborales:
                return f"El dia{dia[6:]} de {dia[4:6]} del {dia[0:4]} ya es un dia no laborable."
        else:
            return "Introduce una fecha valida y que se diferente a sabado y domingo."


    def hoy(self):
        return f"Hoy es {datetime.today()[8:]} de MM de AAAA. [Laboral|No Laboral]"
    
    
    
    
calendario_laboral = CalendarioLaboral()


print(calendario_laboral.set_tipo_dia(20230310,"N")) 
print(calendario_laboral.set_tipo_dia(20230311,"N")) #Es sabado