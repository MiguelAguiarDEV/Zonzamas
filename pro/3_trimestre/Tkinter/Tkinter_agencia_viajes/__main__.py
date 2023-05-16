from tkinter import *
from viaje import *
from tkinter import filedialog as fd
from tkinter import ttk
from validaciones import *

class AgendaViajes:

    def __init__(self):
        self.archivo_provincias = open('/home/miguel/Escritorio/Zonzamas/pro/3_trimestre/Tkinter/Tkinter_agencia_viajes/provincias.json', 'r')
        # Crear root principal
        self.root = Tk()
        self.root.title("Agenda de Viajes")

        self.origen = StringVar()
        self.destino = StringVar()
        self.precio = StringVar()
        self.avion = StringVar()
        # Crear widgets
        self.etiqueta_origen = Label(self.root, text="Origen:")
        self.etiqueta_destino = Label(self.root, text="Destino:")
        self.etiqueta_precio = Label(self.root, text="Precio:")
        self.etiqueta_avion = Label(self.root, text="Avion:")
        
        self.campo_origen = Entry(self.root,textvariable=self.origen)
        self.campo_destino = Entry(self.root,textvariable=self.destino)
        self.campo_precio = Entry(self.root,textvariable=self.precio)

        self.campo_avion = ttk.Combobox(self.root,values=Avion.tipos_aviones,state="readonly")
        self.campo_avion.set("Elige un Avion")


            
            
        self.boton_alta = Button(self.root, text="Dar de alta", command=lambda: self.dar_de_alta())

        self.menu = Menu(self.root)

        
        self.menu.add_command(label="Cargar", command=self.cargar_archivo)
        self.menu.add_command(label="Buscar", command=None)
        self.menu.add_command(label="Billete", command=None)
        self.menu.add_command(label="Salir", command=self.root.destroy)

        self.root.config(menu = self.menu)

        # Organizar widgets en la root
        self.etiqueta_origen.grid(row=0, column=0)
        self.etiqueta_destino.grid(row=1, column=0)
        self.etiqueta_precio.grid(row=2, column=0)
        self.etiqueta_avion.grid(row=3, column=0)
        self.campo_origen.grid(row=0, column=1)
        self.campo_destino.grid(row=1, column=1)
        self.campo_precio.grid(row=2, column=1)
        self.campo_avion.grid(row=3, column=1)
        self.boton_alta.grid(row=4, column=0)
        self.root.rowconfigure(0, weight=1)
        self.root.columnconfigure(0, weight=1)
        

# Crear objeto AgendaViajes y ejecutar la aplicación
        self.root.mainloop()
    
    def dar_de_alta(self):
        
            self.provincias = json.load(self.archivo_provincias)
            if self.origen.get() not in self.provincias:
                self.error = Toplevel()
                self.error_label = Label(self.error,text="Se Inserto un coddigo de provincia invalido")
                self.error_boton = ttk.Button(self.error,text="Aceptar",command=lambda: self.error.destroy())
                self.error_label.pack()
                self.error_boton.pack()
                self.limpiar_variables()
                self.root.wait_window(self.error)
                raise ProvinciaNoValida("Se puso un Codigo de provincia invalido")
                
            else:
                return Viaje(self.origen.get(), self.destino.get(), Avion(self.campo_avion.get()), self.precio.get()).guardar()
        
        
    
    def limpiar_variables(self):
        self.origen.set("")
        self.destino.set("")
        self.precio.set("")
        self.avion.set("")
        self.campo_avion.set("Elige un Avion")
    
       
    def cargar_archivo(self):
        self.arcivo_nuevo = fd.askopenfilename()

        
def main():
    mi_app = AgendaViajes()
    return 0
if __name__ == '__main__':
    main()