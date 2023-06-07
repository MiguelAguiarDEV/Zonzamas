 
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
