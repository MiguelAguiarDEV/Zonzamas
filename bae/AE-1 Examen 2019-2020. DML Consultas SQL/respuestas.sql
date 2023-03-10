/* 1. */
select cliente.nombre, producto.nombre, venta.fechaventa, venta.cantidad from venta 
/* 2. */
INNER JOIN cliente ON venta.dnicliente = cliente.dni 
/* 3. */
INNER JOIN producto ON producto.codigo = venta.codigoproducto;


select cliente.pais, sum(venta.cantidad) totalventas from cliente inner join venta on cliente.dni = venta.dnicliente group by cliente.nombre,cliente.pais;