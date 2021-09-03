class Comentario{
    constructor(idComentario, texto, reacciones, idComentarioPrincipal, anonimo, idUsuario, idEnfermedad){
        this.idComentario=idComentario;
        this.texto=texto;
        this.reacciones=reacciones;
        this.idComentarioPrincipal=idComentarioPrincipal;
        this.anonimo=anonimo;
        this.idUsuario=idUsuario;
        this.idEnfermedad=idEnfermedad;
    }
}
module.exports=Comentario;