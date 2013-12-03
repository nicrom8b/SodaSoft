function barrioDAO_getAll(callbackOk, callbackError){
	 db.transaction(function(tx) {
          tx.executeSql('select * from barrios', [], callbackOk, callbackError);
        },
        function (){
          alert('error');
        },
        function (){
          //alert('ok');
        });
}

