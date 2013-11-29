function sifonDao_getAll(callbackOk, callbackError){
    db.transaction(function(tx) {
          tx.executeSql('select * from sifones', null, callbackOk, callbackError);
        });
}