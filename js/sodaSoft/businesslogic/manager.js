/*function manager_pagar(ventasVo, montoRecibido, fechaPago, idCliente, i){
  var fechaStr = manager_getFromatedDateYYYMMDD(fechaPago);

  db.transaction(function(tx) {
          var saldo = 1;
          //var i = 0;
          var cancelado = 0;

          if(saldo <= 0){
            return false;
          }

              var unaVentaVo = ventasVo[i];
              saldo = parseFloat(montoRecibido - unaVentaVo.montoTotal).toFixed(2);
              cancelado = saldo >= 0 ? 1 : 0;

              var montoPagado = cancelado == 1 ? unaVentaVo.montoTotal : montoRecibido;
              var saldoDeuda = parseFloat(unaVentaVo.montoTotal - montoPagado).toFixed(2);
              
              tx.executeSql('insert into pagos (id_venta, monto, fecha_pago) values (?, ?, ?) ', [unaVentaVo.idVenta, montoPagado, fechaStr], function(tx2, result){
                tx.executeSql('update ventas set monto_total = ?, cancelado = ? ', [saldoDeuda, cancelado], manager_pagar(ventasVo, saldo, fechaPago, idCliente, i+1), connection_error);
              }, connection_error);
              

              //i+=1;
              //montoRecibido = saldo;
            }
          alert('Pagado con éxito!');
          pago(idCliente);
        });
}*/


function manager_pagar(ventasVo, montoRecibido, fechaPago, idCliente){
  var fechaStr = manager_getFromatedDateYYYMMDD(fechaPago);

  db.transaction(function(tx) {
          var saldo = 1;
          var i = 0;
          var cancelado = 0;

          while(saldo > 0){
              var unaVentaVo = ventasVo[i];
              saldo = parseFloat(montoRecibido - unaVentaVo.montoTotal).toFixed(2);
              cancelado = saldo >= 0 ? 1 : 0;

              var montoPagado = cancelado == 1 ? unaVentaVo.montoTotal : montoRecibido;
              var saldoDeuda = parseFloat(unaVentaVo.montoTotal - montoPagado).toFixed(2);
              
              tx.executeSql('insert into pagos (id_venta, monto, fecha_pago) values (?, ?, ?) ', [unaVentaVo.idVenta, montoPagado, fechaStr], null, connection_error);
              tx.executeSql('update ventas set monto_total = ?, cancelado = ? where id_venta = ?', [saldoDeuda, cancelado, unaVentaVo.idVenta], null, connection_error);

              i+=1;
              montoRecibido = saldo;
            }
          alert('Pagado con éxito!');
          detalleCliente(idCliente);
        });
}

function manager_resultToVentas(result){
  var ventas = new Array();
  var dataset = result.rows;

  var unaVenta;
  var item;

  for (var i = 0; i < dataset.length; i++) {
      item = dataset.item(i);

      unaVenta = new VentaVO();
      unaVenta.idVenta = item.id_venta;
      unaVenta.idCliente = item.id_cliente;
      unaVenta.fechaVendido = item.fecha_vendido;
      unaVenta.montoTotal = item.monto_total;
      unaVenta.cancelado = item.cancelado;

      ventas.push(unaVenta);
  }

  return ventas;
}

function manager_vender(idCliente, sifonCantidadMonto, montoTotal, fechaVenta){
  var fechaStr = manager_getFromatedDateYYYMMDD(fechaVenta);

  db.transaction(function(tx) {
        tx.executeSql('insert into ventas (id_cliente, fecha_vendido, monto_total, cancelado) VALUES (?, ?, ?, ?)',
          [idCliente, fechaStr, montoTotal, 0], function(tx2, result){

            for (var i = 0; i < sifonCantidadMonto.length; i++) {
              tx.executeSql('insert into detalle_ventas (id_venta, id_sifon, cantidad, monto) VALUES (?, ?, ?, ?)',
                [result.insertId, sifonCantidadMonto[i].id, sifonCantidadMonto[i].cantidad, parseFloat(sifonCantidadMonto[i].precio) * parseInt(sifonCantidadMonto[i].cantidad)], null, connection_error);
            };
            alert('vendido con exito!');
            pago(idCliente);
          }, connection_error);

    });
/*db.transaction(function(tx) {
        tx.executeSql('insert into pruebas (descripcion, fecha) VALUES (?, ?)',
          ['descrip', fechaHoyStr], function(tx2, result){
              alert(result.insertId);
          }, connection_error);
    });*/
}

function manager_getFromatedDateYYYMMDD(date){
  var yyyy = date.getFullYear().toString();                                    
  var mm = (date.getMonth()+1).toString(); // getMonth() is zero-based         
  var dd  = date.getDate().toString();             
                            
  return yyyy + '-' + (mm[1]?mm:"0"+mm[0]) + '-' + (dd[1]?dd:"0"+dd[0]);
}

function manager_resultToSifones(result){
  var sifones = new Array();
  var dataset = result.rows;

  var unSifon;
  var item;

  for (var i = 0; i < dataset.length; i++) {
      item = dataset.item(i);

      unSifon = new SifonVO();
      unSifon.idSifon = item.id_sifon;
      unSifon.tipo = item.tipo;
      unSifon.descripcion = item.descripcion;
      unSifon.modelo = item.modelo;
      unSifon.stock = item.stock;
      unSifon.precio = item.precio;
      unSifon.estado = item.estado;

      if(item.cantidad_prestado){
        unSifon.cantidadPrestado = item.cantidad_prestado;
      }

      sifones.push(unSifon);
  }

  return sifones;
}

function manager_cambiarSeleccionItemMenu(id){
  var seleccionado = $('.active');

  if(seleccionado){
    seleccionado.removeClass('active');
  }
  $('#'+id).addClass('active');
}

function manager_resultToClientes(result){

  var clientes = new Array();
  var dataset = result.rows;

  var unCliente;
  var item;

  for (var i = 0; i < dataset.length; i++) {
      item = dataset.item(i);
//console.log(item);

      unCliente = new ClienteVO();
      unCliente.idCliente = item.id_cliente;
      unCliente.nombre = item.nombre;
      unCliente.apellido = item.apellido;
      unCliente.idBarrio = item.id_barrio;
      unCliente.saldo = item.saldo;
      unCliente.idEstado = item.estado;
      unCliente.direccion = item.direccion;

      //unCliente.estado = estados[item.estado-1];
      
      unCliente.estadoVo = cargarEstado(item);
      unCliente.barrioVo = cargarBarrio(item);

      clientes.push(unCliente);
  }
console.log(clientes);

  return clientes;
}

function cargarBarrio(item){
    var unBarrio;

  //Asumimos que si se trajo un campo de la tabla barrios, se trajo todos los campos de la tabla barrios,
  //por lo que controlamos preguntando solamente por uno
  if(item.id_barrio_Tbarrio){
        unBarrio = new BarrioVO();
        unBarrio.idBarrio = item.id_barrio_Tbarrio;
        unBarrio.nombre = item.nombre_Tbarrio;
        unBarrio.descripcion = item.descripcion_Tbarrio;
  }else{
    unBarrio = new BarrioVO();
  }

  return unBarrio;
}

function cargarEstado(item){
  var unEstado;

  //Asumimos que si se trajo un campo de la tabla estado, se trajo todos los campos de la tabla estados,
  //por lo que controlamos preguntando solamente por uno
  if(item.id_estado_Testado){
        switch(item.id_estado_Testado){
          case ESTADO_ACTIVO: unEstado = new EstadoActivoVO();
            break;
          case ESTADO_INACTIVO: unEstado = new EstadoInactivoVO();
            break;
          case ESTADO_MOROSO: unEstado = new EstadoMorosoVO();
            break;
          default: return new EstadoVO();
        }

        unEstado.idEstado = item.id_estado_Testado;
        unEstado.descripcion = item.descripcion_Testado;
  }else{
    unEstado = new EstadoVO();
  }

  return unEstado;
}
/*function manager_resultToClientes(result){

  var clientes = new Array();
  var dataset = result.rows;

  var unCliente;
  var item;

  for (var i = 0; i < dataset.length; i++) {
      item = dataset.item(i);
//console.log(item);

      unEstado = new EstadoVO();
      unEstado.idEstado = item.id_estado_Testado;
      unEstado.descripcion = item.descripcion_Testado;

      unCliente = new ClienteVO();
      unCliente.idCliente = item.id_cliente;
      unCliente.nombre = item.nombre;
      unCliente.apellido = item.apellido;
      unCliente.idBarrio = item.id_barrio;
      unCliente.saldo = item.saldo;
      unCliente.idEstado = item.estado;
      unCliente.direccion = item.direccion;

      //unCliente.estado = estados[item.estado-1];
      unCliente.estadoVo = unEstado;


      clientes.push(unCliente);
  }
console.log(clientes);

  return clientes;
}*/

function manager_getDiaSemanaString(dia){
  var semana=new Array(7);
  semana[0]="Domingo";
  semana[1]="Lunes";
  semana[2]="Martes";
  semana[3]="Miercoles";
  semana[4]="Jueves";
  semana[5]="Viernes";
  semana[6]="Sabado";

  return semana[dia];
}

function manager_getTurnoByFecha(fecha){
  var mediodia = new Date(fecha.getFullYear(), fecha.getMonth(), fecha.getDate(), 12, 0, 0, 0);

  if(fecha < mediodia){
    return 'Mañana';
  }

  return 'Tarde';
}

function manager_resultToBarrios(result){
    var barrios= new Array();
    var dataset=result.rows;

    var unBarrio;
    var item;

    for (var i=0; i<dataset.length; i++){
      item = dataset.item(i);
      
      unBarrio=new BarrioVO();
      unBarrio.idBarrio=item.id_barrio;
      unBarrio.nombre=item.nombre;
      unBarrio.descripcion=item.descripcion;

      barrios.push(unBarrio);
    }
  return barrios;
}

function manager_resultToRecorridos(result){


    var recorridos= new Array();
    var dataset=result.rows;
    console.log("result: " +result);

    var unRecorrido;
    var item;

    for (var i=0; i<dataset.length; i++){
      item = dataset.item(i);
      
      unRecorrido=new RecorridoVO();
      unRecorrido.idRecorrido=item.id_recorrido;
      unRecorrido.idBarrio=item.id_barrio;
      unRecorrido.idCalendario=item.id_calendario;
      recorridos.push(unRecorrido);

    }
  return recorridos;

}

function manager_resultToCalendarios(result){
    var calendarios= new Array();
    var dataset=result.rows;

    var unCalendario;
    var item;

    for (var i=0; i<dataset.length; i++){
      item = dataset.item(i);
      
      unCalendario=new CalendarioVO();
      unCalendario.idCalendario=item.c_id_calendario;
      unCalendario.dia=item.dia;
      unCalendario.turno=item.turno;
      calendarios.push(unCalendario);

    }

  return calendarios;

}
