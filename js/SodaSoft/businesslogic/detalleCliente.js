function detalleCliente(idCliente){
	divContenidoElement.children().remove();

	clienteDao_getById(idCliente, pintarDetalleCliente, connection_error);
}

function pintarDetalleCliente(ts, result){
	//alert(result.rows.item(0)['nombre']);
	var clienteVo = result.rows.item(0);
	var div = $('<div class="nav" align="center"></div>');
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
	bottonDiv.append($('<a class="btn btn-primary" href="#"> Vender</a>'));
	bottonDiv.append($('<a class="btn btn-prymary" href="#"> Pago</a>'));
	div.append(bottonDiv);

	divContenidoElement.append(div);
}