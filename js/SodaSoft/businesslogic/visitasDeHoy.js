function visitas_visitaDeHoy(){
	divContenidoElement.children().remove();
	var legend = $('<legend align="center"></legend>');
	legend.text('Calendario de Visitas - Sabado 15/10/2013');
	divContenidoElement.append(legend);

	clienteDao_getAll(pintarTablaVisitasHoy, connection_error);
//	db.transaction(function(tx) {
  //        tx.executeSql("INSERT INTO clientes (nombre, apellido, id_barrio, saldo, estado, direccion) VALUES (?, ?, ?, ?, ?, ?)", ["Jorge", "Riera", "1", "120.00","activo", "malvinas 123"], clienteDao_getAll(pintarTablaVisitasHoy), connection_error);
    //    });

}

function pintarTablaVisitasHoy(tx, result){
	var table = $('<table class="table table-bordered table-hover"></table>');
    var thead = $('<thead></thead>');
    var tr = $('<tr></tr>');

    tr.append($('<th>#</th>'));
    tr.append($('<th>Cliente</th>'));
    tr.append($('<th>Direccion</th>'));
    tr.append($('<th>Barrio</th>'));
   	tr.append($('<th>Estado</th>'));

   	thead.append(tr);
    table.append(thead);

    var tbody = $('<tbody></tbody>');

    var dataset = result.rows;

	var tr;

    if(dataset.length == 0){
    	tr = $('<tr class="info"></tr>');
        tr.append($('<td> Sin resultados</td>'));
        tbody.append(tr);
    }else{
    	for (var i = 0, item = null; i < dataset.length; i++) {
    		  item = dataset.item(i);
    		  tr = null;

              tr = $('<tr class="info"></tr>');
              tr.append($('<td>'+item['id_cliente']+'</td>'));
              tr.append($('<td><a href="#" onclick="detalleCliente('+item['id_cliente']+');">'+item['apellido']+', '+item['nombre']+'</a></td>'));
              tr.append($('<td>'+item['direccion']+'</td>'));
              tr.append($('<td>'+item['id_barrio']+'</td>'));
              //tr.append($('<td>'+item['saldo']+'</td>'));
              tr.append($('<td>'+item['estado']+'</td>'));
              

              tbody.append(tr);
    	}
	}

    table.append(tbody);
    divContenidoElement.append(table);
}

