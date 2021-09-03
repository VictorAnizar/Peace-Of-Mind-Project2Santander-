class Usuario{
    constructor(idUsuario, nombre, apellidos, usuario, contrasenia, tipoUsuario){
        this.idUsuario=idUsuario;
        this.nombre=nombre;
        this.apellidos=apellidos;
        this.usuario=usuario;
        this.contrasenia=contrasenia;
        this.tipoUsuario=tipoUsuario;
    }
}
module.exports=Usuario;