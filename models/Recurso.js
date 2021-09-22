const mongoose = require('mongoose');

const RecursoScheme = new mongoose.Schema({
    tipo: {type: String, required: true},
    nombre: {type: String, required: true},
    link: {type: String, required: true},
    idEnfermedad: { type: mongoose.Schema.Types.ObjectId, ref: "Enfermedad" }
})

RecursoScheme.methods.publicData = ()=>{
    return {
        id: this.id,
        tipo: this.tipo,
        nombre: this.nombre,
        link: this.link,
        idEnfermedad: this.idEnfermedad
    }
}

mongoose.model("recursos", RecursoScheme);
