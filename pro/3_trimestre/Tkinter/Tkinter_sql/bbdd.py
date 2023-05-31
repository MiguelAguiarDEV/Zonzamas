import mysql.connector

class BBDD():
    def __init__(self,host,user,passwd,bbdd_name):
        
        self.BBDD_HOST = host
        self.BBDD_USER = user
        self.BBDD_PASS = passwd
        self.BBDD_BBDD = bbdd_name
        
        self.bbdd_conexion = mysql.connector.connect(
            host    = self.BBDD_HOST
           ,user    = self.BBDD_USER
           ,passwd  = self.BBDD_PASS
           ,db      = self.BBDD_BBDD     
        )
        
        self.cur = self.bbdd_conexion.cursor()
        
    def hacer_consulta(self,consulta):
        self.cur.execute(consulta)
        for resultado_consulta in self.cur.fetchall():
            resultado_consulta += resultado_consulta
        return resultado_consulta
    
    def insertar_datos(self,insercion):
        pass
        