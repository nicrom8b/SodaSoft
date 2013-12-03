function visitas_visitaDeHoy(){
    //Se actualiza la fecha cada vez que se hace clic en visitas de hoy o se actualiza la pagina (en el index.html)
  fechaHoy = new Date();
  //fechaHoy.setFullYear(2013,11,3);

  var diaSemanaStr = fechaUtils_getDiaSemanaString(fechaHoy.getDay());
  var turno = fechaUtils_getTurnoByFecha(fechaHoy);

  manager_cambiarSeleccionItemMenu('itemMenuVisitasHoy');

  divContenidoElement.children().remove();
  var legend = $('<legend align="center"></legend>');
  legend.text('Calendario de Visitas - '+diaSemanaStr+' '+fechaUtils_format(fechaHoy, '/,dd-mm-yyyy'));
  divContenidoElement.append(legend);

  //clienteDao_getAll(pintarTablaVisitasHoy, connection_error);
  console.log(fechaHoy.toString('dd-MMM-yyyy'));
  console.log(diaSemanaStr);
  console.log(turno);

  clienteDao_getByDiaTurno(diaSemanaStr, turno, pintarTablaVisitasHoy, connection_error);
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
    tr.append($('<th>Visitado</th>'));

    thead.append(tr);
    table.append(thead);

    var tbody = $('<tbody></tbody>');

    //var dataset = result.rows;

  var tr;

    if(clientes.length == 0){
      tr = $('<tr class="info"></tr>');
        tr.append($('<td colspan="5"><center><p>Sin resultados</p></center></td>'));
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
              if(unCliente.visitado){
                tr.append($('<td><i class="icon-large icon-ok-sign"></i></td>'));
              }else{
                tr.append($('<td><i class="icon-large icon-remove-sign"></i></td>'));
              }
              
              tbody.append(tr);
      }
  }

    table.append(tbody);
    divContenidoElement.append(table);
}