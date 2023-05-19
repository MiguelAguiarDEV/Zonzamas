
import os

import ast

from tkinter import *
from tkinter import ttk, font, messagebox
from aeropuerto import Aeropuerto
from avion import Avion
from billete import Billete
from viaje import Viaje


class AgenciaDeViaje():
    
    
    ruta_guardado = os.path.dirname(__file__) + os.sep + 'bbdd' + os.sep + 'viajes.json'
    
    
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
        
        self.nombre    = StringVar(value="")
        self.apellidos = StringVar(value="")
        self.viaje     = StringVar(value="")
        self.origen    = StringVar(value="")
        self.destino   = StringVar(value="")
        self.avion     = StringVar(value="")
        self.filtro    = StringVar(value="")
        
        
        self.viajes = self.leer_viajes()
        
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
        
        
        
        self.raiz.mainloop()

    
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
            texto_errores += error.args[1]
            
            
        
        if errores:
            messagebox.showerror("Hay errores en el formulario", texto_errores)
        else:
            self.guardar_fichero()
    
    def guardar_fichero(self):
        pass
    
    def listado_viajes(self):
        self.destruir_frames()
    
    def carga_externa(self):
        self.destruir_frames()
    
    def nuevo_viaje(self):
        self.destruir_frames()
    
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