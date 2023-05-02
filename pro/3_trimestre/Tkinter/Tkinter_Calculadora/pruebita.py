from tkinter import *
from tkinter import ttk
from validaciones import *

class Aplicacion():
    
    def on_key_press(self, key):
        self.epantalla.focus_set()
        if key in ["/","+","-","*"]:
            self.operacion = key
            self.operador1 = self.pantalla.get()
            self.pantalla.set("")
            
        elif key == "=":
            self.operador2 = self.pantalla.get()
            self.pantalla.set(eval(f'{self.operador1} {self.operacion} {self.operador2}'))
            self.operador1 = self.pantalla.get()
            self.operador2 = None
            self.operacion = None
        
        elif key.char in ["/","+","-","*"]:
            self.operador1 = self.pantalla.get()[:-1]
            self.operacion = key.char
            self.pantalla.set("")

        elif key.char == "=":
            self.operador2 = self.pantalla.get()[:-1]
            self.pantalla.set(eval(f'{self.operador1} {self.operacion} {self.operador2}'))
            self.operador1 = self.pantalla.get()
            self.operador2 = None
            self.operacion = None
        
        elif key.keycode == 36:
            self.operador2 = self.pantalla.get()
            self.pantalla.set(eval(f'{self.operador1} {self.operacion} {self.operador2}'))
            self.operador1 = self.pantalla.get()
            self.operador2 = None
            self.operacion = None

        self.epantalla.icursor(END)
    
    def insertar_numero(self, numero):
        if self.pantalla.get() == '0':
            self.pantalla.set(numero)
        else:
            self.pantalla.set(self.pantalla.get() + numero)
    
    def insertar_punto(self):
        if '.' not in self.pantalla.get():
            self.pantalla.set(self.pantalla.get() + '.')
    
    def borrar_caracter(self):
        self.pantalla.set(self.pantalla.get()[:-1])
    
    def borrar_todo(self):
        self.operador1 = None
        self.operador2 = None
        self.operacion = None
        self.pantalla.set('0')
    
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
        
        


        self.boton1 = Button(self.raiz, text='1',width=10,height=2, command=lambda: [self.insertar_numero('1'),self.epantalla.icursor(END)])
        self.boton1.grid(row=2, column=0)

        self.boton2 = Button(self.raiz, text='2',width=10,height=2, command=lambda: [self.insertar_numero('2'),self.epantalla.icursor(END)])
        self.boton2.grid(row=2, column=1)

        self.boton3 = Button(self.raiz, text='3',width=10,height=2, command=lambda: [self.insertar_numero('3'),self.epantalla.icursor(END)])
        self.boton3.grid(row=2, column=2)

        self.boton4 = Button(self.raiz, text='4',width=10,height=2, command=lambda: [self.insertar_numero('4'),self.epantalla.icursor(END)])
        self.boton4.grid(row=3, column=0)

        self.boton5 = Button(self.raiz, text='5',width=10,height=2, command=lambda: [self.insertar_numero('5'),self.epantalla.icursor(END)])
        self.boton5.grid(row=3, column=1)

        self.boton6 = Button(self.raiz, text='6',width=10,height=2, command=lambda: [self.insertar_numero('6'),self.epantalla.icursor(END)])
        self.boton6.grid(row=3, column=2)

        self.boton7 = Button(self.raiz, text='7',width=10,height=2, command=lambda: [self.insertar_numero('7'),self.epantalla.icursor(END)])
        self.boton7.grid(row=4, column=0)

        self.boton8 = Button(self.raiz, text='8',width=10,height=2, command=lambda: [self.insertar_numero('8'),self.epantalla.icursor(END)])
        self.boton8.grid(row=4, column=1)

        self.boton9 = Button(self.raiz, text='9',width=10,height=2, command=lambda: [self.insertar_numero('9'),self.epantalla.icursor(END)])
        self.boton9.grid(row=4, column=2)

        self.boton0 = Button(self.raiz, text='0',width=10,height=2, command=lambda: [self.insertar_numero('0'),self.epantalla.icursor(END)])
        self.boton0.grid(row=5, column=1)

        self.boton_punto = Button(self.raiz, text='.',width=10,height=2, command=lambda: [self.insertar_punto(),self.epantalla.icursor(END)])
        self.boton_punto.grid(row=5, column=0)

        self.boton_borrar = Button(self.raiz, text='CE',width=10,height=2, command=lambda: [self.borrar_todo(),self.epantalla.icursor(END)])
        self.boton_borrar.grid(row=5, column=2)

        self.boton_suma = Button(self.raiz, text='+',width=10,height=2, command=lambda: [self.on_key_press('+'),self.epantalla.icursor(END)])
        self.boton_suma.grid(row=2, column=3)

        self.boton_resta = Button(self.raiz, text='-',width=10,height=2, command=lambda: [self.on_key_press('-'),self.epantalla.icursor(END)])
        self.boton_resta.grid(row=3, column=3)

        self.boton_multiplicacion = Button(self.raiz, text='*',width=10,height=2, command=lambda: [self.on_key_press('*'),self.epantalla.icursor(END)])
        self.boton_multiplicacion.grid(row=4, column=3)

        self.boton_division = Button(self.raiz, text='/',width=10,height=2, command=lambda: [self.on_key_press('/'),self.epantalla.icursor(END)])

        self.boton_igual = Button(self.raiz, text='=',width=10,height=2, command=self.calcular_resultado)
        self.boton_igual.grid(row=6, column=3)

        self.boton_parentesis_izq = Button(self.raiz, text='(',width=10,height=2, command=lambda: [self.on_key_press('('),self.epantalla.icursor(END)])
        self.boton_parentesis_izq.grid(row=6, column=0)

        self.boton_parentesis_der = Button(self.raiz, text=')',width=10,height=2, command=lambda: [self.on_key_press(')'),self.epantalla.icursor(END)])
        self.boton_parentesis_der.grid(row=6, column=1)

        self.boton_raiz = Button(self.raiz, text='√',width=10,height=2, command=lambda: [self.on_key_press('sqrt('),self.epantalla.icursor(END)])
        self.boton_raiz.grid(row=6, column=2)
        self.raiz.mainloop()
    def insertar_numero(self, numero):
        self.epantalla.insert(END, numero)

    def insertar_punto(self):
        if self.epantalla.index(INSERT) == 0:
            self.epantalla.insert(END, '0.')
        else:
            expresion = self.epantalla.get()
            ultimo_caracter = expresion[-1]
            if ultimo_caracter.isdigit():
                self.epantalla.insert(END, '.')

    def on_key_press(self, key):
        if self.epantalla.index(INSERT) == 0:
            self.epantalla.insert(END, key)
        else:
            expresion = self.epantalla.get()
            ultimo_caracter = expresion[-1]
            if ultimo_caracter.isdigit() or ultimo_caracter == '.':
                self.epantalla.insert(END, key)

    def borrar_todo(self):
        self.epantalla.delete(0, END)

    def calcular_resultado(self):
        try:
            expresion = self.epantalla.get()
            resultado = str(eval(expresion))
            self.epantalla.delete(0, END)
            self.epantalla.insert(END, resultado)
        except:
            self.messagebox.showerror('Error', 'Expresión inválida')

    

def main():
    mi_app = Aplicacion()
    return 0
if __name__ == '__main__':
    main()