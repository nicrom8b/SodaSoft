function nuevoCliente(){
	divContenidoElement.children().remove();
	barrioDAO_getAll(pintarNuevoCliente,connection_error);

}


function pintarNuevoCliente(tx, result){
	var barrios= manager_resultToBarrios(result);

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
	
	var select=$('<select id=selectBarrio  onchange="mostrarRecorrido(selectBarrio);" > </select>');

	if(barrios.length == 0){
    	select.append('<option>No hay barrios disponibles</option>');
    }else{
      var unBarrio = new BarrioVO();

      for (var i = 0; i < barrios.length; i++) {

          unBarrio = barrios[i];
          select.append('<option value="'+unBarrio.idBarrio+'" >'+unBarrio.nombre+'</option>');

        
          
      }
     }
      fourthDiv.append(select);

    var	divContenidoTabla=$('<div class="control-group" id=divContenidoTabla ></div>');
  

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
	form.append(divContenidoTabla);
	form.append(divButton);
	div.append(form);
	divContenidoElement.append(div);

}

function guardarCliente(){
	

	var checkboxValues = new Array();
	//recorremos todos los checkbox seleccionados con .each
	$('input[name="checkboxRecorridos"]:checked').each(function() {
	//$(this).val() es el valor del checkbox correspondiente
	checkboxValues.push($(this).val());
	});
	
	for (var i = 0; i < checkboxValues.length; i++){
		calendarioDAO()

	}
	
 	var nombre = document.getElementById('inputNombre');
 	var apellido = document.getElementById('inputApellido');  
 	var direccion = document.getElementById('inputDireccion'); 
 	var barrio= document.getElementById('selectBarrio');
 

 	clienteDao_save( nombre.value, apellido.value, direccion.value, barrio.value, pintarConfirmacion, connection_error);
}

function pintarConfirmacion(){
	divContenidoElement.children().remove();
	var div=$('<div class="alert alert-success"> Se guardo cliente exitosamente!</div>');
	divContenidoElement.append(div);
 }

function mostrarRecorrido(idBarrio){
	barrio=idBarrio.value;
	recorridoDAO_getByBarrio(barrio, pintarMostrarRecorrido, connection_error);


}

function pintarMostrarRecorrido(tx, result) {


	var recorridos= manager_resultToRecorridos(result);
	var calendarios= manager_resultToCalendarios(result);
	var unCalendario= new CalendarioVO();
	var unRecorrido=new RecorridoVO();
	console.log(result);

	var contenidoTabla= $('#divContenidoTabla');
	contenidoTabla.children().remove();

	var firstLabel=$('<label > Seleccionar recorrido </label>');
	contenidoTabla.append(firstLabel);


    for (var i = 0; i < calendarios.length; i++) {
          unCalendario = calendarios[i];
          unRecorrido = recorridos[i];
    	  label=null;
    	  input=null;
		  label= $('<label class="checkbox"></label>');
		  label.append($('<input type="checkbox" name="checkboxRecorridos" value="'+unCalendario.idCalendario+'"> '+unCalendario.dia+', '+unCalendario.turno+'</input>'));
	
		contenidoTabla.append(label);
	}

	
}

