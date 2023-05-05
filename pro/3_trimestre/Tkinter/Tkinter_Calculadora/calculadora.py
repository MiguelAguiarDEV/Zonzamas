from tkinter import *
from tkinter import ttk



class Aplicacion():
    def __init__(self):
        
        self.consola = ''
        self.raiz = Tk()
        self.raiz.resizable(width=False,height=False)
        self.raiz.title('Calculadora')

        
        self.activada = False
        self.operador1 = ""
        self.operador2 = ""
        self.operacion = ""
        self.resultado = ""
        self.pantalla = StringVar()


#FRAME DE LA PANTALLA + CLEAR
        self.frame_pantalla = ttk.Frame(self.raiz)
        self.frame_pantalla.pack(side=TOP,fill="x")
    #PANTALLA
        self.epantalla = Entry(self.frame_pantalla,textvariable=self.pantalla,width=15)
        self.epantalla.config(background="black",fg="#11ff00",font=('Calculator', 30,"bold"))
        self.epantalla.pack(side=LEFT,expand=TRUE,fill="both")
      
        
#FRAME DE LA PRIMERA FILA        
        self.frame1 = ttk.Frame(self.raiz)
        self.frame1.pack(side=LEFT,expand=TRUE,fill=BOTH)
        
#BOTONES DE LA PRIMERA FILA
    #(
        self.boton_parentesis1 = Button(self.frame1, text='(', command=lambda: self.insertar_numero('('))
        self.boton_parentesis1.config(font=('Arial',12,""))
        self.boton_parentesis1.pack(expand=TRUE,fill="both")
    #7 
        self.boton7 = Button(self.frame1, text='7', command=lambda: self.insertar_numero('7'))
        self.boton7.config(font=('Arial',12,""))
        self.boton7.pack(expand=TRUE,fill="both")
    #4     
        self.boton4 = Button(self.frame1, text='4', command=lambda: self.insertar_numero('4'))
        self.boton4.config(font=('Arial',12,""))
        self.boton4.pack(expand=TRUE,fill="both")
    #1     
        self.boton1 = Button(self.frame1, text='1', command=lambda: self.insertar_numero('1'))
        self.boton1.config(font=('Arial',12,""))
        self.boton1.pack(expand=TRUE,fill="both")
    #.
        self.boton_borrar = Button(self.frame1, text='.', command=lambda: self.insertar_punto())
        self.boton_borrar.config(font=('Arial',12,""))
        self.boton_borrar.pack(expand=TRUE,fill="both")
        
        
        
#FRAME DE LA SEGUNDA FILA
        self.frame2 = ttk.Frame(self.raiz)
        self.frame2.pack(side=LEFT,expand=TRUE,fill=BOTH)
#BOTONES DE LA SEGUNDA FILA
    #)
        self.boton_parentesis2 = Button(self.frame2, text=')', command=lambda: self.insertar_numero(")"))
        self.boton_parentesis2.config(font=('Arial',12,""))
        self.boton_parentesis2.pack(expand=TRUE,fill="both")
    #8
        self.boton8 = Button(self.frame2, text='8', command=lambda: self.insertar_numero('8'))
        self.boton8.config(font=('Arial',12,""))
        self.boton8.pack(expand=TRUE,fill="both")
    #5
        self.boton5 = Button(self.frame2, text='5', command=lambda: self.insertar_numero('5'))  
        self.boton5.config(font=('Arial',12,""))
        self.boton5.pack(expand=TRUE,fill="both")
    #2  
        self.boton2 = Button(self.frame2, text='2', command=lambda: self.insertar_numero('2'))
        self.boton2.config(font=('Arial',12,""))
        self.boton2.pack(expand=TRUE,fill="both")
    #0
        self.boton0 = Button(self.frame2, text='0',command=lambda: self.insertar_numero("0"))
        self.boton0.config(font=('Arial',12,""))
        self.boton0.pack(expand=TRUE,fill="both")


#FRAME TERCERA FILA
        self.frame3 = ttk.Frame(self.raiz)
        self.frame3.pack(side=LEFT,expand=TRUE,fill=BOTH)
#BOTONES TERCERA FILA    
    #<-
        self.boton_borrar = Button(self.frame3, text='<-', command=lambda: self.borrar_caracter())
        self.boton_borrar.config(font=('Arial',12,""))
        self.boton_borrar.pack(expand=TRUE,fill="both")
    #9
        self.boton9 = Button(self.frame3, text='9', command=lambda: self.insertar_numero('9'))
        self.boton9.config(font=('Arial',12,""))
        self.boton9.pack(expand=TRUE,fill="both")
    #6

        self.boton6 = Button(self.frame3, text='6', command=lambda: self.insertar_numero('6'))
        self.boton6.config(font=('Arial',12,""))
        self.boton6.pack(expand=TRUE,fill="both")
    #3    
        self.boton3 = Button(self.frame3, text='3', command=lambda: self.insertar_numero('3'))
        self.boton3.config(font=('Arial',12,""))
        self.boton3.pack(expand=TRUE,fill="both")
    #=
        self.boton_igual = Button(self.frame3, text='=', command=lambda: self.calcular_resultado())
        self.boton_igual.config(font=('Arial',12,""))
        self.boton_igual.pack(expand=TRUE,fill="both")
    
    
    

#FRAME CUARTA FILA  
        self.frame4 = ttk.Frame(self.raiz)
        self.frame4.pack(side=LEFT,expand=TRUE,fill=BOTH)

#BOTONES CUARTA FILA
    #CLEAR

        self.boton_clear = Button(self.frame4,width=1, text='C',bg="#ff0000",command=lambda: self.limpiar_pantalla())
        self.boton_clear.config(font=('Arial',12,""))
        self.boton_clear.pack(expand=TRUE,fill="x")
    #/
        self.boton_div = Button(self.frame4, text='/', command=lambda: self.insertar_operacion('/'))
        self.boton_div.config(font=('Arial',12,""))
        self.boton_div.pack(expand=TRUE,fill="both")
    #*
        self.boton_mult = Button(self.frame4, text='*', command=lambda: self.insertar_operacion('*'))
        self.boton_mult.config(font=('Arial',12,""))
        self.boton_mult.pack(expand=TRUE,fill="both")
    #-
        self.boton_resta = Button(self.frame4, text='-', command=lambda: self.insertar_operacion('-'))
        self.boton_resta.config(font=('Arial',12,""))
        self.boton_resta.pack(expand=TRUE,fill="both")
    #+
        self.boton_suma = Button(self.frame4, text='+', command=lambda: self.insertar_operacion('+'))
        self.boton_suma.config(font=('Arial',12,""))
        self.boton_suma.pack(expand=TRUE,fill="both")






        self.raiz.mainloop()

        
    def borrar_caracter(self):
        self.pantalla.set(self.pantalla.get()[:-1])

    def insertar_punto(self):
        self.pantalla.set(self.pantalla.get() + ".")
        
        
    def limpiar_pantalla(self):
        self.pantalla.set("")
        self.operacion = ""
        self.operador1 = ""
        self.operador2 = ""

    def insertar_numero(self,numero):
        if numero.isdigit():
            self.pantalla.set(self.pantalla.get() + numero)
            self.epantalla.icursor(END)
            
    def calcular_resultado(self,):
        self.operador2 = self.pantalla.get()
        self.resultado = eval(f"{self.operador1}{self.operacion}{self.operador2}")
        self.pantalla.set(self.resultado)
        print("Nueva Operacion:")
        print("operador 1 = ",self.operador1)
        print("operador 2 = ",self.operador2)
        print("operacion = ",self.operacion)
        self.operacion = ""
        self.operador1 = ""
        self.operador2 = ""
        
        
    def insertar_operacion(self,operacion):
        self.operador1 = self.pantalla.get()
        
        self.operacion = operacion
     
        self.pantalla.set("")
        

        


        
def main():
    mi_app = Aplicacion()
    return 0
if __name__ == '__main__':
    main()