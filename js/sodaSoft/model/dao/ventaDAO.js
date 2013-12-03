function venta_getAllByCliente(idCliente, callbackOk, callbackError){
	db.transaction(function(tx) {
          tx.executeSql('select '
                             +' vent.* '
                        +' from '
                             +' ventas vent'
                        +' where '
                            +' vent.id_cliente = ? and vent.cancelado = ? '
                        +'order by date(vent.fecha_vendido) asc', [idCliente, 0], callbackOk, callbackError);
        });
}

function ventaDao_getSaldoByCliente(idCliente, callbackOk, callbackError){
	db.transaction(function(tx) {
          tx.executeSql('select '
                             +' SUM(vent.monto_total) as saldo'
                        +' from '
                             +' ventas vent'
                        +' where '
                            +' vent.id_cliente = ? and vent.cancelado = ? ', [idCliente, 0], callbackOk, callbackError);
        });
}
/*
select 
                             SUM(vent.monto_total) as saldo
                        from 
                              ventas vent
                         where 
                        vent.id_cliente = 4 and vent.cancelado = 0
*/