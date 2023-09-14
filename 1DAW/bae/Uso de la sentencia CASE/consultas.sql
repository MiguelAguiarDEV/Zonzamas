SELECT Ident, nombre, nota, CASE 
    WHEN nota>9 THEN 'sobresaliente' 
    WHEN nota >=7 THEN 'notable' 
    WHEN nota>=5 THEN 'aprobado' 
    ELSE 'suspenso' 
    END 
as Nota from Notas;


select A.nombre as Avalado, B.nombre as Avalador from Socio as A left join Socio as B on B.dni = A.dni_avalador;
