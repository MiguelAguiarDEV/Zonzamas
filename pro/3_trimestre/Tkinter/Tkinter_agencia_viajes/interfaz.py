from tkinter import filedialog as fd


from tkinter import *
from tkinter import ttk



class Aplicacion():
    def __init__(self):
        
        self.consola = ''
        self.raiz = Tk()
        self.raiz.resizable(width=True,height=True)
        self.raiz.title('Agencia de Viajes')

        
        self.inicio = ttk.Frame(self.raiz)
        self.inicio.grid(column=0,row=0)
        
        self.barra_menu = ttk.Frame(self.inicio)
        self.barra_menu.grid(column=0,row=0)
        
        
        self.boton_alta_billete = ttk.Button(self.barra_menu,text="Alta Billete",command=self.frame_alta_billete)
        self.boton_alta_billete.grid(column=0,row=0)
        
        self.boton_buscar_billete = ttk.Button(self.barra_menu,text="buscar Billete")
        self.boton_buscar_billete.grid(column=1,row=0)
        
        self.boton_cargar_fichero = ttk.Button(self.barra_menu,text="Cargar Fichero")
        self.boton_cargar_fichero.grid(column=2,row=0)

        self.raiz.mainloop()
    
    
    def volver_inicio(self):
        
        self.frame_alta_billete.grid_forget()
        self.inicio.grid(column=0,row=0)
        
        
    def frame_alta_billete(self):

        self.inicio.grid_forget()
        
        self.frame_alta_billete = ttk.Frame(self.raiz)
        self.frame_alta_billete.grid(column=0,row=0)
        
        
        self.botton_inicio = ttk.Button(self.frame_alta_billete,text="Inicio",command=self.volver_inicio)
        self.botton_inicio.grid(column=0,row=0)
        
        
        
        


def main():
    mi_app = Aplicacion()
    return 0
if __name__ == '__main__':
    main()


