// importamos el modelo de usuarios
// controllers/usuarios.js
const mongoose = require("mongoose")
const Usuario = mongoose.model("Usuario")

function crearUsuario(req, res, next) {
  let usuario = new Usuario(req.body);
  usuario.save()
    .then(
      usr => {
        res.status(200).send(usr);
      }
    )
    .catch(next);

}

function obtenerUsuarios(req, res, next) {

  if (req.params.id) {
    Usuario.findById(req.params.id)
      //Si sale bien, se manda el registro
      .then(
        usr => { res.send(usr) }
      )
      //Si sale mal se deja que mongoose responda
      .catch(next);
  }
  else {
    Usuario.find()
      //Si sale bien, se regresan los datos
      .then(usrs => res.send(usrs))
      //Si sale mal, mongoose responde
      .catch((next));
  }

}

function modificarUsuario(req, res, next) {
  Usuario.findById(req.params.id)
    .then(usr => {
      if (!usr) {
        return res.status(401).send("Registro no encontrado para modificar")
      }
      let nuevaInfo = req.body;
      //Si se desea cambiar el nombre
      if (typeof nuevaInfo.nombre !== "undefined") {
        usr.nombre = nuevaInfo.nombre
      }
      //Si se desea cambiar el apellido
      if (typeof nuevaInfo.apellidos !== "undefined") {
        usr.apellidos = nuevaInfo.apellidos
      }
      //Si se desea cambiar el nickname
      if (typeof nuevaInfo.usuario !== "undefined") {
        usr.usuario = nuevaInfo.usuario
      }
      //Si se desea cambiar el tipo de usuario
      if (typeof nuevaInfo.tipoUsuario !== "undefined") {
        usr.tipoUsuario = nuevaInfo.tipoUsuario
      }

      usr.save()
        .then(
          //se manda a la BD en forma de JSON
          updated => res.status(200).send("usuario modificado")
        )
        .catch(next);
    })
    .catch(next);
}

function eliminarUsuario(req, res, next) {
  Usuario.findByIdAndDelete({ _id: req.params.id })
    .then(
      usr => res.status(200).send("Registro eliminado")
    )
    .catch(next);
}

function listarUsuariosPorTipo(req, res, next) {
  Usuario.find({ 'tipoUsuario': req.params.tipo })
    .then(usrs => res.send(usrs))
    //Si sale mal, mongoose responde
    .catch((next));
}

//funcion para ver si en el atributo mandado esta contenida la frase que tiene la variable pasada por URL "valorContenido"
function obtenerRegistrosCoincidenciaAtributos(req, res, next) {
  var atributo = req.params.atributo;
  let valorContenido = req.params.valorContenido;
  switch (atributo) {
    case "nombre":

      Usuario.find(
        { 'nombre': { '$regex': req.params.valorContenido, '$options': 'i' } }
      )
        .then(arts => {
          res.status(200).send(arts);
        })
        .catch(next);

      break;

    case "apellidos":

      Usuario.find(
        { 'apellidos': { '$regex': req.params.valorContenido, '$options': 'i' } }
      )
        .then(arts => {
          res.status(200).send(arts);
        })
        .catch(next);

      break;

    case "usuario":

      Usuario.find(
        { 'usuario': { '$regex': req.params.valorContenido, '$options': 'i' } }
      )
        .then(arts => {
          res.status(200).send(arts);
        })
        .catch(next);

      break;


    case "tipoUsuario":

      Usuario.find(
        { 'tipoUsuario': { '$regex': req.params.valorContenido, '$options': 'i' } }
      )
        .then(arts => {
          res.status(200).send(arts);
        })
        .catch(next);

      break;

    default:
      res.send("Atributo Desconocido " + atributo);
  }


}


function limitarNumeroRegistros(req, res, next){
  if (isNaN(req.params.limit)) {
    res.send("Proporciona un numero")
  }
  let limite = parseInt(req.params.limit);
  Usuario.find().limit(limite)
  .then(usrs=>{
    res.send(usrs)
  })
  .catch(next);
}

// exportamos las funciones definidas
module.exports = {
  crearUsuario,
  obtenerUsuarios,
  modificarUsuario,
  eliminarUsuario,
  listarUsuariosPorTipo,
  obtenerRegistrosCoincidenciaAtributos,
  limitarNumeroRegistros
}
