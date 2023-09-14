dni = ""
letras = 'TRWAGMYFPDXBNJZSQVHLCKE'
numerosDNI = int()
letra = ""


    #Introduce el dni
dni = input("Introduce tu DNI: ")
dni = dni.upper()

if len(dni) != 9 and dni[0:8].isnumeric():
    print("El DNI solo tiene 9 caracteres")

else:
    numerosDNI = dni[0:len(dni)-1]
    letra = letras[int(numerosDNI) % 23]


    #Compara la variable letra con el ultimo caracter de la cadena DNI.
    if letra == dni[len(dni)-1]:
        #Si letra = al ultimo caracter de DNI muestra "el dni es valido"
        print("El DNI: ",dni ," es valido.")
    else:
        print("El DNI: ",dni ," es invalido.")
