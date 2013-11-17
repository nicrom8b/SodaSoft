function clienteDao_getAll(callbackOk, callbackError){
	db.transaction(function(tx) {
          tx.executeSql("SELECT * FROM clientes", [], callbackOk, callbackError);
        },
        function (){
        	alert('error');
        },
        function (){
        	//alert('ok');
        });
}

function clienteDao_getById(idCliente, callbackOk, callbackError){
	db.transaction(function(tx) {
          tx.executeSql("SELECT * FROM clientes WHERE id_cliente = ?", [idCliente], callbackOk, callbackError);
        }); 
}