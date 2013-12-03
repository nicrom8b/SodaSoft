function recorridoDAO_getByBarrio (idBarrio, callbackOk, callbackError){

	db.transaction(function(tx) {
          tx.executeSql('select r.*, c.id_calendario as c_id_calendario, c.dia, c.turno from recorridos r, calendarios c where r.id_barrio=? and r.id_calendario=c.id_calendario',[idBarrio], callbackOk, callbackError);
        }); 
}
