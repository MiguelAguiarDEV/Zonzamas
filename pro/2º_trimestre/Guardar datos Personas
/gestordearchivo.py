class GestorDeArchivo():
    
    def insertar_datos(self, ruta_archivo, nombre, apellidos, calle, numero_puerta,codigo_postal, nif, emails, telefonos):
        
        archivo = open(ruta_archivo, "a")
        datos = 'nif: {' \
                    '"nombre": "' + nombre + '",' \
                    '"apellidos": "' + apellidos + '",' \
                    '"direccion": "' + calle + numero_puerta + codigo_postal + '",' \
                    '"emails": "' + email + '",' \
                    '"teléfonos": "' + telefono + '"' \
                '}' \

        archivo.write(datos)
