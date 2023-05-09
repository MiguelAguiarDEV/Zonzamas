from tkinter import Tk, Label, Entry, Button, Menu, filedialog

class AgendaViajes:

    def __init__(self):
        self.viajes = []

        # Crear ventana principal
        self.ventana = Tk()
        self.ventana.title("Agenda de Viajes")

        # Crear widgets
        etiqueta_destino = Label(self.ventana, text="Destino:")
        etiqueta_fecha = Label(self.ventana, text="Fecha:")
        etiqueta_precio = Label(self.ventana, text="Precio:")
        self.campo_destino = Entry(self.ventana)
        self.campo_fecha = Entry(self.ventana)
        self.campo_precio = Entry(self.ventana)
        boton_alta = Button(self.ventana, text="Dar de alta", command=self.dar_de_alta)
        boton_buscar = Button(self.ventana, text="Buscar", command=self.buscar)
        self.resultados_busqueda = Label(self.ventana, text="")
        menu = Menu(self.ventana)
        self.ventana.config(menu=menu)
        menu_archivo = Menu(menu)
        menu.add_cascade(label="Archivo", menu=menu_archivo)
        menu_archivo.add_command(label="Cargar archivo", command=self.cargar_archivo)
        menu_archivo.add_command(label="Guardar archivo", command=self.guardar_archivo)

        # Organizar widgets en la ventana
        etiqueta_destino.grid(row=0, column=0)
        etiqueta_fecha.grid(row=1, column=0)
        etiqueta_precio.grid(row=2, column=0)
        self.campo_destino.grid(row=0, column=1)
        self.campo_fecha.grid(row=1, column=1)
        self.campo_precio.grid(row=2, column=1)
        boton_alta.grid(row=3, column=0)
        boton_buscar.grid(row=3, column=1)
        self.resultados_busqueda.grid(row=4, column=0, columnspan=2)

    def dar_de_alta(self):
        destino = self.campo_destino.get()
        fecha = self.campo_fecha.get()
        precio = self.campo_precio.get()
        self.viajes.append({"destino": destino, "fecha": fecha, "precio": precio})
        self.campo_destino.delete(0, 'end')
        self.campo_fecha.delete(0, 'end')
        self.campo_precio.delete(0, 'end')

    def buscar(self):
        texto_busqueda = input("Introduzca el texto a buscar: ")
        resultados = []
        for viaje in self.viajes:
            if texto_busqueda in viaje["destino"] or texto_busqueda in viaje["fecha"]:
                resultados.append(viaje)
        if len(resultados) == 0:
            self.resultados_busqueda.config(text="No se encontraron resultados")
        else:
            texto_resultados = ""
            for viaje in resultados:
                texto_resultados += "Destino: " + viaje["destino"] + " - Fecha: " + viaje["fecha"] + " - Precio: " + viaje["precio"] + "\n"
            self.resultados_busqueda.config(text=texto_resultados)

    def cargar_archivo(self):
        ruta_archivo = filedialog.askopenfilename(initialdir="/", title="Seleccione archivo",
                                                  filetypes=(("txt files", "*.txt"), ("todos los archivos", "*.*")))
        with open(ruta_archivo, "r") as archivo:
            contenido = archivo.read()
            viajes = contenido.split("\n")
            for viaje in viajes:
                if viaje != "":
                    datos_viaje = viaje.split(",")
                    self.viajes.append({"destino": datos_viaje[0], "fecha": datos_viaje[1], "precio": datos_viaje[2]})

    def guardar_archivo(self):
        ruta_archivo = filedialog.asksaveasfilename(initialdir="/", title="Guardar archivo",
                                                    filetypes=(("txt files", "*.txt"), ("todos los archivos", "*.*")))
        with open(ruta_archivo, "w") as archivo:
            for viaje in self.viajes:
                linea_viaje = viaje["destino"] + "," + viaje["fecha"] + "," + viaje["precio"] + "\n"
                archivo.write(linea_viaje)

    def iniciar(self):
        self.ventana.mainloop()

# Crear objeto AgendaViajes y ejecutar la aplicación
agenda = AgendaViajes()
agenda.iniciar()