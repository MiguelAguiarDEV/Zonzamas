from tkinter import *
from tkinter import ttk
from validaciones import *

class Aplicacion():
    
    def on_key_press(self, key):
        self.epantalla.focus_set()
        if key.char in ["/","+","-","*"]:
            self.operador1 = self.epantalla.get()
            self.operacion = key.char
            self.pantalla.set("")
        elif key.char == "=":
            
            
            
        
        
    def __init__(self):
        
        self.consola = ''
        self.raiz = Tk()
        
        self.raiz.resizable(width=False,height=False)

        self.raiz.title('Calculadora')
        
        self.raiz.bind("<KeyPress>", self.on_key_press)

        self.operador1 = None
        self.operacion = None
        self.resultado = None
        self.pantalla = StringVar()
        self.epantalla = ttk.Entry(self.raiz, textvariable=self.pantalla)
        self.epantalla.pack(side=TOP)
        
        

        self.boton1 = ttk.Button(self.raiz,text="1",command= lambda : self.insertar_numero("1") )
        self.boton1.pack(side=TOP)
        
        
        
        
        self.raiz.mainloop()

    def insertar_numero(self,numero):
        if validar_numero(numero):
            self.pantalla.set(self.pantalla.get() + numero)
        
        
    
    
        
def main():
    mi_app = Aplicacion()
    return 0
if __name__ == '__main__':
    main()