"""
un programa que cree un diccionario simulando una cesta de la compra. 
El programa debe preguntar el artículo y su precio y añadir el par al diccionario, hasta que el usuario decida terminar. 
Después se debe mostrar por pantalla la lista de la compra y el coste total, con el siguiente formato

Lista de la compra
Artículo 1	Precio
Artículo 2	Precio
Artículo 3	Precio
…	…
Total	Coste
"""

precioTotal = 0.0
listaCompra = {}
tecla = ""
seguir = True
while seguir:
    articulo = input("introduce el articulo de la compra: ")
    precio = input("introduce el precio del articulo: ")
    if articulo != ""  and precio != "":
        listaCompra.setdefault(articulo, float(precio))
    tecla = input("Si no quiere introducir mas articulos pulse K si quiere seguir pulse cualquier otra tecla.\n")
    if tecla == "K" or tecla == "k":
        seguir = False
print("Lista de la compra")
for articulo, precio in listaCompra.items():
    print("articulo: ",articulo, "   precio: ",precio)
    precioTotal += precio
print("Total: ","{0:.2f}".format(precioTotal),"$")    
