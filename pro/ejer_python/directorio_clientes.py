clientes_sin_formato = "nif;nombre;email;teléfono;descuento\n01234567L;Luis González;luisgonzalez@mail.com;656343576;12.5\n71476342J;Macarena Ramírez;macarena@mail.com;692839321;8\n63823376M;Juan José Martínez;juanjo@mail.com;664888233;5.2\n98376547F;Carmen Sánchez;carmen@mail.com;667677855;15.7".split("\n")
clientes = {}
for lista_cliente in clientes_sin_formato[1:]:
    lista_cliente = lista_cliente.split(";")
    cliente = {}
    cliente['nif      '] = lista_cliente[0]
    cliente['nombre   '] = lista_cliente[1]
    cliente['emails   '] = lista_cliente[2]
    cliente['telefonos'] = lista_cliente[3]
    cliente['descuento'] = lista_cliente[4]
    clientes[lista_cliente[0]] = cliente
print(clientes)


