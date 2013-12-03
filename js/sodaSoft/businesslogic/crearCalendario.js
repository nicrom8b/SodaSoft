function crearCalendario(){
	divContenidoElement.children().remove();
	divContenidoElement.append('<form class="form-horizontal">'
              +'<fieldset>'
                  +'<legend>ADMINISTRACIÓN DE CALENDARIOS</legend>'
 
                  +'<div class="control bs-docs-example">'
                      +'<legend> Nuevo Calendario de Visitas</legend>'
                      +'<div class="controls-row">'
                      +'<label class="span3" for="input01">Seleccione día</label>'
                      +'<input type="text" class="span3" name= "datepicker" id="datepicker" />'
                    +'</div>'
                      
                    +'<div class="controls-row">'
                      +'<label class="span3"  for="input02">Seleccione turno</label>'
                      +'<input type="text" class="span3" id="input02">'
                      +'</div>'

                   +'<div class="controls-row">'
                    +'<label class="span3" for="input01"> Seleccione barrios </label>'
                    +'<select class="span4 "id="select01">'
                        +'<option>San Pedrito</option>'
                        +'<option>Malvinas</option>'
                        +'<option>Sargento Cabral</option>'
                        +'<option>Alto comedero</option>'
                   +'</select>'
                 +'</div>'
                 +'<div  align="center">'
                  +'<button class="btn btn-primary"  type="submit">'
                            +'Crear'
                  +'</button>'
                +'</div>' 
                   
                +'</div>'
                 
            +'</fieldset>'
          +'</form>');   


}

 