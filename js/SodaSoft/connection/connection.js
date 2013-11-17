//Agregar las otras tablas con ;
//ej: "CREATE TABLE IF NOT EXISTS clientes (bla bla); CREATE TABLE IF NOT EXISTS productos (bla bla)"
function connection_createTable(callbackOk, callbackError) { 
          db.transaction(function(tx) {
          tx.executeSql("CREATE TABLE IF NOT EXISTS clientes (id_cliente INTEGER PRIMARY KEY AUTOINCREMENT, nombre TEXT, apellido TEXT, id_barrio INTEGER NOT NULL, saldo TEXT, estado INTEGER, direccion TEXT);",
      
      [], callbackOk, callbackError);

        });
      }
function connection_error(tx, error){
        alert(error.message);
      }