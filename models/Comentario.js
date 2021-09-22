//importamos mongoose
const mongoose = require('mongoose');

const ComentarioScheme = new mongoose.Schema({
    texto: { type: String, required: true },
    reacciones: { type: Number, required: true },
    anonimo: { type: Boolean, required: true },
    idUsuario: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario", required: false },
    idEnfermedad: { type: mongoose.Schema.Types.ObjectId, ref: "Enfermedad" }
}, { collation: "comentarios", timestamps: true });

ComentarioScheme.methods.publicData = () => {
    return {
        id: this.id,
        texto: this.texto,
        reacciones: this.reacciones,
        anonimo: this.anonimo,
        idUsuario: this.idUsuario,
        idEnfermedad: this.idEnfermedad
    }
}

//Los attr anteriores son accesibles para todos. "Password" no es accesible para todo el mundo
//cada que en JS hablemos de "Usuario", nos referimos al esquema
mongoose.model("Comentario", ComentarioScheme);