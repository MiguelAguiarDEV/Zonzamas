"""
[c] Contar: Me pide otra cadena, y me dice cuantas veces aparece en la lista
[m] Modificar: Me pide una cadena, y otra cadena a modificar, y modifica todas las apariciones de la primera por la segunda en la lista.
[e] Eliminar: Me pide una cadena, y la elimina de la lista.
[s] Mostrar: Muestra la lista de cadenas
[t] Terminar
"""
laLista = []

terminar = False

comandos = ("\nPuede hacer uso de los siguientes comandos.\n[c] Contar(Cuenta las veces que aparece la cadena introducida, el la lista)\n[m] Modificar(Reemplaza la cadena introducida por la que indique si aparece en la lista)\n[E] Eliminar(Elimina la cadena introducida, de la lista)\n[S] Mostrar(Muestra la lista por pantalla)\n[T] Terminar(Termina el programa)\n[h] Ayuda(ver la lista de comandos disponibles)\n")
print(comandos)
while not terminar:
    opcion_recogida = input("Introduce una instruccion o un elemento para agragar a la lista: ")
    if opcion_recogida == "c":
        opcion_recogida = input("Indique el elemento que quiere contar en la lista: ")
        print(laLista.count(opcion_recogida))
    elif opcion_recogida == "m":
        opcion_recogida = input("Indique el elemento que quiere modificar: ")
        if opcion_recogida in laLista:
            reemplazar = input("Indique la modificacion que quiere realizar: ")
            while opcion_recogida in laLista:
                pos_elemento = laLista.index(opcion_recogida)
                laLista.remove(opcion_recogida)
                laLista.insert(pos_elemento, reemplazar)
        else: 
            print("El elemento \"{}\" no esta en la lista".format(opcion_recogida))
        
    elif opcion_recogida == "e":
        opcion_recogida = input("Indique el elemento que quiere eliminar de la lisa: ")
        if opcion_recogida in laLista:
            while opcion_recogida in laLista:
                laLista.remove(opcion_recogida)
        else:
            print("El elemento \"{}\" no esta en la lista".format(opcion_recogida))
            opcion_recogida == ""
        
    elif opcion_recogida == "s":
        print(laLista)
    elif opcion_recogida == "t":
        terminar=True
    elif opcion_recogida == "h":
        print(comandos)
    else:
        if opcion_recogida != "":
            laLista.append(opcion_recogida)
        else:
            print("Error. No puede introducir un elemento vacio")