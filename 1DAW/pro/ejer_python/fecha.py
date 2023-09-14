#AAAAMMDD
def fechaValida(fecha : int):
    esValido = False
    if int(fecha[4:6]) <= 12 and int(fecha[6: ]) <= 31 and fecha.isnumeric() and int(fecha[4:6]) > 0 and int(fecha[6: ]) > 0:
        
        esValido = True
        
    return  esValido

def editar_fecha(fecha : str):
    dia = str(fecha[6: ])
    mes = str(fecha[4:6])
    año = str(fecha[0:4])
    
    meses = " 01Enero 02Febrero 03Marzo 04Abril 05Mayo 06Junio 07Julio 08Agosto 09Septiembre 10Octubre 11Noviembre 12Diciembre" 
           
    fechaNueva = "#{} de {} de {}".format(dia , meses[meses.find(mes) + 2 : meses.find(" ",meses.find(mes))], año)
        
         
    return fechaNueva

fecha = input("Introduce la fecha con formato AAAAMMDD que quieras modificar: ")

if fechaValida(fecha):
    
    print("La fecha modificada es: ", editar_fecha(fecha))

else:
    print("La fecha ", fecha, " no es valida")