class Direccion():
    
    @staticmethod
    def validar_codigo_postal(codigo_postal : str):
        
        return codigo_postal.isnumeric() and len(codigo_postal) == 5