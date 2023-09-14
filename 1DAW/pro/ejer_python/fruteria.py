frutas = { 
            "Plátano" : 1.35,
            "Manzana" : 0.80,
            "Pera"    :	0.85,
            "Naranja" :	0.70
            }

print("Menu: ")
for fruta, valor in frutas.items():
    print(">>>>>> ", fruta, valor)


teclaPulsada = ""
precioCompra = float(0)
seguir = True
while seguir:
    FrutaValida = True
    while FrutaValida:
        frutaSeleccionada = input("-¿Que fruta quiere comprar?\n").title()
        if frutaSeleccionada in frutas:
            print("Introduce una fruta valida")
            FrutaValida = False
    precioFrutaSeleccionada = frutas.get(frutaSeleccionada)
    print("El precio es de: ",precioFrutaSeleccionada, "$")
    print("-¿Cuantos kilos de ",frutaSeleccionada.lower() + "s quiere a comprar?")
    kilosDeFruta = input()
    precioTotal = float(precioFrutaSeleccionada)*float(kilosDeFruta)
    print("El precio de ",kilosDeFruta,"Kg de",frutaSeleccionada.lower() + "s es: ", "{0:.2f}".format(precioTotal),"$" )
    precioCompra += precioTotal
    teclaPulsada = str(input("-¿Quiere introducir mas productos a la compra? S/N\n"))
    if teclaPulsada != "S" and teclaPulsada != "s":
        seguir = False
print("El precio final de la compra es de ","{0:.2f}".format(precioCompra),"$")
    