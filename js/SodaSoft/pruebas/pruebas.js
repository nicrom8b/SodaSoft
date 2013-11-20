function prueba_insertClientes(){
  db.transaction(function(tx) {
          tx.executeSql("INSERT INTO clientes (nombre, apellido, id_barrio, saldo, estado, direccion) VALUES (?, ?, ?, ?, ?, ?)", ["David", "Rearte", "2", "10.00","1", "malvsdsinas 1232"], null, connection_error);

          tx.executeSql("INSERT INTO clientes (nombre, apellido, id_barrio, saldo, estado, direccion) VALUES (?, ?, ?, ?, ?, ?)", ["Jorge", "Riera", "2", "10.00","2", "malvsdsinas 1232"], null, connection_error);

          tx.executeSql("INSERT INTO clientes (nombre, apellido, id_barrio, saldo, estado, direccion) VALUES (?, ?, ?, ?, ?, ?)", ["Martin", "Quispe", "2", "10.00","3", "malvsdsinas 1232"], null, connection_error);
        });
}
      
function prueba_insertBarrios(){
        db.transaction(function(tx) {
          tx.executeSql("INSERT INTO barrios (nombre, descripcion) VALUES (?, ?)", ["Cnel Arias", "Zona Sur"], null, connection_error);

          tx.executeSql("INSERT INTO barrios (nombre, descripcion) VALUES (?, ?)", ["Malvinas", "Zona Sur"], null, connection_error);

          tx.executeSql("INSERT INTO barrios (nombre, descripcion) VALUES (?, ?)", ["Cdad de Nieva", "Zona Centro"], null, connection_error);
        });
}

function prueba_insertCalendarios(){
        db.transaction(function(tx) {
          tx.executeSql("INSERT INTO calendarios (dia, turno) VALUES (?, ?)", ["Lunes", "Mañana"], null, connection_error);

            tx.executeSql("INSERT INTO calendarios (dia, turno) VALUES (?, ?)", ["Lunes", "Tarde"], null, connection_error);

              tx.executeSql("INSERT INTO calendarios (dia, turno) VALUES (?, ?)", ["Martes", "Mañana"], null, connection_error);

                tx.executeSql("INSERT INTO calendarios (dia, turno) VALUES (?, ?)", ["Martes", "Tarde"], null, connection_error);
        });
}

function prubea_insertCalBarrCLi(){
        db.transaction(function(tx) {
          tx.executeSql("INSERT INTO calendarios_barrios_clientes (id_calendario, id_barrio, id_cliente) VALUES (?, ?, ?)", [1, 1, 1], null, connection_error);

          tx.executeSql("INSERT INTO calendarios_barrios_clientes (id_calendario, id_barrio, id_cliente) VALUES (?, ?, ?)", [1, 2, 2], null, connection_error);

          tx.executeSql("INSERT INTO calendarios_barrios_clientes (id_calendario, id_barrio, id_cliente) VALUES (?, ?, ?)", [2, 3, 3], null, connection_error);
        });
}

function prueba_dropTable(table){
  db.transaction(function(tx) {
          tx.executeSql("DROP TABLE "+table, []);
        });
}