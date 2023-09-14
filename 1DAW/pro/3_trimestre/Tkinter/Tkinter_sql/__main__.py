from bbdd import *



mi_bbdd = BBDD('localhost','miguel','Csas.1234','CIRCO')
print(mi_bbdd.hacer_consulta('select * from ANIMALES'))
