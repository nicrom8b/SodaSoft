function formNuevoCliente(){
	divContenidoElement.children().remove();
	var legend = $('<legend align="center"></legend>');
	legend.text('Nuevo Cliente');
	divContenidoElement.append(legend);
	var div= $('<div class="nav" align="center"></div>');
	var form= $('<form class="form-horizontal"> </form>');
	var firstDiv= $('<div class="control-group"></div>');
	firstDiv.append($('<label class="control-label" for="inputNombre">Nombre: </label>'));
	firstDiv.append($('<div class="controls">'));
	firstDiv.append($(' <input type="text" id="inputNombre" placeholder="Escriba nombre">'));
	firstDiv.append($('</div>'));

	var secondDiv= $('<div class="control-group"></div>');
	secondDiv.append($('<label class="control-label" for="inputApellido">Apellido:</label>'));
	secondDiv.append($('<div class="controls">'));
	secondDiv.append($(' <input type="text" id="inputApellido" placeholder="Ingrese apellido">'));
	secondDiv.append($('</div>'));

	var thirdDiv= $('<div class="control-group"></div>');
	thirdDiv.append($('<label class="control-label" for="inputDireccion">Dirección:</label>'));
	thirdDiv.append($('<div class="controls">'));
	thirdDiv.append($(' <input type="text" id="inputDireccion" placeholder="Ingrese Dirección">'));
	thirdDiv.append($('</div>'));

	var fourthDiv= $('<div></div>');
	fourthDiv.append($('<label class="control-label"> Barrio </label>'))
	var select=$('<select id=selecBarrio> </select>');
	select.append('<option>1</option>');
	select.append('<option>2</option>');
	select.append('<option>3</option>');
	select.append('<option>4</option>');
	fourthDiv.append(select);

	var fifthDiv= $('<div class="control-group"></div>');
	fifthDiv.append($('<label class="control-label" for="inputSaldo">Saldo:</label>'));
	fifthDiv.append($('<div class="controls">'));
	fifthDiv.append($(' <input type="text" id="inputSaldo" placeholder="Ingrese Saldo">'));
	fifthDiv.append($('</div>'));

	var divButton= $('<div align="center"></div>');
	divButton.append($('<a class="btn btn-primary" onClick="guardarCliente()" href="#" >Registrar</a>'));

	form.append(firstDiv);
	form.append(secondDiv);
	form.append(thirdDiv);
	form.append(fifthDiv);
	form.append(fourthDiv);
	form.append(divButton);
	div.append(form);
	divContenidoElement.append(div);

}

function guardarCliente(){
	

 	var nombre = document.getElementById('inputNombre');
 	var apellido = document.getElementById('inputApellido');  
 	var direccion = document.getElementById('inputDireccion'); 

 	clienteDao_save( nombre.value, apellido.value, direccion.value, pintarConfirmacion, connection_error);
}

function pintarConfirmacion(){
	divContenidoElement.children().remove();
	var div=$('<div class="alert alert-success"> Se guardo cliente exitosamente!</div>');
	divContenidoElement.append(div);
 }

