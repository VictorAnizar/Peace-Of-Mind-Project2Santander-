// importamos el modelo de usuarios
// controllers/usuarios.js
const mongoose = require("mongoose")
const Usuario = mongoose.model("Usuario")

function crearUsuario(req, res, next) {
  let usuario = new Usuario(req.body);
  usuario.save()
  .then(
    usr =>{
      res.status(200).send(usr);
    }
  )
  .catch(next);
  
}

function obtenerUsuarios(req,res, next) {

  if (req.params.id) { 
    Usuario.findById(req.params.id)
      //Si sale bien, se manda el registro
      .then(
        usr => {res.send(usr)}
      )
      //Si sale mal se deja que mongoose responda
      .catch(next);
  }
  else{
    Usuario.find()
      //Si sale bien, se regresan los datos
      .then(usrs => res.send(usrs))
      //Si sale mal, mongoose responde
      .catch((next));
  }
  
}

//Este metodo Buscar Un usuario por una propiedad en especifico. Devuelve la primer instancia de la búsqueda
function obtenerUsuarioPorPropiedad(req, res){
  // se guardan en variables los valores mandados por url
  let valor = req.params.valor;
  let propiedad = req.params.propiedad;
  for (const key of Object.entries(usuarios)) {
      //si por lo menos sabemos que el valor mandado para la propiedad existe
      if (key[1][propiedad] ) {
          if (key[1][propiedad] == valor) {
          //se hace un filtro y se devuelve el json de la constelacion el cual contenga como propiedad
          //el valor mandado
          res.send(...key.filter(e => e[propiedad] == valor));
          }
      }
      else{
          res.status(404).send("Propiedad no definida");
      }
  }
  res.status(404).send(" Usuario no encontrado. Introduce un valor existente para la propiedad "+propiedad);

}

function modificarUsuario(req, res, next) {
  Usuario.findById(req.params.id)
  .then(usr=>{
    if (!usr) {
      return  res.status(401).send("Registro no encontrado para modificar")
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
  Usuario.findByIdAndDelete({_id:req.params.id})
  .then(
    usr => res.status(200).send("Registro eliminado")
  )
  .catch(next);
}

// exportamos las funciones definidas
module.exports = {
  crearUsuario,
  obtenerUsuarios,
  obtenerUsuarioPorPropiedad,
  modificarUsuario,
  eliminarUsuario
}
