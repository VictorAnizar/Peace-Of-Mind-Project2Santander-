class Articulo{
    constructor(idArticulo, titulo, texto, referencias, idUsuario, idEnfermedad){
        this.idArticulo=idArticulo;
        this.titulo=titulo;
        this.texto=texto;
        this.referencias=referencias;
        this.idUsuario=idUsuario;
        this.idEnfermedad=idEnfermedad;
        
    }
}
module.exports=Articulo