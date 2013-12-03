function realizarPago(){
  divContenidoElement.children().remove();

	divContenidoElement.append(
	'<form class="form-horizontal">'
              +'<fieldset>'
               +'   <legend>Un Cliente a pagar</legend>'
                
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
  +'Cobrar'
+'</button>'
+'</div>'
 +'           </fieldset>'
          +'</form>'
	 );

	
}