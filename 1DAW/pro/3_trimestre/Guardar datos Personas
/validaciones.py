###############################################
#      Clase con todas las validaciones       #
###############################################

class Validaciones():
    
    
    ###############################################
    #      Metodo para validar E-mail             #
    ###############################################
    def email_valido(self, email):
        
        return (email.count("@")==1) and ( email[-3:]==".es" or email[-4:]==".com") and (email.find(".es") > (email.find("@")+1) or  email.find(".com") > email.find("@")+1)



    ##########################################
    #      Metodo para validar NIF          #
    ##########################################
    def nif_valido(self, nif):
    
        if len(nif) == 9 and nif != '':
            letra = nif[-1:].upper()
            dni = int(nif[0:8])
            restoLetra = dni % 23
            comprobacion = "TRWAGMYFPDXBNJZSQVHLCKE"
        
            return comprobacion[restoLetra] == letra #buscar un elemento en una cadena mediante una posicion
        
        return False

    ###############################################
    #      Metodo para validar Teléfono          #
    ###############################################
    def telefono_valido(self, telefono):
        
        return len(telefono)== 9 and telefono.isnumeric()

