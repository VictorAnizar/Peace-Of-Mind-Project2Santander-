//importamos mongoose
const mongoose = require('mongoose');
//generamos un esquema, por cada modelo se define un esquema. 
//Recibe 2 objetos: el primero es un objeto qcon todos los campos para crear un usuario
//el segundo parametro es un objeto de config con dos params: la coleccion de la BD y timestamp(guarda los logs)

const ArticuloScheme = new mongoose.Schema({
    titulo: { type: String, required: true },
    texto: { type: String, required: true },
    referencias: { type: String, required: true },
    idUsuario: {type: mongoose.Schema.Types.ObjectId, ref: "Usuario"},
    idEnfermedad: {type: mongoose.Schema.Types.ObjectId, ref: "Enfermedad"}
}, {collection: "articulos", timestamps: true});

//se necesita una funcion para indicar cuáles atributos son publicos y, por lo tanto, son accesibles para todos los usuarios
//Siempre que se defina un esquema se tiene que definir este metodo "public data"
ArticuloScheme.methods.publicData = () => {
    return {
        id: this.id,
        titulo: this.titulo,
        referencias: this.referencias,
        idUsuario: this.idUsuario,
        idEnfermedad: this.idEnfermedad
    }
}

//cada que en JS hablemos de "Articulo", nos referimos al esquema
mongoose.model("Articulo", ArticuloScheme);
