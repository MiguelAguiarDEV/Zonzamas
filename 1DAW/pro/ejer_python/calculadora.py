terminar = bool(False)
tecla = ""

while terminar == False:
    terminar = True
    print("""
        
    ###########################################################
    #               Bienvenido a la Calculadora               #
    ###########################################################
    Inserte la operación que va a realizar:
    1: Suma (+)
    2: Resta (-)      
    3: Multiplicación (*)
    4: División (/)
        
    """)

    operacion = input()

    if operacion == '1' or operacion == '2' or operacion == '3' or operacion == '4' or operacion == '+' or operacion == '-' or operacion == '/' or operacion == '*':

        if operacion == '1' or operacion == '+': #Suma
            
            sumando_1 = float(input("Introduce el primer sumando: "))
            sumando_2 = float(input("Introduce el segundo sumando: "))
            
            resultado = sumando_1 + sumando_2
            
        elif operacion == '2' or operacion == '-': #Resta
            
            minuendo = float(input("Introduce el minuendo: "))
            sustraendo = float(input("Introduce el sustraendo: "))
            
            resultado = minuendo - sustraendo
            
        elif operacion == '3' or operacion == '*': #Multiplicación
            
            multiplicando = float(input("Introduce el multiplicando: "))
            multiplicador = float(input("Introduce el multiplicador: "))
            
            resultado = multiplicando * multiplicador
            
        elif operacion == '4' or operacion == '/': #Multiplicación
            dividendo = float(input("Introduce el dividendo: "))
            divisor = float(input("Introduce el divisor: "))
            
            resultado = dividendo / divisor
            
            
        print("El restulado es: " + str(resultado))
        
    else:
        
        print("No ha insertado una operación válida.")
    print("""
          
    ###############################################################
    #          Si quiere realizar otra operacion pulse "K"        #
    ###############################################################
            
          
    """)
    tecla = str(input())   
    if tecla == "K" or tecla == "k" :
        terminar = False
        

        