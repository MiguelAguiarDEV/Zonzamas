from tkinter import *
from tkinter import ttk
from validaciones import *

class Aplicacion():
    
    def on_key_press(self, key):
        self.epantalla.focus_set()
        
        if key.char in ["/","+","-","*"]:
            self.operador1 = self.pantalla.get()[:-1]
            self.operacion = key.char
            self.pantalla.set("")

        elif key.char == "=":
            self.operador2 = self.pantalla.get()[:-1]

            self.pantalla.set(eval(f'{self.operador1} {self.operacion} {self.operador2}'))
            
        
    def __init__(self):
        
        self.consola = ''
        self.raiz = Tk()
        
        self.raiz.resizable(width=False,height=False)

        self.raiz.title('Calculadora')
        
        self.raiz.bind("<KeyPress>", self.on_key_press)

        self.operador1 = None
        self.operador2 = None
        self.operacion = None
        self.resultado = None
        self.pantalla = StringVar()
        self.epantalla = ttk.Entry(self.raiz, textvariable=self.pantalla)
        self.epantalla.grid(row=1,column=0,columnspan=4)
        
        


        self.boton1 = Button(self.raiz, text='1',width=10,height=2, command=lambda: [self.insertar_numero('1'),self.on_key_press,self.epantalla.icursor(END)])
        self.boton1.grid(row=2, column=0)

        self.boton2 = Button(self.raiz, text='2',width=10,height=2, command=lambda: self.insertar_numero('2'))
        self.boton2.grid(row=2, column=1)

        self.boton3 = Button(self.raiz, text='3',width=10,height=2, command=lambda: self.insertar_numero('3'))
        self.boton3.grid(row=2, column=2)

        self.boton4 = Button(self.raiz, text='4',width=10,height=2, command=lambda: self.insertar_numero('4'))
        self.boton4.grid(row=3, column=0)

        self.boton5 = Button(self.raiz, text='5',width=10,height=2, command=lambda: self.insertar_numero('5'))
        self.boton5.grid(row=3, column=1)

        self.boton6 = Button(self.raiz, text='6',width=10,height=2, command=lambda: self.insertar_numero('6'))
        self.boton6.grid(row=3, column=2)

        self.boton7 = Button(self.raiz, text='7',width=10,height=2, command=lambda: self.insertar_numero('7'))
        self.boton7.grid(row=4, column=0)

        self.boton8 = Button(self.raiz, text='8',width=10,height=2, command=lambda: self.insertar_numero('8'))
        self.boton8.grid(row=4, column=1)

        self.boton9 = Button(self.raiz, text='9',width=10,height=2, command=lambda: self.insertar_numero('9'))
        self.boton9.grid(row=4, column=2)

        self.boton0 = Button(self.raiz, text='0',width=10,height=2, command=lambda: self.insertar_numero('0'))
        self.boton0.grid(row=5, column=0)

        self.boton_suma = Button(self.raiz, text='+', width=10,height=2,command=lambda: self.insertar_operacion('+'))
        self.boton_suma.grid(row=2, column=3)

        self.boton_resta = Button(self.raiz, text='-', width=10,height=2,command=lambda: self.insertar_operacion('-'))
        self.boton_resta.grid(row=3, column=3)

        self.boton_mult = Button(self.raiz, text='*', width=10,height=2,command=lambda: self.insertar_operacion('*'))
        self.boton_mult.grid(row=4, column=3)

        self.boton_div = Button(self.raiz, text='/', width=10,height=2,command=lambda: self.insertar_operacion('/'))
        self.boton_div.grid(row=5, column=3)

        self.boton_punto = Button(self.raiz, text='.', width=10,height=2,command=lambda: self.insertar_punto())
        self.boton_punto.grid(row=5, column=1)

        self.boton_igual = Button(self.raiz, text='=', width=10,height=2,command=lambda: self.calcular_resultado())
        self.boton_igual.grid(row=5, column=2)

        self.boton_clear = Button(self.raiz, text='C', width=10,height=2,command=lambda: self.limpiar_pantalla())
        self.boton_clear.grid(row=6, column=0, columnspan=2)

        self.boton_borrar = Button(self.raiz, text='<-', width=10,height=2,command=lambda: self.borrar_caracter())
        self.boton_borrar.grid(row=6, column=2, columnspan=2)
            
        
        
        self.raiz.mainloop()

    def insertar_numero(self,numero):
        if validar_numero(numero):
            self.pantalla.set(self.pantalla.get() + numero)
        
        
    
    
        
def main():
    mi_app = Aplicacion()
    return 0
if __name__ == '__main__':
    main()