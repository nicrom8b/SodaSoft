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
                            
  return (dd[1]?dd:"0"+dd[0]) + separador + (mm[1]?mm:"0"+mm[0]) + separador + yyyy;
}

function fechaUtils_getDiaSemanaString(dia){
  var semana=new Array(7);
  semana[0]="Domingo";
  semana[1]="Lunes";
  semana[2]="Martes";
  semana[3]="Miércoles";
  semana[4]="Jueves";
  semana[5]="Viernes";
  semana[6]="Sabado";

  return semana[dia];
}

function fechaUtils_getTurnoByFecha(fecha){
  var mediodia = new Date(fecha.getFullYear(), fecha.getMonth(), fecha.getDate(), 12, 0, 0, 0);

  if(fecha < mediodia){
    return 'Mañana';
  }

  return 'Tarde';
}