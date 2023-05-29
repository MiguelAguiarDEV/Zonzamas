
import os

import ast

from tkinter import *
from tkinter import ttk, font, messagebox
from aeropuerto import Aeropuerto
from avion import Avion
from billete import Billete
from viaje import Viaje
from usuario import Usuario
from tkinter import filedialog as fd

import json

class AgenciaDeViaje():
    
    
    ruta_guardado = os.path.dirname(__file__) + os.sep + 'bbdd' + os.sep + 'viajes.json'
    ruta_usuarios = os.path.dirname(__file__) + os.sep + 'bbdd' + os.sep + 'usuarios.json'
    
    def __init__(self,iconos):
        
        self.iconos = iconos
        
        self.raiz = Tk()
        
        self.raiz.title("Agencia de viajes: El corte Francés")
        
        
        self.icono1= PhotoImage(file= self.iconos[0]) #Icono de la app
        
        self.raiz.iconphoto(self.raiz, self.icono1)
        
        self.raiz.option_add("*Font", "Helvetica 12")
        self.raiz.option_add("*tearOff", False)
        
        self.raiz.minsize(400,300)
        
        #self.raiz.attributes('-fullscreen', True)
        
        self.fuente = font.Font(weight='normal')
        
        
        #DECLARAR StringsVars
        
        
        self.var_mostrar_contrasena = IntVar()
        self.nombre    = StringVar(value="")
        self.apellidos = StringVar(value="")
        self.viaje     = StringVar(value="")
        self.origen    = StringVar(value="")
        self.destino   = StringVar(value="")
        self.avion     = StringVar(value="")
        self.filtro    = StringVar(value="")
        self.nombre_iniciar_sesion = StringVar(value="")
        self.contrasenha_iniciar_sesion = StringVar(value="")
        
        self.viajes = self.leer_viajes()
        self.usuarios = self.leer_usuarios()
        
        self.frame_iniciar_sesion = Frame(self.raiz)
        self.frame_iniciar_sesion.config(bg="lightblue")
        
        self.frame_iniciar_sesion.config(width=400, height=300)
        
        self.frame_iniciar_sesion.pack(side=TOP)
        
        self.frame_contrasenha = Frame(self.frame_iniciar_sesion)
        
        self.etiqueta_nombre = ttk.Label(self.frame_iniciar_sesion , text="Nombre: "   , justify="left", width=40, padding=[10])
        self.etiqueta_contrasenha = ttk.Label(self.frame_iniciar_sesion , text="Contraseña: "   , justify="left", width=40, padding=[10])

        self.nombre_iniciar_sesion = ttk.Entry(self.frame_iniciar_sesion, justify="left", textvariable=self.nombre_iniciar_sesion)

        self.contrasenha_iniciar_sesion = ttk.Entry(self.frame_contrasenha, justify="left", textvariable=self.contrasenha_iniciar_sesion, show="*")
        self.botton_ver_contrasenha = ttk.Checkbutton(self.frame_contrasenha, text = "Ver", variable = self.var_mostrar_contrasena , command=self.mostrar_contrasena)

        self.botton_iniciar_sesion = ttk.Button(self.frame_iniciar_sesion, text="Iniciar Sesion", command=self.iniciar_sesion)
        self.botton_registrar_cuenta = ttk.Button(self.frame_iniciar_sesion, text="Registrarse", command=self.registrar_cuenta)
        
        
        self.etiqueta_nombre.pack(side=TOP, fill=BOTH, padx=5, pady=5)
        self.nombre_iniciar_sesion.pack(side=TOP, fill=BOTH, padx=5, pady=5)
        self.etiqueta_contrasenha.pack(side=TOP, fill=BOTH, padx=5, pady=5)
        
        self.frame_contrasenha.pack(side=TOP,fill=BOTH)
        self.contrasenha_iniciar_sesion.pack(side=LEFT, fill=BOTH, expand=True)
        self.botton_ver_contrasenha.pack(side=RIGHT)

        
        self.botton_iniciar_sesion.pack(side=TOP, fill=BOTH, padx=5, pady=5)
        self.botton_iniciar_sesion.pack(side=TOP, fill=BOTH, padx=5, pady=5)
        self.botton_registrar_cuenta.pack(side=TOP, fill=BOTH, padx=5, pady=5)
        
        self.raiz.mainloop()
        
        
    
    def cargar_programa(self):
                
        barramenu = Menu(self.raiz)
        
        self.raiz['menu'] = barramenu
        
        icono_alta          = PhotoImage(file=self.iconos[1])
        icono_listado       = PhotoImage(file=self.iconos[2])
        icono_carga_externa = PhotoImage(file=self.iconos[3])
        icono_nuevo_viaje = PhotoImage(file=self.iconos[4])
        
        barramenu.add_command(
            label = 'Alta'
            ,command= self.alta_billete
            ,underline= 0
            ,accelerator='Ctrl+a'
            ,image = icono_alta
            ,compound=LEFT
        )
        
        barramenu.add_command(
            label = 'Listado'
            ,command= self.listado_viajes
            ,underline= 0
            ,accelerator='Ctrl+l'
            ,image = icono_listado
            ,compound=LEFT
        )
        
        barramenu.add_command(
            label = 'Carga Externa'
            ,command= self.carga_externa
            ,underline= 0
            ,accelerator='Ctrl+o'
            ,image = icono_carga_externa
            ,compound=LEFT
        )
        
        barramenu.add_command(
            label = 'Nuevo Viaje'
            ,command= self.nuevo_viaje
            ,underline= 0
            ,accelerator='Ctrl+n'
            ,image = icono_nuevo_viaje
            ,compound=LEFT
        )
        
        
        self.frame = Frame(self.raiz)
        
        self.frame.config(bg="lightblue")
        
        self.frame.config(width=400, height=300)
        
        self.frame.pack(side=TOP)
        
        
        self.raiz.bind("<Control-a>", lambda event: self.alta_billete())
        self.raiz.bind("<Control-l>", lambda event: self.listado_viajes())
        self.raiz.bind("<Control-o>", lambda event: self.carga_externa())
        
    def mostrar_contrasena(self):
        if self.var_mostrar_contrasena.get() == 1:  # El Checkbutton está marcado
            self.contrasenha_iniciar_sesion.config(show="")
        else:
            self.contrasenha_iniciar_sesion.config(show="*")
    
    def iniciar_sesion(self):

        nombre = self.nombre_iniciar_sesion.get()
        contrasenha = self.contrasenha_iniciar_sesion.get()

        
        if nombre in self.usuarios.keys():
                if self.usuarios[nombre].diccionario()["contrasenha"] == contrasenha :
                    self.frame_iniciar_sesion.destroy()
                    self.cargar_programa()
        
    
    
    def registrar_cuenta(self):
        pass
    
    
            
    def guardar_usuarios(self):
        pass
   
    
    
    def destruir_frames_viajes(self):
        for widget in self.frame_viajes.winfo_children():

            widget.destroy()
            
    def destruir_frames(self):

        for widget in self.frame.winfo_children():
            widget.destroy()
        
    def alta_billete(self):
        self.destruir_frames()
        
        etiqueta_viajes    = ttk.Label(self.frame , text="Viajes: "   , justify="left", width=40, padding=[10])
        etiqueta_nombre    = ttk.Label(self.frame , text="Nombre: "   , justify="left", width=40, padding=[10])
        etiqueta_apellidos = ttk.Label(self.frame , text="Apellidos: ", justify="left", width=40, padding=[10])
        
        opciones = self.viajes.keys()
        
        
        select_viajes = OptionMenu(self.frame, self.viaje, *opciones)
        
        
        nombre    = ttk.Entry(self.frame, justify="left", textvariable=self.nombre)
        apellidos = ttk.Entry(self.frame, justify="left", textvariable=self.apellidos)
        
        
        guardar = ttk.Button(self.frame, text="Guardar", command=self.guardar_billete)
        
        etiqueta_viajes.pack(side=TOP, fill=BOTH, padx=5, pady=5)
        select_viajes.pack(side=TOP, fill=BOTH, padx=5, pady=5)
        etiqueta_nombre.pack(side=TOP, fill=BOTH, padx=5, pady=5)
        nombre.pack(side=TOP, fill=BOTH, padx=5, pady=5)
        etiqueta_apellidos.pack(side=TOP, fill=BOTH, padx=5, pady=5)
        apellidos.pack(side=TOP, fill=BOTH, padx=5, pady=5)
        guardar.pack(side=TOP, fill=BOTH, padx=5, pady=5)
        
        
    def guardar_billete(self):
        errores = False
        
        texto_errores = ''
        
        nuevo_billete = Billete()
        
        try:
            nuevo_billete.viaje = self.viaje.get()
        except:
            errores = True
            texto_errores += " - No se ha seleccionado ningún viaje\n "
        else:
            viaje_seleccionado = self.viajes.get(nuevo_billete.viaje)

        try:
            nuevo_billete.nombre = self.nombre.get()
        except:
            errores = True
            texto_errores += ' -  No se ha escrito un nombre.\n'
            
        try:
            nuevo_billete.apellidos = self.apellidos.get()
        except:
            errores = True
            texto_errores += ' -  No se ha escrito unos apellidos.\n'
            
            
        try:
            viaje_seleccionado.billetes_comprados = nuevo_billete
        except Exception as error:
            errores = True
            texto_errores += error.args[1]
            
        

        
        
        if errores:
            messagebox.showerror("Hay errores en el formulario", texto_errores)
        else:
            self.viajes[nuevo_billete.viaje] = viaje_seleccionado
            self.guardar_json()
            messagebox.showinfo("Agregado", "Se ha guardado el billete con éxito")
    
    def guardar_json(self):
        f = open(self.ruta_guardado,'w')
        
        
        
        dict_viajes = {}
        
        for viaje in self.viajes: 
            dict_viajes.update(self.viajes[viaje].diccionario())
        
        f.write(json.dumps(dict_viajes, indent=4))
            
    
    def listado_viajes(self):
        self.destruir_frames()
        
        etiqueta_filtro    = ttk.Label(self.frame , text="Filtro: "             , justify="left", width=40, padding=[10])
        etiqueta_listado   = ttk.Label(self.frame , text="Listado de viajes: "  , justify="left", width=40, padding=[10])
        
        filtro  = ttk.Entry(self.frame, justify="left", textvariable=self.filtro)
        filtrar = ttk.Button(self.frame, text="Filtrar", command=self.filtrar)
        
        self.frame_viajes = Frame(self.frame)
        
        etiqueta_filtro.pack(side=TOP, fill=BOTH, padx=5, pady=5)
        filtro.pack(side=TOP, fill=BOTH, padx=5, pady=5)
        filtrar.pack(side=TOP, fill=BOTH, padx=5, pady=5)
        etiqueta_listado.pack(side=TOP, fill=BOTH, padx=5, pady=5)      
        self.frame_viajes.pack(side=TOP)
        
        
        self.info_filtrar()
        
    def info_filtrar(self, texto_filtrado=""):
  
       
        scrollbar = Scrollbar(self.frame_viajes)
        scrollbar.pack(side="right",fill="y")
        
        self.treeview_viajes = ttk.Treeview(self.frame_viajes,  columns=('destino', 'avion', 'capacidad'), yscrollcommand= scrollbar.set)
        
        self.treeview_viajes.heading("#0"       , text="Origen")
        self.treeview_viajes.heading("destino"  , text="Destino")
        self.treeview_viajes.heading("avion"    , text="Avión")
        self.treeview_viajes.heading("capacidad", text="Capacidad")
        
        
        for key_viajes in self.viajes:
            contenido_viajes = str(self.viajes[key_viajes])
            
            if texto_filtrado == '' or texto_filtrado.lower() in contenido_viajes.lower():
            
                self.treeview_viajes.insert(
                        ""
                    ,END
                    ,text=self.viajes[key_viajes].origen.sede
                    ,values=(self.viajes[key_viajes].destino.sede, self.viajes[key_viajes].avion.modelo, self.viajes[key_viajes].avion.capacidad)
                )
        
        scrollbar.config(command=self.treeview_viajes.yview)
        self.treeview_viajes.pack()
        
    
    def filtrar(self):
        self.destruir_frames_viajes()
        
        self.info_filtrar(self.filtro.get())
    
    def carga_externa(self):
        self.destruir_frames()
        
        ruta_datos_externos = fd.askopenfilename(initialdir="/", title="Seleccione archivo de carga externa", filetypes=(("json files","*.json"), ("todos los archivos", "*.*")))
        
        viajes_externos = self.leer_viajes(ruta_datos_externos)
        
        self.viajes.update(viajes_externos)
        
        self.guardar_json()
        
        #self.viajes

        
    
    def nuevo_viaje(self):
        self.destruir_frames()
        
        etiqueta_origen  = ttk.Label(self.frame , text="Origen: " , justify="left", width=40, padding=[10])
        etiqueta_destino = ttk.Label(self.frame , text="Destino: " , justify="left", width=40, padding=[10])
        etiqueta_avion   = ttk.Label(self.frame , text="Avión: " , justify="left", width=40, padding=[10])
        
        select_origen  = OptionMenu(self.frame, self.origen, *Aeropuerto.listado)
        select_destino = OptionMenu(self.frame, self.destino, *Aeropuerto.listado)
        select_avion   = OptionMenu(self.frame, self.avion, *Avion.modelos.keys())
        
        guardar = ttk.Button(self.frame, text="Guardar", command=self.guardar_viaje)
        
        
        etiqueta_origen.pack(side=TOP, fill=BOTH, padx=5, pady=5)
        select_origen.pack(side=TOP, fill=BOTH, padx=5, pady=5)
        etiqueta_destino.pack(side=TOP, fill=BOTH, padx=5, pady=5)
        select_destino.pack(side=TOP, fill=BOTH, padx=5, pady=5)
        etiqueta_avion.pack(side=TOP, fill=BOTH, padx=5, pady=5)
        select_avion.pack(side=TOP, fill=BOTH, padx=5, pady=5)
        guardar.pack(side=TOP, fill=BOTH, padx=5, pady=5)
    
    
    def guardar_viaje(self):
        texto_errores = ''
        
        if not self.origen.get():
            texto_errores += " - No se ha especificado un origen.\n"
        if not self.destino.get():
            texto_errores += " - No se ha especificado un destino.\n"
        if not self.avion.get():
            texto_errores += " - No se ha especificado un avion.\n"
        if self.origen.get() and self.origen.get() == self.destino.get():
            texto_errores += " - Origen, no puede ser igual a destino.\n"
        if self.viajes.get(self.origen.get() + '-' + self.destino.get()):
            texto_errores += " - El viaje ya se encuentra en nuestra BBDD.\n"
            
        if texto_errores:
            messagebox.showerror("Hay errores en el formulario", texto_errores)
        else:
            viaje = Viaje(Aeropuerto(self.origen.get()),Aeropuerto(self.destino.get()), Avion(self.avion.get()))
            self.viajes[self.origen.get() + '-' + self.destino.get()] = viaje
            self.guardar_json()
            messagebox.showinfo("Éxito", "Viaje creado con éxito")
    
    def leer_usuarios(self, ruta = ruta_usuarios):
        f = open(ruta,'r')
        
        texto = f.read()
        
        dict_usuario = ast.literal_eval(texto)
        
        
        usuarios = {}
        
        for key  in dict_usuario:
            
            
            dict_usuario[key]
            
            usuario = Usuario(dict_usuario[key],dict_usuario[key]['contrasenha'])
    
            usuarios[key] = usuario
        
        print(usuarios)    
        return usuarios
    
    def leer_viajes(self, ruta = ruta_guardado):
        
        f = open(ruta,'r')
        
        texto = f.read()
        
        dict_viaje = ast.literal_eval(texto)
        
        
        viajes = {}
        
        for key  in dict_viaje:
            
            
            dict_viaje[key]
            
            viaje = Viaje(Aeropuerto(dict_viaje[key]['origen']),Aeropuerto(dict_viaje[key]['destino']),Avion(dict_viaje[key]['avion']))
        
            for nbillete in dict_viaje[key]['billetes_comprados']:
                billete = dict_viaje[key]['billetes_comprados'][nbillete]
                
                carga_billete = Billete()
                
                carga_billete.nombre    = billete.get('nombre')
                carga_billete.apellidos = billete.get('apellidos')
                carga_billete.viaje     = billete.get('viaje')
                
                viaje.billetes_comprados = carga_billete
    
            viajes[key] = viaje
        
        print(viajes)    
        
        return viajes
    
    
def verificar_iconos(iconos):
    
    for icono in iconos:
        if not os.path.exists(icono):
            return False
        
        
    return True
    
def main():
    
    IMG_DIR = os.path.dirname(__file__) + os.sep + 'imagen' + os.sep


    iconos = (
        IMG_DIR + 'plane_icon.png'
        ,IMG_DIR + 'alta.png'
        ,IMG_DIR + 'carga.png'
        ,IMG_DIR + 'nuevo_viaje.png'
        ,IMG_DIR + 'listado.png'
    )
    
    
    not_error = verificar_iconos(iconos)
    
    if not_error:
        print("asdfasfdas")
        mi_app = AgenciaDeViaje(iconos)
        
        
    return 0

if __name__ == '__main__':
    main()