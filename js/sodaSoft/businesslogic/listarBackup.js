function listarBackup(){
        divContenidoElement.children().remove();
        divContenidoElement.append('<legend align="center">Administracion BackUp</legend>'
+'<p><strong> BackUp Recientes</strong> </p>'
 +'<table id="table1" class="table table-bordered table-hover" >'
 +'<thead>'
  +'<tr>'
   +'<th>#</th>'
   +'<th>Usuario</th>'
   +'<th>Fecha</th>'
   +'<th>Tipo</th>'
  +'</tr>'
 +'</thead>'
 +'<tbody>'
 +'<tr class="info">'
   +'<td>1</td>'
   +'<td><a href="usuario.html">UsuarioRoot</a></td>'
   +'<td>12/04/2013</td>'
   +'<td>Incremental</td>'
  +'</tr>'

   +'<tr class="success">'
   +'<td>1</td>'
  +'<td><a href="usuario.html">UsuarioRoot</a></td>'
   +'<td>15/04/2013</td>'
   +'<td>Total</td>'
  +'</tr>'

  +'<tr class="info">'
   +'<td>1</td>'
   +'<td><a href="usuario.html">UsuarioRoot</a></td>'
   +'<td>16/04/2013</td>'
   +'<td>Incremental</td>'
  +'</tr>'

  +'<tr class="info">'
   +'<td>1</td>'
   +'<td><a href="usuario.html">UsuarioRoot</a></td>'
   +'<td>17/04/2013</td>'
   +'<td>Incremental</td>'
  +'</tr>'

 +'</tbody>'
+'</table>');  
 
 
}