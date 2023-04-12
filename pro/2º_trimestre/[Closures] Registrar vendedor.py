# Crear la función 'registrar_vendedor' aquí



def registrar_vendedor(nombre):
    ventas = 0
    
    def registrar_venta(cantidad):
        nonlocal ventas
        ventas += cantidad
        return f"{nombre}: {ventas}"
    
    return registrar_venta   


# Registrar a dos empleados
empleado_1 = registrar_vendedor("Laura")
empleado_2 = registrar_vendedor("Carlos")


# Reportar ventas de los empleados
print(empleado_1(150)) # Laura: 150
print(empleado_1(300)) # Laura: 450
print(empleado_2(500)) # Carlos: 500
print(empleado_1(200)) # Laura: 650