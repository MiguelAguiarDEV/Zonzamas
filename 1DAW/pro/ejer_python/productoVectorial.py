A = ["i", "j", "k" ]
B = ["i", "j", "k" ]
resultado = ["i", "j", "k" ]
i = 0 
for eje in A:
    A[i] = int(input("Introduce el valor del " + eje + " en el producto A: "))
    i += 1
i = 0
for eje in B:

    B[i] = int(input("Introduce el valor del " + eje + " en el producto B: "))
    i+= 1    
    
resultado[0] =  str(A[1]*B[2]-A[2]*B[1])+"i"
resultado[1] =  str(A[0]*B[2]-A[2]*B[0])+"j"
resultado[2] =  str(A[0]*B[1]-A[1]*B[0])+"k"

print("        | i j k |\nA x B = |"
      ,A[0],A[1],A[2],"| = ",resultado[0],resultado[1],resultado[2],"\n        |"
      ,B[0],B[1],B[2],"|\n")
      

