



from viaje import Viaje
from avion import Avion


opciones = """ 
    Inserte una de las siguientes opciones disponibles:
    
    [I]nsertar un nuevo viaje.
    [C]omprar un billete.
    [S]alir del programa.

"""


opcion = input(opciones)



while opcion != 'S':
    
    if opcion == 'I':
        
        avion_cargado = False
        
        opciones_aviones = "Seleccione, un avión de la lista: " + Avion.representacion()
        viaje = Viaje()        
        
        while not avion_cargado:
        
            try:

                
                if not viaje.origen:
                    viaje.origen  = input("Inserte el origen del viaje: ")
                
                if not viaje.destino:
                    viaje.destino = input("Inserte el destino del viaje: ")
                
                if not viaje.avion:              
                    viaje.avion = input(opciones_aviones)
                    
                    
                if not viaje.precio:
                    viaje.precio = float(input("Inserte un precio de billete. "))
                
                
                avion_cargado = True
            
            except Exception as err:
                print(err[1], end= "")
                
        viaje.guardar()
                
        
        
            
        
        
        
    elif opcion == 'C':
        pass
    
    opcion = input("Desea realizar otra operación:\n" + opciones)