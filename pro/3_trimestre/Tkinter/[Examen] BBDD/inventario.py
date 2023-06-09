import mysql.connector

class Inventario_BD():
    def __init__(self):
        
        self.BBDD_HOST = "localhost"
        self.BBDD_USER = "miguel"
        self.BBDD_PASS = "Csas.1234"
        self.BBDD_BBDD = "Inventario"
        
        self.bbdd_conexion = mysql.connector.connect(
            host    = self.BBDD_HOST
           ,user    = self.BBDD_USER
           ,passwd  = self.BBDD_PASS
           ,db      = self.BBDD_BBDD     
        )
        
        self.cur = self.bbdd_conexion.cursor()
        
    def hacer_consulta(self,consulta):
        self.cur.execute(consulta)
        resultado_consulta = []
        for x in self.cur.fetchall():
            resultado_consulta.append(x)
        return resultado_consulta
    
    def insertar_articulo(self,nombre,anho,tipo):

        self.cur.execute(f"select id from tipos_articulos where nombre = '{tipo}'")
        id_tipo_articulo = ""
        for x in self.cur.fetchall():
            id_tipo_articulo = x[0]
        print(id_tipo_articulo)
        self.cur.execute(f"INSERT INTO articulos (nombre, id_tipo_articulo, anho) VALUES ('{nombre}', '{id_tipo_articulo}', '{anho}');")
        self.bbdd_conexion.commit()

    def ver_articulos(self):
        self.cur.execute("select * from articulos")
        resultado_consulta = []
        for x in self.cur.fetchall():
            resultado_consulta.append(x[0])
        return resultado_consulta 
        
    def ver_tipos_articulos(self):
        self.cur.execute("select nombre from tipos_articulos")
        resultado_consulta = []
        for x in self.cur.fetchall():
            resultado_consulta.append(x[0])
        return resultado_consulta 

    
    
    def ver_articulos_año(self):
        self.cur.execute(f"select YEAR(fecha_alta) from articulos")
        anhos = []
        anho_cantidad = {}
        for x in self.cur.fetchall():
            anhos.append(x[0])
            for anho in anhos:
                self.cur.execute(f"select count(YEAR(fecha_alta)) from articulos")
                for y in self.cur.fetchall():
                    anho_cantidad[anho] = y[0]
        return anho_cantidad
            
    
    
    def ver_datos_articulo(self,id):
        self.cur.execute(f"select id,nombre,id_tipo_articulo,anho from articulos where id = '{id}'")
        resultado_consulta = []
        for x in self.cur.fetchall():
            resultado_consulta.append(x[1])
            resultado_consulta.append(x[2])
            resultado_consulta.append(x[3])

        return resultado_consulta 
        
