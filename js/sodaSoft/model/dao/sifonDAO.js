function sifonDao_getAll(callbackOk, callbackError){
    db.transaction(function(tx) {
          tx.executeSql('select * from sifones', null, callbackOk, callbackError);
        });
}

function sifonDao_getByCliente(idCliente, callbackOk, callbackError){
    db.transaction(function(tx) {
          tx.executeSql('select'
          	+' sif.*, SUM(dv.cantidad) as cantidad_prestado '
          +' from '
          	+' sifones sif, detalle_ventas dv, ventas v '
          +' where '
          	+' dv.id_venta = v.id_venta '
          +' and '
          	+' v.id_cliente = ? '
          +' and '
          	+' dv.id_sifon = sif.id_sifon '
          +' group by dv.id_sifon ', [idCliente], callbackOk, callbackError);
        });
}
/*
select
          	sif.*, SUM(dv.cantidad) as cantidad_prestado 
          from 
          	sifones sif, detalle_ventas dv, ventas v 
          where 
          	 dv.id_venta = v.id_venta 
          and 
          	 v.id_cliente = 7
          and 
          	 dv.id_sifon = sif.id_sifon 
          group by dv.id_sifon
*/