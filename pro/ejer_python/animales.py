animales = ["Perro", "Gato", "Elefante", "Jirafa"]
animalEnEspera = ""
seguir = "si"


while seguir == "Si" or seguir == "si" or seguir == "SI":
    estaEnLaLista = False
    animalEnEspera = input("Inserte un animal nuevo: ").title()
    if animalEnEspera[len(animalEnEspera)-1] == "s":
        animalEnEspera = animalEnEspera[0 : -1]

    if animalEnEspera in  animales:
        print("El animal esta en la lista")
    else:
        animales.append(animalEnEspera)
    
    seguir = input("Quiere insertar mas animales? Si/No \n")


animales.remove(0)
animales.remove(1)
print(animales)
