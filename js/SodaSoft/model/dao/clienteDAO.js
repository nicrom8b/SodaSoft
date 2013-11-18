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

function clienteDao_save(nombre, apellido, direccion,callbackOk,callbackError){
    db.transaction(function(tx) {
          tx.executeSql("INSERT INTO clientes (nombre, apellido, id_barrio, saldo, estado, direccion) VALUES (?,?,?,?,?,?)", [nombre,apellido,1,"120.00", "activo",direccion], callbackOk, callbackError);
        }); 

}
