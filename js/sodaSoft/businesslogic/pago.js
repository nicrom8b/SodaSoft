var idCliente;
var montoTotalCuenta;
var ventas;

function pago(idClienteParam){
	idCliente = idClienteParam;
	montoTotalCuenta = 0.0;
	ventas = undefined;

	divContenidoElement.children().remove();

	clienteDao_getById(idClienteParam, pintarPago, connection_error);
}

function pintarPago(ts, result){
	var clientesVo = manager_resultToClientes(result);
	if(!clientesVo){
		return;
	}

	var clienteVo = clientesVo[0];

	/*var form = $('<form class="form-horizontal"></form>');
	var fieldset = $('<fieldset></fieldset>');
	fieldset.append($('<legend></legend>').text(clienteVo.getApellidoComaEspacioNombre()));
	var div = $('<div class="control bs-docs-example"></div>');
	div.append($('<label><p><strong>Saldo:</strong><p></label>'));

	var otroDiv = $('<div class="controls controls-row"></div>');
	otroDiv.append($('<label class="span2" for="input01">Tipo </label>'));
	otroDiv.append($('<select class="span4 "id="select01"></select>').append($('<option>TODO</option>')).append($('<option>Sifon Vidrio</option>')).append($('<option>Sifon Plastico</option>')).append($('<option>Sifon con malla</option>')));
	otroDiv.append($('<label class="span2" align="left" for="input01">Cantidad</label>'));
	otroDiv.append($('<input type="text" class="span3 input-mini" id="input01">'));

	div.append(otroDiv);
	div.append($('<br>'));
	div.append($('<label><p><strong>Monto</strong></p></label>'));

	fieldset.append(div);
	fieldset.append($('<label><p><strong>A pagar:</strong></p></label>'));
	fieldset.append($('<label class="control-label" for="input01">Monto</label>'));

	div = $('<div class="controls"></div>');

	otroDiv = $('<div class="span4 input-prepend input-append ">');
	otroDiv.append('<span class="add-on">$</span>');
	otroDiv.append('<input class="span4" id="appendedPrependedInput" type="text">');
	otroDiv.append('<span class="add-on">.00</span>');

	div.append(otroDiv);

	fieldset.append(div);

	div = $('<div  align="center"></div>');
	div.append('<button class="btn btn-primary"  >Cobrar</button>');

	fieldset.append(div);

	form.append(fieldset);
	
	divContenidoElement.append(form);*/

		divContenidoElement.append(
	'<form class="form-horizontal">'
              +'<fieldset>'
               +'   <legend>'+clienteVo.getApellidoComaEspacioNombre()+'</legend>'
                
                 +'<div class="control bs-docs-example" id="divSifonesVender">'
                +'<div class="control">'
                  +'<label><p><strong>Cuentas a pagar:</strong><p></label>   '
                  +'</div>'
                  +'<div class="controls controls-row">'
                  +'</div>'

                  +'<table id="tablaVentas" class="table table-bordered table-hover">'
                  	+'<thead>'
                  		+'<tr>'
                  			+'<th>Fecha</th>'
							+'<th>SubTotal</th>'
						+'</tr>'
					+'</thead>'
					+'<tbody id="tbdoyVentas">'
						+'<tr class="info">'
							+'<td colspan="2">Sin resultados</td>'
					+'</tbody>'
                  +'</table>'

                +'</div>'
                  
 +'<div class="control-group">'
  +'<label class="span3"><p><strong> Monto a total</strong> </p></label>'
  +'<div class="span4 input-prepend input-append ">'
    +'<span class="add-on">$</span>'
      +'<input class="span4" id="montoApagar" type="text" value="0.0" onchange="verificar();">'
  +'</div>'
+'</div>'

+'<div  align="center">'
+'<button type="button" id="btnPagar" class="btn btn-primary" onclick="pagar();">'
  +'Pagar'
+'</button>'
+'</div>'
 +'           </fieldset>'
          +'</form>'
	 );

	venta_getAllByCliente(idCliente, cargarDatos, connection_error);
}

function cargarDatos(tx, result){
	ventas = manager_resultToVentas(result);
	var tbody = $('#tbdoyVentas');
	var tr;

	if(ventas.length == 0){
		/*tr = $('<tr class="info" colspan="2">'
			+'<td>Sin resultados</td>'
			+'</tr>');*/

		return false;
	}

	tbody.children().remove();

/*alert(ventas[0].fechaVendido);
alert(temp);
alert(fechaUtils_format(temp, '/,dd-mm-yyyy'));*/
var temp = new Date();

	for (var i = 0; i < ventas.length; i++) {
		console.log(ventas[i].fechaVendido);

		var fechaStr = ventas[i].fechaVendido.split('-');
		temp.setFullYear(fechaStr[0],parseInt(fechaStr[1]) - 1, fechaStr[2]);

		tr = $('<tr class="info">'
			+'<td>'+fechaUtils_format(temp, '/,dd-mm-yyyy')+'</td>'
			+'<td>$ 	'+ventas[i].montoTotal.toFixed(2)+'</td>'
			+'</tr>');
		tbody.append(tr);

		montoTotalCuenta += ventas[i].montoTotal;
	};

	$('#montoApagar').val(montoTotalCuenta.toFixed(2));
}

function verificar(){
	if($('#montoApagar').val() == 0 || $('#montoApagar').val() > montoTotalCuenta){
		$('#btnPagar').prop('disabled', true);
		alert('El monto a pagar no puede ser cero o mayor al total.');
	}else{
		$('#btnPagar').prop('disabled', false);
	}
}

function pagar(){
	ventas[0].idVenta;
	manager_pagar(ventas, $('#montoApagar').val(), fechaHoy, idCliente);//cuidado aca con fechaHoy
}