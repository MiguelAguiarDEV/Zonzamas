
import os
import json
import ast

from tkinter import filedialog as fd
from tkinter import *
from tkinter import ttk, font, messagebox
import tkinter as tk


class GestionBiblioteca():
    
    ruta_biblioteca = os.path.dirname(__file__) + os.sep + 'biblioteca.json'
    
    def __init__(self):

        self.raiz = Tk()
        
        
        self.raiz.option_add("*Font", "Helvetica 12")
        self.raiz.option_add("*tearOff", False)
        
        self.raiz.minsize(520,200)
        
        #self.raiz.attributes('-fullscreen', True)
        
        self.fuente = font.Font(weight='normal')
        
        
        #VARIABLES
        
        
        
        
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
            ,command= self.ventana_carga
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
        
        #CREAR ETIQUETAS NOMBRE LIBRO
        
        self.etiqueta_nombre_articulo = ttk.Label(self.frame_alta , text="Nombre Articulo: "   , justify="left", width=40, padding=[10])
        self.etiqueta_nombre_articulo.pack(side=TOP, fill=BOTH, padx=5, pady=5)
        
        self.nombre_articulo_entry = ttk.Entry(self.frame_alta, justify="left", textvariable=self.nombre_articulo)
        self.nombre_articulo_entry.pack(side=TOP, fill=BOTH, padx=5, pady=5)

        #COMBOBOX
        self.combo_tipo_artiulo = ttk.Combobox(self.frame_alta, values = self.lista_articulos)
        self.combo_tipo_artiulo.set("Elige una editorial")
        self.combo_tipo_artiulo.pack(side=TOP, fill=BOTH, padx=5, pady=5)
        
        self.etiqueta_autor = ttk.Label(self.frame_alta , text="Autor: "   , justify="left", width=40, padding=[10])
        self.etiqueta_autor.pack(side=TOP, fill=BOTH, padx=5, pady=5)

        self.autor_entry = ttk.Entry(self.frame_alta, justify="left", textvariable=self.nombre_autor)
        self.autor_entry.pack(side=TOP, fill=BOTH, padx=5, pady=5)

        #LABELFRAME
        self.label_frame = LabelFrame(self.frame_alta, text = "Año")
        self.label_frame.pack(side=TOP, fill=BOTH, padx=5, pady=5)
        
        self.radio2021 = Radiobutton(self.label_frame, text = "2021",variable = self.anho, value = "2021",)
        self.radio2021.pack(side=TOP, fill=BOTH, padx=5, pady=5)

        self.radio2020 = Radiobutton(self.label_frame, text = "2020",variable = self.anho, value = "2020",)
        self.radio2020.pack(side=TOP, fill=BOTH, padx=5, pady=5)

        self.radio2019 = Radiobutton(self.label_frame, text = "2019",variable = self.anho, value = "2019",)
        self.radio2019.pack(side=TOP, fill=BOTH, padx=5, pady=5)

        self.radio2018 = Radiobutton(self.label_frame, text = "2018",variable = self.anho, value = "2018",)
        self.radio2018.pack(side=TOP, fill=BOTH, padx=5, pady=5)
        
        self.radio2017 = Radiobutton(self.label_frame, text = "2017",variable = self.anho, value = "2017",)
        self.radio2017.pack(side=TOP, fill=BOTH, padx=5, pady=5)

        self.radio2016 = Radiobutton(self.label_frame, text = "2016",variable = self.anho, value = "2016")
        self.radio2016.pack(side=TOP, fill=BOTH, padx=5, pady=5)

        self.boton_guardar_libro = ttk.Button(self.frame_alta, text="Guardar", command=self.registrar_libro)
        self.boton_guardar_libro.pack(side=TOP, fill=BOTH, padx=5, pady=5)

    def destruir_ventana(self):
        for widget in self.frame_ventana.winfo_children():
            widget.destroy()

    def registrar_libro(self):
        texto_errores = ""
        
        if not self.nombre_articulo.get():
            texto_errores += " - No se ha especificado un Nombre.\n"
        if not self.combo_tipo_artiulo.get():
            texto_errores += " - No se ha especificado una Editorial.\n"
        if not self.nombre_autor.get():
            texto_errores += " - No se ha especificado un Autor.\n"
        if not self.anho.get():
            texto_errores += " - No se especifico un Año.\n"
            
        if texto_errores:
            messagebox.showerror("Hay errores en el formulario", texto_errores)
        else:
            libro = Libro(self.nombre_articulo.get(),self.combo_tipo_artiulo.get(), self.nombre_autor.get(),self.anho.get())
            self.libros[libro.nombre] = libro
            self.guardar_fichero()
            messagebox.showinfo("Éxito", "Libro registrado con éxito")
        
    def ventana_listado(self):
        self.destruir_ventana()
        
        etiqueta_filtro    = ttk.Label(self.frame_ventana , text="Filtro: "             , justify="left", width=40, padding=[10])
        etiqueta_listado   = ttk.Label(self.frame_ventana , text="Listado de libros: "  , justify="left", width=40, padding=[10])
        
        filtro  = ttk.Entry(self.frame_ventana, justify="left", textvariable=self.filtro)
        filtrar = ttk.Button(self.frame_ventana, text="Filtrar", command=self.filtrar)
        
        self.frame_libros = Frame(self.frame_ventana)
        
        etiqueta_filtro.pack(side=TOP, fill=BOTH, padx=5, pady=5)
        filtro.pack(side=TOP, fill=BOTH, padx=5, pady=5)
        filtrar.pack(side=TOP, fill=BOTH, padx=5, pady=5)
        etiqueta_listado.pack(side=TOP, fill=BOTH, padx=5, pady=5)      
        self.frame_libros.pack(side=TOP)
        
        
        self.info_filtrar()
    
    def destruir_frames_libros(self):
        for widget in self.frame_libros.winfo_children():
            widget.destroy() 
    
    def info_filtrar(self, texto_filtrado=""):

        scrollbar = Scrollbar(self.frame_libros)
        scrollbar.pack(side="right",fill="y")
        
        self.treeview_libros = ttk.Treeview(self.frame_libros,  columns=('editorial','autor',"año"), yscrollcommand= scrollbar.set)
        
        self.treeview_libros.heading("#0"       , text="Nombre")
        self.treeview_libros.heading("editorial"  , text="Editorial")
        self.treeview_libros.heading("autor"    , text="Autor")
        self.treeview_libros.heading("año", text="Año")
        
        
        for key_libro in self.libros:
            contenido_libros = str(self.libros[key_libro].nombre)
            
            if texto_filtrado == '' or texto_filtrado.lower() in contenido_libros.lower():
            
                self.treeview_libros.insert(
                        ""
                    ,END
                    ,text= key_libro
                    ,values=(self.libros[key_libro].editorial, self.libros[key_libro].autor, self.libros[key_libro].anho)
                )
        
        scrollbar.config(command=self.treeview_libros.yview)
        self.treeview_libros.pack()
        
    def filtrar(self):
        self.destruir_frames_libros()
        
        self.info_filtrar(self.filtro.get())

    def ventana_carga(self):
        self.destruir_ventana()
        
        ruta_datos_externos = fd.askopenfilename(initialdir="/", title="Seleccione archivo de carga externa", filetypes=(("json files","*.json"), ("todos los archivos", "*.*")))
        
        libros_externos = self.leer_libros(ruta_datos_externos)
        usuarios_externos = self.leer_usuarios(ruta_datos_externos)

        self.libros.update["Libros"].update(libros_externos)
        self.usuarios.update["Usuarios"].update(usuarios_externos)
        
        self.guardar_fichero()
    
    def guardar_fichero(self):
        f = open(self.ruta_biblioteca,'w')
        
        
        dict_libros_usuarios = {"Libros" : {}
                                ,"Usuarios" : {}}
    
        for libro in self.libros:
            dict_libro = {libro : {"nombre": libro,"editorial" : self.libros[libro].editorial, "autor" : self.libros[libro].autor, "anho" : self.libros[libro].anho}}
            dict_libros_usuarios["Libros"].update(dict_libro)
        
        for usuario in self.usuarios:
            dict_usuario = {usuario : {"nombre": usuario,"contrasenha" : self.usuarios[usuario].contrasenha}}
            dict_libros_usuarios["Usuarios"].update(dict_usuario)
        
        f.write(json.dumps(dict_libros_usuarios, indent=4))
    
    def leer_libros(self,ruta = ruta_biblioteca):
        f = open(ruta,'r')
        
        texto = f.read()
        
        diccionario = ast.literal_eval(texto)
        
        dict_libros = diccionario["Libros"]
        libros = {}
        
        for nombre_clave  in dict_libros:

            dict_libros[nombre_clave]
            
            libro = Libro(dict_libros[nombre_clave],dict_libros[nombre_clave]["editorial"],dict_libros[nombre_clave]["autor"],dict_libros[nombre_clave]["anho"])
    
            libros[nombre_clave] = libro

        return libros
        
    def leer_usuarios(self,ruta = ruta_biblioteca):
        f = open(ruta,'r')
        
        texto = f.read()
        
        diccionario = ast.literal_eval(texto)
        
        dict_usuarios = diccionario["Usuarios"]
        libros = {}
        
        for nombre_clave  in dict_usuarios:

            dict_usuarios[nombre_clave]
            
            libro = Libro(dict_usuarios[nombre_clave],dict_usuarios[nombre_clave]["editorial"],dict_usuarios[nombre_clave]["autor"],dict_usuarios[nombre_clave]["anho"])
    
            libros[nombre_clave] = libro

        return libros
        
        
def main():
    
    
    mi_app = GestionBiblioteca()
        
        
    return 0

if __name__ == '__main__':
    main()