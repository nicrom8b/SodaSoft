function solicitarInforme(){
	divContenidoElement.children().remove();
	divContenidoElement.append('<legend>GENERAR INFORMES </legend>'
                      
                 +'<form class="form-vertical">'
                   +'<fieldset>'
                     +'<div align="left">'
                        +'<label class="control-label" for="optionsCheckboxList"> <br> Seleccionar tipo de informe:</label>'
                          +'<div class="controls">'
                             +'<label class="checkbox">'
                               +'<input type="checkbox" name="optionsCheckboxList1" value="option1"> mensual'
                              +'</label>'
                            +'<label class="checkbox">'
                                +'<input type="checkbox" name="optionsCheckboxList2" value="option2"> semanal'
                              +'</label>'
                            +'<label class="checkbox">'
                                +'<input type="checkbox" name="optionsCheckboxList3" value="option3"> quincenal'
                            +'</label>'
                         +'</div>'
                      +'</div>'
 
                   +'</fieldset>'
                 +'</form>'
             
 
           
 
          +'<div align="center">'
            +'<a class="btn btn-primary" href="#">Aceptar</a>'
       +'</div>');   
}

 