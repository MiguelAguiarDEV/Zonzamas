drop database if exists videoclub;
source videoclub_ddl.sql;
use videoclub;

INSERT INTO Director VALUES (id_director,"Martin Scorsese","Estadounidense");
INSERT INTO Director VALUES (id_director,"James Cameron","Estadounidense");

INSERT INTO Actor VALUES (id_actor,"Robert De Niro","Estadounidense","Hombre");
INSERT INTO Actor VALUES (id_actor,"Zoe Saldaña","Estadounidense","Mujer");
INSERT INTO Actor VALUES (id_actor,"Sam Worthington","Australiano - Británico","Hombre");

INSERT INTO Pelicula VALUES (id_pelicula,"Taxi Driver","Estados Unidos","Bill/Phillips",STR_TO_DATE('10/03/1977','%d/%m/%Y'),101);
INSERT INTO Pelicula VALUES (id_pelicula,"Taxi Driver","Estados Unidos","Bill/Phillips",STR_TO_DATE('10/03/1977','%d/%m/%Y'),101);

INSERT INTO Participa VALUES (301,201,"Travis Bickle");
INSERT INTO Participa VALUES (302,202,"Neytiri");
INSERT INTO Participa VALUES (302,203,"Jake Sully");

INSERT INTO Socio (dni,nombre,direccion,telefono) VALUES (11111111,"Fernando","Calle uno","611111111");
INSERT INTO Socio VALUES (11111112,"Javier","Calle dos","622111111",11111111);
INSERT INTO Socio VALUES (11111113,"Luis","Calle tres","633111111",11111111);

INSERT INTO Ejemplar VALUES (301,1,"Bueno");
INSERT INTO Ejemplar VALUES (301,2,"Malo");
INSERT INTO Ejemplar VALUES (302,1,"Bueno");
INSERT INTO Ejemplar VALUES (302,2,"Regular");

INSERT INTO Alquilado VALUES (301,1,11111111,STR_TO_DATE('22/04/2022','%d/%m/%Y'),STR_TO_DATE('24/04/2022','%d/%m/%Y'));
INSERT INTO Alquilado VALUES (301,2,11111112,STR_TO_DATE('12/05/2022','%d/%m/%Y'),STR_TO_DATE('14/05/2022','%d/%m/%Y'));
INSERT INTO Alquilado VALUES (302,2,11111111,STR_TO_DATE('01/06/2022','%d/%m/%Y'),STR_TO_DATE('05/06/2022','%d/%m/%Y'));

