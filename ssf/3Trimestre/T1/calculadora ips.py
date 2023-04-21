def direccion_red(ip,mascara_subred):
    ip = [bin(int(octeto))[2:] for octeto in ip.split(".")]
    mascara_subred = [bin(int(octeto))[2:] for octeto in mascara_subred.split(".")]
    primer_octeto = int(ip[0],2) & int(mascara_subred[0],2)
    segundo_octeto = ip[1] 
    tercero_octeto = ip[2]
    cuarto_octeto = ip[3]



    return primer_octeto

print(direccion_red("135.254.129.229","255.255.248.0"))
