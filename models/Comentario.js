//importamos mongoose
const mongoose = require('mongoose');

const ComentarioScheme = new mongoose.Schema({
    texto: { type: String, required: true },
    reacciones: { type: Number, required: true },
    anonimo: { type: Boolean, required: true },
    idEnfermedad: { type: mongoose.Schema.Types.ObjectId, ref: "Enfermedad" },
    idUsuario: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario" }
}, {collection: "comentarios", timestamps: true});

ComentarioScheme.methods.publicData = ()=> {
    return {
        id: this.id,
        texto: this.texto,
        reacciones: this.reacciones,
        anonimo: this.anonimo,
        idEnfermedad: this.idEnfermedad,
        idUsuario: this.idUsuario
    }
}

//Los attr anteriores son accesibles para todos. "Password" no es accesible para todo el mundo
//cada que en JS hablemos de "Usuario", nos referimos al esquema
mongoose.model("Comentario", ComentarioScheme);