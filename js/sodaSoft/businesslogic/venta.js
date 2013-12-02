var sifones;
var idCliente;

function venta(idClienteParam){
	idCliente = idClienteParam;

	divContenidoElement.children().remove();

	//clienteDao_getById(idCliente, pintarVenta, connection_error);
	sifonDao_getAll(setPrecios, connection_error);
}

function setPrecios(ts, result){
	//preciosSifones = {'vidrio':2.5, 'plastico':3.5, 'malla':2};
	sifones = manager_resultToSifones(result);
	clienteDao_getById(idCliente, pintarVenta, connection_error);
}

function pintarVenta(ts, result){
	var clientesVo = manager_resultToClientes(result);

	if(!clientesVo){
		return;
	}

	var clienteVo = clientesVo[0];

	/*var form = $('<form class="form-horizontal"></form>');
	var fieldset = $('<fieldset></fieldset>');
	fieldset.append($('<legend></legend>').text(clienteVo.getApellidoComaEspacioNombre()));

	var div = $('<div class="control bs-docs-example"></div>');
	div.append($('<label><p><strong>Sifones a Devueltos:</strong><p></label> '));

	var otroDiv = $('<div class="controls controls-row"></div>');
	otroDiv.append($('<label class="span2" for="input01">Tipo </label>'));
	otroDiv.append($('<select class="span4 "id="select01"></select>').append($('<option>Ninguno</option>')).append($('<option>Todos</option>')).append($('<option>Sifon Vidrio</option>')).append($('<option>Sifon Plastico</option>')).append($('<option>Sifon con malla</option>')));
	otroDiv.append($('<label class="span2" align="left" for="input01">Cantidad</label>'));
	otroDiv.append($('<input type="text" class="span3 input-mini" id="input01">'));

	div.append(otroDiv);

	fieldset.append(div);

	//
	div = $('<div class="control bs-docs-example"></div>');
	//div.append($('<label><p><strong>Sifones a Devueltos:</strong><p></label> '));

	otroDiv = $('<div class="control"></div>');
	otroDiv.append($('<label><p><strong>Sifones a Vender:</strong><p></label> '));

	var otroOtroDiv = $('<div class="controls controls-row"></div>');
	otroOtroDiv.append('<label class="span2" for="input01"> Tipo </label>');
	otroOtroDiv.append($('<select class="span4 "id="sifonTipoVenta"></select>').append($('<option value="1">Sifon Vidrio</option>')).append($('<option value="2">Sifon Plastico</option>')).append($('<option value="3">Sifon con malla</option>')));

	otroOtroDiv.append($('<label class="span2" align="left" for="input01">Canitidad</label>'));
	otroOtroDiv.append($('<input type="text" class="span3 input-mini" id="input01">'));
	otroOtroDiv.append($('<button class="btn btn-primary" onclick="agregarVenta('+$('#sifonTipoVenta').val()+');"> + </button>'));
	otroDiv.append(otroOtroDiv);

	div.append(otroDiv);

	fieldset.append(div);
	//

	div = $('<div class="control-group">');
	div.append('<label class="span3"><p><strong> Monto a total</strong> </p></label>');
	otroDiv = $('<div class="span4 input-prepend input-append ">');
	otroDiv.append('<span class="add-on">$</span>');
	otroDiv.append('<input class="span4" id="appendedPrependedInput" type="text">');
	otroDiv.append('<span class="add-on">.00</span>');
	div.append(otroDiv);

	fieldset.append(div);

	div = $('<div  align="center">');
	div.append('<button class="btn btn-primary"  type="submit">Vender</button>');
	fieldset.append(div);

	form.append(fieldset);
	
	divContenidoElement.append(form);*/

/*	divContenidoElement.append(
	'<form class="form-horizontal">'
              +'<fieldset>'
               +'   <legend>'+clienteVo.getApellidoComaEspacioNombre()+'</legend>'

                  +'<div class="control bs-docs-example">'
                  +'<label><p><strong>Sifones a Devueltos:</strong><p></label>   '
                 
                 +' <div class="controls controls-row">'
                    +'<label class="span2" for="input01"> Tipo </label>'
                    +'<select class="span4 "id="select01">'
                    +'   <option>Ninguno</option>'
                    +'   <option>Todos</option>'
                     +'   <option>Sifon Vidrio</option>'
                        +'<option>Sifon Plastico</option>'
                        +'<option>Sifon con malla</option>'
                   +'</select>'
                   +'<label class="span2" align="left" for="input01">Canitidad</label>'
                   +'<input type="text" class="span3 input-mini" id="input01">'
                  +'</div>'
                +'</div>'
                
                 +'<div class="control bs-docs-example" id="divSifonesVender">'
                +'<div class="control">'
                  +'<label><p><strong>Sifones a Vender:</strong><p></label>   '
                  +'</div>'
                  +'<div class="controls controls-row">'
                    +'<label class="span2" for="input01"> Tipo </label>'
                    +'<select class="span4 "id="sifonTipoVenta">'
                        +'<option value="'+SIFON_TIPO_VIDRIO+'">'+SIFON_VIDRIO_TXT+'</option>'
                        +'<option value="'+SIFON_TIPO_PLASTICO+'">'+SIFON_PLASTICO_TXT+'</option>'
                        +'<option value="'+SIFON_TIPO_MALLA+'">'+SIFON_MALLA_TXT+'</option>'
                   +'</select>'
                   +'<label class="span2" align="left" for="cantidadSifonesVender">Canitidad</label>'
                   +'<input type="text" class="span3 input-mini" id="cantidadSifonesVender">'
                   +'<button class="btn btn-primary" onclick="agregarVenta();"> + </button>'
                  +'</div>'

                  +'<table id="tablaVentas" class="table table-bordered table-hover">'
                  	+'<thead>'
                  		+'<tr>'
                  			+'<th>Tipo</th>'
							+'<th>Cantidad</th>'
							+'<th>SubTotal</th>'
						+'</tr>'
					+'</thead>'
					+'<tbody>'
						+'<tr class="info">'
							+'<td>Vidrio</td>'
							+'<td><input type="number" value="0"></td>'
							+'<td><label>0.0</label></td>'
						+'</tr>'
						+'<tr class="info">'
							+'<td>Plastico</td>'
							+'<td><input type="number" value="0"></td>'
							+'<td><label>0.0</label></td>'
						+'</tr>'
						+'<tr class="info">'
							+'<td>Con Malla</td>'
							+'<td><input type="number" value="0"></td>'
							+'<td><label>0.0</label></td>'
						+'</tr>'
					+'</tbody>'
                  +'</table>'

                +'</div>'
                  
 +'<div class="control-group">'
  +'<label class="span3"><p><strong> Monto a total</strong> </p></label>'
  +'<div class="span4 input-prepend input-append ">'
    +'<span class="add-on">$</span>'
      +'<input class="span4" id="appendedPrependedInput" type="text">'
    +'<span class="add-on">.00</span>'
  +'</div>'
+'</div>'

+'<div  align="center">'
+'<button class="btn btn-primary"  >'
  +'Vender'
+'</button>'
+'</div>'
 +'           </fieldset>'
          +'</form>'
	 );*/

	divContenidoElement.append(
	'<form class="form-horizontal">'
              +'<fieldset>'
               +'   <legend>'+clienteVo.getApellidoComaEspacioNombre()+'</legend>'

                  +'<div class="control bs-docs-example">'
                  +'<label><p><strong>Sifones a Devueltos:</strong><p></label>   '
                 
                 +' <div class="controls controls-row">'
                    +'<label class="span2" for="input01"> Tipo </label>'
                    +'<select class="span4 "id="select01">'
                    +'   <option>Ninguno</option>'
                    +'   <option>Todos</option>'
                     +'   <option>Sifon Vidrio</option>'
                        +'<option>Sifon Plastico</option>'
                        +'<option>Sifon con malla</option>'
                   +'</select>'
                   +'<label class="span2" align="left" for="input01">Canitidad</label>'
                   +'<input type="text" class="span3 input-mini" id="input01">'
                  +'</div>'
                +'</div>'
                
                 +'<div class="control bs-docs-example" id="divSifonesVender">'
                +'<div class="control">'
                  +'<label><p><strong>Sifones a Vender:</strong><p></label>   '
                  +'</div>'
                  +'<div class="controls controls-row">'
                  +'</div>'

                  +'<table id="tablaVentas" class="table table-bordered table-hover">'
                  	+'<thead>'
                  		+'<tr>'
                  			+'<th>Tipo</th>'
							+'<th>Cantidad</th>'
							+'<th>SubTotal</th>'
						+'</tr>'
					+'</thead>'
					+'<tbody>'
						+'<tr class="info">'
							+'<td>'+sifones[0].descripcion+'</td>'
							+'<td><input id="cantidadVidrio" idSifon="'+sifones[0].idSifon+'" type="number" value="0" onchange="calcularSubTotal(this.value, '+SIFON_TIPO_VIDRIO+', \'vidrio_label_subtotal\');"></td>'
							+'<td><label id="vidrio_label_subtotal">0.0</label></td>'
						+'</tr>'
						+'<tr class="info">'
							+'<td>'+sifones[1].descripcion+'</td>'
							+'<td><input id="cantidadPlastico" idSifon="'+sifones[1].idSifon+'" type="number" value="0" onchange="calcularSubTotal(this.value, '+SIFON_TIPO_PLASTICO+', \'plastico_label_subtotal\');"></td>'
							+'<td><label id="plastico_label_subtotal">0.0</label></td>'
						+'</tr>'
						+'<tr class="info">'
							+'<td>'+sifones[2].descripcion+'</td>'
							+'<td><input id="cantidadMalla" idSifon="'+sifones[2].idSifon+'" type="number" value="0" onchange="calcularSubTotal(this.value, '+SIFON_TIPO_MALLA+', \'malla_label_subtotal\');"></td>'
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

function vender(){

	var sifonCantidadMonto = new Array();

	if($('#cantidadVidrio').val() != 0){
		sifonCantidadMonto.push({'id' : $('#cantidadVidrio').attr('idSifon'), 'cantidad' : $('#cantidadVidrio').val(), 'precio' : sifones[0].precio});	
	}
	if($('#cantidadPlastico').val() != 0){
		sifonCantidadMonto.push({'id' : $('#cantidadPlastico').attr('idSifon'), 'cantidad' :  $('#cantidadPlastico').val(), 'precio' : sifones[1].precio})	
	}
	if($('#cantidadMalla').val() != 0){
		sifonCantidadMonto.push({'id' : $('#cantidadMalla').attr('idSifon'), 'cantidad' :  $('#cantidadMalla').val(), 'precio' : sifones[2].precio});
	}
	
	if(sifonCantidadMonto.length == 0){
		return false;
	}

	var montoTotal = 0.0;

	for (var i = 0; i < sifonCantidadMonto.length; i++) {
		montoTotal += parseFloat(sifonCantidadMonto[i].precio) * parseInt(sifonCantidadMonto[i].cantidad);
	};

	manager_vender(idCliente, sifonCantidadMonto, montoTotal, fechaHoy);
}

function calcularSubTotal(cantidad, tipo, idLabelSubtotal){
	var precioSifon = 0.0;

	for (var i = 0; i < sifones.length; i++) {
		if(sifones[i].tipo == tipo){
			precioSifon = sifones[i].precio;
		}
	};

	$('#'+idLabelSubtotal).text((Number(precioSifon)*Number(cantidad)).toFixed(2));

	var subtotalVidrio = parseFloat($('#vidrio_label_subtotal').text());
	var subtotalPlastico = parseFloat($('#plastico_label_subtotal').text());
	var subtotalMalla = parseFloat($('#malla_label_subtotal').text());

	$('#montoTotal').val((subtotalVidrio+subtotalPlastico+subtotalMalla).toFixed(2));

	if($('#montoTotal').val() <= 0){
		$('#btnVender').prop('disabled', true);
	}else{
		$('#btnVender').prop('disabled', false);
	}
}
