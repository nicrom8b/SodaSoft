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