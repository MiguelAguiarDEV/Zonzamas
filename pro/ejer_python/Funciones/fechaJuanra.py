from datetime import date


#01 de Octubre de 2022
def editar_fecha(fecha : str = ""):
    
    if fecha == "":
        today = date.today()
        fecha = str(today).replace("-","")
    
    
    if fechaValida(fecha):
        #Aquí ya es seguro que fecha tiene formato 
        #AAAAMMDD
        #01234567
        
        dia  = fecha[6:]
        mes  = mes_a_texto(fecha[4:6])
        anho = fecha[0:4]
        
        
        
        resultado = "{} de {} de {}".format(dia,mes,anho)
        
    else:
        resultado = "Fecha con formato incorrecto"
        
    return resultado
    
def mes_a_texto(mes : str):
    
    texto_mes = ''
    
    if mes == "01":
        texto_mes = "Enero" 
    elif mes == "02":
        texto_mes = "Febrero"
    elif mes == "03":
        texto_mes = "Marzo"
    elif mes == "04":
        texto_mes = "Abril"
    elif mes == "05":
        texto_mes = "Mayo"
    elif mes == "06":
        texto_mes = "Junio"
    elif mes == "07":
        texto_mes = "Julio"
    elif mes == "08":
        texto_mes = "Agosto"
    elif mes == "09":
        texto_mes = "Septiembre"
    elif mes == "10":
        texto_mes = "Octubre"
    elif mes == "11":
        texto_mes = "Noviembre"
    elif mes == "12":
        texto_mes = "Diciembre"
    else:
        texto_mes = "Formato incorrecto"
        
    return texto_mes

def fechaValida(fecha :str):
    resultado = False
    
    
    if len(fecha) == 8 and fecha.isnumeric():
        
        dia  = fecha[6:]
        mes  = fecha[4:6]
        anho = fecha[0:4]
        
        if int(mes) >= 1 and int(mes) <= 12:
            
            if (mes == '01' or mes == '03' or mes == '05' or mes == '07' or mes == '08' or mes == '10' or mes == '12'):
                if int(dia) >= 1 and int(dia) <= 31:
                    resultado = True
            elif mes == '02' and int(dia) >= 1 and int(dia) <= 29:
                resultado = True
            elif int(dia) >= 1 and int(dia) <= 30:
                resultado = True
                    
    
    return resultado
        
print(editar_fecha("19850210"))
print(editar_fecha())

print(editar_fecha("19850231"))