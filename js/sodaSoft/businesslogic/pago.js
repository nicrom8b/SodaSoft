function pago(idCliente){
	divContenidoElement.children().remove();

	clienteDao_getById(idCliente, pintarPago, connection_error);
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
					+'<tbody>'
						+'<tr class="info">'
							+'<td>a</td>'
							+'<td><label id="vidrio_label_subtotal">0.0</label></td>'
						+'</tr>'
						+'<tr class="info">'
							+'<td>b</td>'
							+'<td><label id="plastico_label_subtotal">0.0</label></td>'
						+'</tr>'
						+'<tr class="info">'
							+'<td>c</td>'
							+'<td><label id="malla_label_subtotal">0.0</label></td>'
						+'</tr>'
					+'</tbody>'
                  +'</table>'

                +'</div>'
                  
 +'<div class="control-group">'
  +'<label class="span3"><p><strong> Monto a total</strong> </p></label>'
  +'<div class="span4 input-prepend input-append ">'
    +'<span class="add-on">$</span>'
      +'<input class="span4" id="montoTotal" type="text" value="0.0" readonly>'
  +'</div>'
+'</div>'

+'<div  align="center">'
+'<button type="button" id="btnVender" class="btn btn-primary" onclick="vender();" disabled="disabled">'
  +'Vender'
+'</button>'
+'</div>'
 +'           </fieldset>'
          +'</form>'
	 );

}