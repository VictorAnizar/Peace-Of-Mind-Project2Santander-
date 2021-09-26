// importamos el modelo de usuarios
// controllers/usuarios.js
const mongoose = require("mongoose")
const Usuario = mongoose.model("Usuario")
const passport = require('passport');


function crearUsuario(req, res, next) {
  const body = req.body,
    password = body.password

  delete body.password
  const user = new Usuario(body)

  user.crearPassword(password);
  user.save()
    .then(user => {
      return res.status(200).json(user.toAuthJSON())
    })
    .catch(next)

}

function obtenerUsuarios(req, res, next) {

  if (req.params.id) {
    Usuario.findById(req.params.id)
      //Si sale bien, se manda el registro
      .then(
        usr => {
          userfinal = new Usuario(usr)
          res.send(userfinal.onlyPublicData(usr))
        }
      )
      //Si sale mal se deja que mongoose responda
      .catch(next);
  }
  else {
    Usuario.find()
      //Si sale bien, se regresan los datos
      .then(
        usr => {
          userfinal = new Usuario(usr)
          res.send(userfinal.onlyPublicDataall(usr))
        })
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
      //si se desea cambiar la contrasenia
      if (typeof nuevaInfo.password !== 'undefined') {
        usr.crearPassword(nuevaInfo.password)
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
    .then(
      usr => {
        userfinal = new Usuario(usr)
        res.send(userfinal.onlyPublicDataall(usr))
      })    //Si sale mal, mongoose responde
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
        .then(
          usr => {
            userfinal = new Usuario(usr)
            res.send(userfinal.onlyPublicDataall(usr))
          })
        .catch(next);

      break;

    case "apellidos":

      Usuario.find(
        { 'apellidos': { '$regex': req.params.valorContenido, '$options': 'i' } }
      )
        .then(
          usr => {
            userfinal = new Usuario(usr)
            res.send(userfinal.onlyPublicDataall(usr))
          })
        .catch(next);

      break;

    case "usuario":

      Usuario.find(
        { 'usuario': { '$regex': req.params.valorContenido, '$options': 'i' } }
      )
        .then(
          usr => {
            userfinal = new Usuario(usr)
            res.send(userfinal.onlyPublicDataall(usr))
          })
        .catch(next);

      break;


    case "tipoUsuario":

      Usuario.find(
        { 'tipoUsuario': { '$regex': req.params.valorContenido, '$options': 'i' } }
      )
        .then(
          usr => {
            userfinal = new Usuario(usr)
            res.send(userfinal.onlyPublicDataall(usr))
          })
        .catch(next);

      break;

    default:
      res.send("Atributo Desconocido " + atributo);
  }


}


function limitarNumeroRegistros(req, res, next) {
  if (isNaN(req.params.limit)) {
    res.send("Proporciona un numero")
  }
  let limite = parseInt(req.params.limit);
  Usuario.find().limit(limite)
    .then(
      usr => {
        userfinal = new Usuario(usr)
        res.send(userfinal.onlyPublicDataall(usr))
      })
    .catch(next);
}
//funcion para iniciar sesion 
function iniciarSesion(req, res, next) {
  if (!req.body.usuario || !req.body.password) {
    return res.status(422).json({ error: { usuario: "Falta informacion" } })
  }

  passport.authenticate('local',
    { session: false },
    function (err, user, info) {
      if (err) { return next(err) }
      if (user) {
        if (user.validarPassword(req.body.password)) {
          user.token = user.generaJWT();
          return res.status(200).json(user.token);
        } else {
          return res.status(422).json({ error: { password: "Password" } });
        }
      } else {
        return res.status(422).json(info);
      }
    })(req, res, next)
}

// exportamos las funciones definidas
module.exports = {
  crearUsuario,
  iniciarSesion,
  obtenerUsuarios,
  modificarUsuario,
  eliminarUsuario,
  listarUsuariosPorTipo,
  obtenerRegistrosCoincidenciaAtributos,
  limitarNumeroRegistros
}
