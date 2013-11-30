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