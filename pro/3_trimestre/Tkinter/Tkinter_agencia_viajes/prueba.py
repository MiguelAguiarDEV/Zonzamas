import tkinter as tk

root = tk.Tk()

# Crear un botón
button = tk.Button(root, text="Botón")

# Colocar el botón en la ventana usando grid
button.grid(row=0, column=0, sticky="nsew")

# Desactivar el redimensionamiento automático del botón

# Configurar las opciones de rowconfigure y columnconfigure del widget contenedor
root.rowconfigure(0, weight=1)
root.columnconfigure(0, weight=1)

# Ejecutar el bucle principal de la aplicación
root.mainloop()