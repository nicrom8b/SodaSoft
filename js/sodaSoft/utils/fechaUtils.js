function fechaUtils_format(date, mask){
  var mesesNomAcotado = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sept', 'Oct', 'Nov', 'Dic'];
  var yyyy = date.getFullYear().toString();                                    
  var mm = (date.getMonth()+1).toString();
  var dd  = date.getDate().toString();             

  var split = mask.split(',');
  var separador = split[0];
  var format = split[1].split('-');

  if(format[1] == 'Mm'){
  	mm = mesesNomAcotado[mm];
  }
                            
  return dd + separador + mm + separador + yyyy;
}