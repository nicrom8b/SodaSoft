function nuevoBackup(){
        divContenidoElement.children().remove();
        divContenidoElement.append('<form class="form-horizontal">'
              +'<fieldset>'
                  +'<legend>Generar BackUp</legend>'
              +'<label><p><strong>Tipo de BackUp:</strong><p></label>  '
                  +'<div class="control bs-docs-example">'
                  +'<label class="radio">'
                    +'<input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>'
                    +'Incremental'
                    +'</label>'
                    +'<label class="radio">'
                    +'<input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">'
                    +'Total'
              +'</label>'
                  +'</div>'
                   +'<div class="controls controls-row">'
                    +'<label class="span4" align="rigth" for="input01"> Destino BackUp </label>'
                   +'<input type="button" class="span8 input-mini" id="input01" value="Seleccionar">'
                  +'</div>'
        +'<div  >'
        +'<button class="btn btn-primary"  type="submit">'
          +'Generar'
        +'</button>');  
 
 
}