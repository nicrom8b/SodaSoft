function visitas_visitaDeHoy(){
  manager_cambiarSeleccionItemMenu('itemMenuVisitasHoy');

  divContenidoElement.children().remove();
  var legend = $('<legend align="center"></legend>');
  legend.text('Calendario de Visitas - Viernes 23/06/2013');
  divContenidoElement.append(legend);

  //Se actualiza la fecha cada vez que se hace clic en visitas de hoy o se actualiza la pagina (en el index.html)
  fechaHoy = new Date();
  //fechaHoy.setFullYear(2013,11,2);

  //clienteDao_getAll(pintarTablaVisitasHoy, connection_error);
  clienteDao_getByDiaTurno(manager_getDiaSemanaString(fechaHoy.getDay()), manager_getTurnoByFecha(fechaHoy), pintarTablaVisitasHoy, connection_error);
  /*db.transaction(function(tx) {
          tx.executeSql("INSERT INTO clientes (nombre, apellido, id_barrio, saldo, estado, direccion) VALUES (?, ?, ?, ?, ?, ?)", ["Jorge", "Riera", "1", "120.00","activo", "malvinas 123"], clienteDao_getAll(pintarTablaVisitasHoy), connection_error);
        });*/

}

function pintarTablaVisitasHoy(tx, result){
  var clientes = manager_resultToClientes(result);

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

    //var dataset = result.rows;

  var tr;

    if(clientes.length == 0){
      tr = $('<tr class="info"></tr>');
        tr.append($('<td> Sin resultados</td>'));
        tbody.append(tr);
    }else{
      var unCliente = new ClienteVO();

      for (var i = 0; i < clientes.length; i++) {
          unCliente = clientes[i];
          tr = null;

              tr = $('<tr class="info"></tr>');
              tr.append($('<td>'+unCliente.idCliente+'</td>'));
              tr.append($('<td><a href="#" onclick="detalleCliente('+unCliente.idCliente+');">'+unCliente.getApellidoComaEspacioNombre()+'</a></td>'));
              tr.append($('<td>'+unCliente.direccion+'</td>'));
              tr.append($('<td>'+unCliente.barrioVo.nombre+'</td>'));
              //tr.append($('<td>'+item['saldo']+'</td>'));
              tr.append($('<td>'+unCliente.estadoVo.descripcion+'</td>'));
              

              tbody.append(tr);
      }
  }

    table.append(tbody);
    divContenidoElement.append(table);
}