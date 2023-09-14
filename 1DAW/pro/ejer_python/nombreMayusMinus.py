terminar = False
aux = ""
while not terminar:
    user_name = input("Introduzca su nombre: ")
    print("Lowercase: ",user_name.lower())
    print("Uppercase: ",user_name.upper())
    
    user_name = user_name.lower().strip()
    user_name = user_name[0].upper() + user_name[1:]
    
    i = 0
    while i < len(user_name):
        if user_name[i] == " ":
            user_name = user_name.replace( user_name[i+1:], user_name[i+1].upper() + user_name[i+2:] ) 
        i += 1
    print("Title: ",user_name)

        
         
    aux = input("Quiere introducir otro nombre. (Si / No)")
    if aux != "Si" and aux != "si":
        terminar = True