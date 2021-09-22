const mongoose = require('mongoose');

const UsuarioScheme = new mongoose.Schema({
    nombre: { type: String, required: true },
    apellidos: { type: String, required: true },
    usuario: {
        type: String,
        unique: true,
        required: [true, "No puede estar vacío el username"],
        lowercase: true,
        match: [/^[a-z0-9]+$/, "Username no valido"],
        index: true
    },
    //la contraseña ya no va a estar aqui
    // password: { type: String, required: true },
    tipoUsuario: { type: String, enum: ['indirecto', 'directo', 'externo'], required: true },

}, { collection: "usuarios", timestamps: true });


UsuarioScheme.methods.publicData = () => {
    return { 
        id: this.id,
        nombre: this.nombre,
        apellidos: this.apellidos,
        usuario: this.usuario,
        tipoUsuario: this.tipoUsuario
    }
}
mongoose.model("Usuario", UsuarioScheme);