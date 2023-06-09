
import os
import json
import ast

from tkinter import filedialog as fd
from tkinter import *
from tkinter import ttk, font, messagebox
import tkinter as tk
from  inventario import *

class GestionInventario():
    
    
    def __init__(self):

        self.raiz = Tk()
        
        
        self.raiz.option_add("*Font", "Helvetica 12")
        self.raiz.option_add("*tearOff", False)
        
        self.raiz.minsize(520,200)
        
        #self.raiz.attributes('-fullscreen', True)
        
        self.fuente = font.Font(weight='normal')
        
        
        #VARIABLES
        self.inventario = Inventario_BD()
        self.nombre_articulo = StringVar()
        self.anho = IntVar()
        
        #CREAR EL MENU
        barramenu = Menu(self.raiz)
        
        self.raiz['menu'] = barramenu
        
        barramenu.add_command(
            label = 'Alta'
            ,command= self.ventana_alta
            ,underline= 0
            ,accelerator='Ctrl+a'
            ,compound=LEFT
        )
        
        barramenu.add_command(
            label = 'Listado'
            ,command= self.ventana_listado
            ,underline= 0
            ,accelerator='Ctrl+l'
            ,compound=LEFT
        )
        
        barramenu.add_command(
            label = 'Ventas Mensuales'
            ,command= self.ventana_ventas_mensuales
            ,underline= 0
            ,accelerator='Ctrl+o'
            ,compound=LEFT
        )
        
        
        
        
        #FRAME DONDE APARECERA TODO
        self.frame_ventana = Frame(self.raiz)
        self.frame_ventana.config(bg="lightblue",width=520,height=300)
        self.frame_ventana.pack(side=TOP,expand=True, fill=BOTH)
        

        self.raiz.mainloop()

    
    
    #DAR ALTA
    

    
    def ventana_alta(self):

        
        #DESTRUIMOS LAS VENTANAS ANTERIORES
        self.destruir_ventana()
        
        #CREAR EL FRAME DE LA VENTANA ALTA
        self.frame_alta = Frame(self.frame_ventana)
        self.frame_alta.config(bg="lightblue",width=520,height=300)
        self.frame_alta.pack(side=TOP,expand=True, fill=BOTH)
        
        #CREAR ETIQUETAS NOMBRE articulo
        
        self.etiqueta_nombre_articulo = ttk.Label(self.frame_alta , text="Nombre Articulo: "   , justify="left", width=40, padding=[10])
        self.etiqueta_nombre_articulo.pack(side=TOP, fill=BOTH, padx=5, pady=5)
        
        self.nombre_articulo_entry = ttk.Entry(self.frame_alta, justify="left", textvariable=self.nombre_articulo)
        self.nombre_articulo_entry.pack(side=TOP, fill=BOTH, padx=5, pady=5)

        #COMBOBOX
        
        self.etiqueta_tipo_articulo = ttk.Label(self.frame_alta , text="Tipo Articulo: "   , justify="left", width=40, padding=[10])
        self.etiqueta_tipo_articulo.pack(side=TOP, fill=BOTH, padx=5, pady=5)
        
        
        self.combo_tipo_artiulo = ttk.Combobox(self.frame_alta, values = self.inventario.ver_tipos_articulos())
        self.combo_tipo_artiulo.set("Elige un tipo")
        self.combo_tipo_artiulo.pack(side=TOP, fill=BOTH, padx=5, pady=5)
        
        #SPINBOX
        
        self.etiqueta_anho_articulo = ttk.Label(self.frame_alta , text="Año Articulo: "   , justify="left", width=40, padding=[10])
        self.etiqueta_anho_articulo.pack(side=TOP, fill=BOTH, padx=5, pady=5)
        
        self.spinbox = tk.Spinbox(self.frame_alta, from_ = 2000, to = 2022,increment = 1, textvariable = IntVar)

        self.spinbox.pack(side=TOP, fill=BOTH, padx=5, pady=5)
        self.frame_alta.pack(padx = 10, pady = 10, expand = True, fill = tk.BOTH)
        

        #LABELFRAME

        self.boton_guardar_articulo = ttk.Button(self.frame_alta, text="Dar Alta", command= self.guardar_articulo)
        self.boton_guardar_articulo.pack(side=TOP, fill=BOTH, padx=5, pady=5)



    def guardar_articulo(self):
        
        texto_errores = ""
        
        if not self.nombre_articulo.get():
            texto_errores += " - No se ha especificado un Nombre.\n"
        if not self.combo_tipo_artiulo.get() or self.combo_tipo_artiulo == "Elige un tipo":
            texto_errores += " - No se ha especificado un Articulo.\n"

        if texto_errores:
            messagebox.showerror("Hay errores en el formulario", texto_errores)
        else:
            self.inventario.insertar_articulo(self.nombre_articulo.get(),self.anho.get(),self.combo_tipo_artiulo.get())
        
    def ventana_ventas_mensuales(self):
        scrollbar = Scrollbar(self.frame_ventana)
        scrollbar.pack(side="right",fill="y")
        
        self.treeview_articulos = ttk.Treeview(self.frame_ventana,  columns=('id','nombre',"tipo","año"), yscrollcommand= scrollbar.set)
        
        self.treeview_articulos.heading("#0"       , text="id")
        self.treeview_articulos.heading("nombre"  , text="Nombre")
        self.treeview_articulos.heading("tipo"    , text="Tipo")
        self.treeview_articulos.heading("año", text="Año")
        
        dict1 = self.inventario.ver_articulos_año()
        for anho in dict1:
            
            self.treeview_articulos.insert(
                        ""
                    ,END
                    ,text= anho
                    ,values=(self.anho)
                )
        
        scrollbar.config(command=self.treeview_articulos.yview)
        self.treeview_articulos.pack()

    
    
    def ventana_listado(self):
        scrollbar = Scrollbar(self.frame_ventana)
        scrollbar.pack(side="right",fill="y")
        
        self.treeview_articulos = ttk.Treeview(self.frame_ventana,  columns=('id','nombre',"tipo","año"), yscrollcommand= scrollbar.set)
        
        self.treeview_articulos.heading("#0"       , text="id")
        self.treeview_articulos.heading("nombre"  , text="Nombre")
        self.treeview_articulos.heading("tipo"    , text="Tipo")
        self.treeview_articulos.heading("año", text="Año")
        
        
        for id_articulo in self.inventario.ver_articulos():
            contenido_libros = str(id_articulo)
            
          
            self.treeview_articulos.insert(
                        ""
                    ,END
                    ,text= id_articulo
                    ,values=(self.inventario.ver_datos_articulo(id_articulo))
                )
        
        scrollbar.config(command=self.treeview_articulos.yview)
        self.treeview_articulos.pack()


    def destruir_ventana(self):
        for widget in self.frame_ventana.winfo_children():
            widget.destroy()

  
   
        
def main():
    
    
    mi_app = GestionInventario()
        
        
    return 0

if __name__ == '__main__':
    main()