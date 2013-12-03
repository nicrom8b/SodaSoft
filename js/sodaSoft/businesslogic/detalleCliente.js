var clienteVo;
var saldo;

function detalleCliente(idCliente){
	divContenidoElement.children().remove();

	clienteDao_getById(idCliente, detalleCliente_cargarDatos, connection_error);
}

function detalleCliente_cargarDatos(tx, result){
	clienteVo = manager_resultToClientes(result)[0];
	ventaDao_getSaldoByCliente(clienteVo.idCliente, detalleCliente_cargarSaldo, connection_error);
}

function detalleCliente_cargarSaldo(tx, result){
	console.log(result.rows.item(0).saldo);
	saldo = result.rows.item(0).saldo;
	saldo = saldo ? parseFloat(saldo).toFixed(2) : 0.0;
	sifonDao_getByCliente(clienteVo.idCliente, pintarDetalleCliente, connection_error);
}

function pintarDetalleCliente(tx, result){
	//alert(result.rows.item(0)['nomconexion a sqlite con javascript asincronabre']);
	var sifones = manager_resultToSifones(result);
	/*var div = $('<div class="nav" align="center"></div>');
	div.append($('<b>Cliente: '+clienteVo['apellido']+', '+clienteVo['nombre']+'</b>'));
	divContenidoElement.append(div);

	div = null;
	div = $('<div align="rigth"></div>');
	var form = $('<form class="form-horizontal"></form>');
	var fieldset = $('<fieldset></fieldset>');
	var firstDiv= $('<div class="control-group row"></div>');
	//firstDiv.append($('<p>Dirección</p>'));
	firstDiv.append($('<legend> </legend>').text('Dirección: '+clienteVo['direccion']));
	firstDiv.append($('<label class="control-label">Sifones cedidos</label>'));
	firstDiv.append($('<input type="text" class="input-xlarge disabled" placeholder="9 [harcodeado]" disabled>'));
	var secondDiv= $('<div class="control-group row"></div>');
	secondDiv.append($('<label class="control-label" for="input01">Saldo</label>'));
	secondDiv.append($('<input type="text" class="input-xlarge disabled" id="input01" placeholder="$ 34 [hardcodeado]" disabled>'));
	form.append(firstDiv);
	form.append(secondDiv);
	div.append(form);

	var bottonDiv= $('<div align="center"> </div>');
	bottonDiv.append($('<a class="btn btn-primary" href="#"> Visitar</a>'));
	bottonDiv.append($('<a class="btn btn-primary" onclick="venta('+clienteVo.idCliente+')" href="#"> Vender</a>'));
	bottonDiv.append($('<a class="btn btn-prymary" onclick="pago('+clienteVo.idCliente+')" href="#"> Pago</a>'));
	div.append(bottonDiv);*/



	//divContenidoElement.append(div);
	divContenidoElement.append('<div class="nav" align="center">'
              +'<b> Cliente: Riera, Jorge Justino </b>'
 
                +'</div>'
                +'<div align="rigth">'
                +'<form class="form-horizontal">'
                                +'<fieldset>'
                 					+'<legend>Dirección: '+clienteVo.direccion+'</legend>'
                                +'<div class="control-group">'
                                +'<label class="control-label"<br> Sifones cedidos</label>'

                                +'<table id="tablaCedidos" class="table table-bordered table-hover">'
                  					+'<thead>'
                  						+'<tr>'
                  							+'<th>Tipo</th>'
											+'<th>Cantidad</th>'
										+'</tr>'
									+'</thead>'
									+'<tbody id="tbodySifonesCedidos"></tbody>'
								+'</table>'

                                +'<label class="control-label" for="input01">Saldo</label>'
                                +'<div class="span4 input-prepend input-append ">'
    								+'<span class="add-on">$</span>'
      								+'<input class="span4" id="inputSaldo" type="text" disabled value="0.0" onchange="verificar();">'
  								+'</div>'
 
                                +'</div>'
               
                                        +'</fieldset>'
                        +'</form>'
          +'</div>'
          +'<div align="center">'
            +'<button class="btn btn-primary" href="#">Visitar</button>'
            +'<button class="btn btn-warning" onclick="venta('+clienteVo.idCliente+')" href="#">Vender</button>'
            +'<button id="btnCobro" class="btn btn-success" onclick="pago('+clienteVo.idCliente+')" href="#">Cobrar</button>'
          +'</div>');
	
	$('#inputSaldo').val(saldo == 0 ? '0.0' : saldo);

	if(saldo == 0){
		$('#btnCobro').prop('disabled', true);
	}

	var tbody = $('#tbodySifonesCedidos');

	if(sifones.length == 0){
		tbody.append('<tr><td>Sin resultados</td></tr>');
		return false;
	}

	for (var i = 0; i < sifones.length; i++) {

		tbody.append('<tr><td>'+sifones[i].descripcion+'</td><td>'+sifones[i].cantidadPrestado+'</td></tr>');

	};
}