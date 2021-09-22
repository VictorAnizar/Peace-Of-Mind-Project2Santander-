//importamos mongoose 
const mongoose = require('mongoose');

//generamos un esquema, por cada modelo se define un esquema. 
//Recibe 2 objetos: el primero es un objeto qcon todos los campos para crear un usuario
//el segundo parametro es un objeto de config con dos params: la coleccion de la BD y timestamp(guarda los logs)
const EnfermedadScheme = new mongoose.Schema({
    nombre: { type: String, required: true },
    texto: { type: String, required: true }
}, {collection: "enfermedades", timestamps: true});

//se necesita una funcion para indicar cuáles atributos son publicos y, por lo tanto, son accesibles para todos los usuarios
//Siempre que se defina un esquema se tiene que definir este metodo "public data"
EnfermedadScheme.methods.publicData = ()=> {
    return {
        id: this.id,
        nombre: this.nombre,
        texto: this.texto
    }
}
//Los attr anteriores son accesibles para todos. "Password" no es accesible para todo el mundo
//cada que en JS hablemos de "Usuario", nos referimos al esquema
mongoose.model("Enfermedad", EnfermedadScheme);