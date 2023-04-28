from pynput import keyboard as kb
from abc import *
from tkinter import *
from tkinter import ttk


def validate_number(text):
    if text.isdigit():
        return True
    else:
        return False

class Aplicacion():

    ultima_tecla_pulsada = ""
    operacion = ""
    
    def __init__(self):
        self.raiz = Tk()
        self.raiz.title("Calculadora")

        self.valor1 = StringVar()
        self.resultado = StringVar()
        self.validation = self.raiz.register(validate_number)
        
        
        
        escuchador = kb.Listener(Aplicacion.asignar_operacion)
        
        escuchador.start()
        
        
        
        self.cvalor1 = ttk.Entry(self.raiz, validate="key", validatecommand=(self.validation, "%S"), textvariable=self.valor1,width=30, show="")
  
        self.cvalor1.pack(side=TOP, fill=X, expand=True,padx=5, pady=5)

        self.cvalor1.focus_set()
        self.raiz.mainloop()

    @abstractmethod
    def asignar_operacion(key):
        Aplicacion.ultima_tecla_pulsada = str(key)
        if Aplicacion.ultima_tecla_pulsada[1:-1] == "/":
            Aplicacion.operacion = Aplicacion.ultima_tecla_pulsada[1:-1]
            
        
    
   
def main():
    mi_app = Aplicacion()
    print(".")
    if Aplicacion.operacion == "/":
        print(Aplicacion.operacion)
    
    return 0
if __name__ == '__main__':
    main()