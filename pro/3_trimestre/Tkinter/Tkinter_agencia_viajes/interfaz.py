from tkinter import filedialog as fd


from tkinter import *
from tkinter import ttk



class Aplicacion():
    def __init__(self):
        
        self.consola = ''
        self.raiz = Tk()
        self.raiz.resizable(width=True,height=True)
        self.raiz.title('Agencia de Viajes')
        self.raiz.rowconfigure(0, weight=1)
        self.raiz.columnconfigure(0, weight=1)
    #FRAME PANTALLA DE INICIO
        self.inicio = ttk.Frame(self.raiz)
        self.inicio.grid(column=0,row=0)

      #FRAME BARRA DE MENU        
        self.barra_menu = ttk.Frame(self.inicio)
        self.barra_menu.grid(column=0,row=0,sticky=(N, S, E, W))
        
    #BOTONES DE LA BARRA DE MENU  
      #BOTON ALTA DEL BILLETE   
        self.boton_alta_billete = ttk.Button(self.barra_menu,text="Alta Billete",command=self.frame_alta_billete)
        self.boton_alta_billete.grid(column=0,row=0,sticky=(N, S, E, W))
      #BOTON BUSCAR BILLETE  
        self.boton_buscar_billete = ttk.Button(self.barra_menu,text="buscar Billete")
        self.boton_buscar_billete.grid(column=1,row=0,sticky=(N, S, E, W))
      #BOTON CARGAR FICHERO  
        self.boton_cargar_fichero = ttk.Button(self.barra_menu,text="Cargar Fichero")
        self.boton_cargar_fichero.grid(column=2,row=0,sticky=(N, S, E, W))
   
        
        self.raiz.mainloop()

    #FUNCION PARA VOLVER AL MENU DE INICIO
    def volver_inicio(self):
        
        self.frame_alta_billete.grid_forget()
        self.inicio.grid(column=0,row=0)
        
    #FUNCION PARA IR AL MENU DAR ALTA BILLETE
    def frame_alta_billete(self):

        self.inicio.grid_forget()
        
        self.frame_alta_billete = ttk.Frame(self.raiz)
        self.frame_alta_billete.grid(column=0,row=0,padx=5, pady=5,sticky="nsew")
        
        self.frame_alta_billete.rowconfigure(0, weight=1)
        self.frame_alta_billete.columnconfigure(0, weight=1)
        
        self.botton_inicio = ttk.Button(self.frame_alta_billete,text="Inicio",command=self.volver_inicio)

        self.botton_inicio.grid(column=0,row=0,sticky="nsew")
        
        
        
        


def main():
    mi_app = Aplicacion()
    return 0
if __name__ == '__main__':
    main()


