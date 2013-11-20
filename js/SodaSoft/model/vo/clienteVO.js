function ClienteVO(idCliente, nombre, apellido, idBarrio, barrioVo, saldo, idEstado, estadoVo, direccion){
	this.idCliente = idCliente;
	this.nombre = nombre;
	this.apellido = apellido;
	this.idBarrio = idBarrio;
	this.barrioVo = barrioVo;
	this.saldo = saldo;
	this.idEstado= idEstado;
	this.estadoVo = estadoVo;
	this.direccion = direccion;

	this.getApellidoComaEspacioNombre = function(){
		return this.apellido+', '+this.nombre;
	}
}