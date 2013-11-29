function manager_vender(idCliente, sifonCantidad, fechaHoy){
  var fechaHoyStr = manager_getFromatedDateYYYMMDD(fechaHoy);

  db.transaction(function(tx) {
        tx.executeSql('insert into ventas (id_cliente, fecha_vendido) VALUES (?, ?)',
          [idCliente, fechaHoyStr], function(tx2, result){

            for (var i = 0; i < sifonCantidad.length; i++) {
              tx.executeSql('insert into detalle_ventas (id_venta, id_sifon, cantidad) VALUES (?, ?, ?)',
                [result.insertId, sifonCantidad[i].id, sifonCantidad[i].cantidad], null, connection_error);
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

function insertDetalleVenta(){

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