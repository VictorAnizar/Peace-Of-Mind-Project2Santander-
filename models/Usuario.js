
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const secret = require('../config').secret;


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
    
  hash: String,
  salt: String
}, { collection: "usuarios", timestamps: true });



UsuarioScheme.plugin(uniqueValidator, {message : "Ya existe"})


UsuarioScheme.methods.crearPassword = function (password) {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512')
  .toString("hex")
}

UsuarioScheme.methods.validarPassword = function (password) {
  const newHash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512')
  .toString('hex')
  return this.hash === newHash
}

UsuarioScheme.methods.generaJWT = function() {
  const today = new Date();
  const exp = new Date(today);
  exp.setDate(today.getDate() + 60);

  return jwt.sign({
    id: this._id,
    usuario: this.usuario,
    exp: parseInt(exp.getTime() / 1000),
  }, secret)
}

UsuarioScheme.methods.toAuthJSON = function(){
  return {
    usuario: this.usuario,
    token: this.generaJWT()
  }
}

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