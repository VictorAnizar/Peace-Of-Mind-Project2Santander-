const mongoose = require('mongoose');
const Articulo = mongoose.model("Articulo")
function crearArticulo() {
  // Instanciaremos un nuevo Articulo utilizando la clase Articulo
  let articulo = new Articulo(req.params.id);
  articulo.save()
    .then(art => {
      res.status(200).send("Registro creado")
    })
    .catch(next);
}

function obtenerArticulos(req, res, next) {
  // Simulando dos Articulos y respondiendolos
  if (req.params.id) {
    Articulo.findById(req.params.id)
      .then(
        art => {
          res.send(art);
        }
      )
      .catch(next)
  }
  else {
    Articulo.find()
      .then(
        arts => {
          res.status(200).send(arts);
        }
      )
      .catch(next)
  }
}


function modificarArticulo(req, res, next) {
  Articulo.findById(req.params.id)
    .then(art => {
      //Si es Undefined
      if (!art) {
        return res.sendStatus(401);
      }
      //Si sí existe, obtenemos lo que nos manda el usuario
      let nuevaInfo = req.body;
      //Si se desea cambiar el titulo
      if (typeof nuevaInfo.titulo !== "undefined") {
        art.titulo = nuevaInfo.titulo
      }
      //Si se desea cambiar el texto
      if (typeof nuevaInfo.texto !== "undefined") {
        art.texto = nuevaInfo.texto
      }
      //Si se desea cambiar el referencias
      if (typeof nuevaInfo.referencias !== "undefined") {
        art.referencias = nuevaInfo.referencias
      }

      art.save()
        .then(
          //se manda a la BD en forma de JSON
          updated => res.status(200).json(updated.publicData())
        )
        .catch(next);

    })
    .catch(next);
}

function eliminarArticulo(req, res, next) {
  Articulo.findByIdAndDelete({ _id: req.params.id })
    .then(art => {
      res.send("Registro eliminado");
    })
    .catch(next);
}
//funcion para obtener el autor del articulo sin mostrar el ibjeto autor como tal, sino más bien solo su nombre y apellidos
function obtenerArticulosConAutor(req, res, next) {
  Articulo.aggregate([
    {
      '$lookup': {
        'from': 'usuarios',
        'localField': 'idUsuario',
        'foreignField': '_id',
        'as': 'autor_object_inArray'
      }
    },
    {
      '$addFields': {
        'AutorNombre': "$autor_object_inArray.nombre",
        'AutorApellidos': "$autor_object_inArray.apellidos"
      }
    },
    {
      '$project': {
        'autor_object_inArray': 0,
        'idUsuario': 0
      }
    }
  ])
    .then(r => {
      res.status(200).send(r);
    })
    .catch(next);

}
//funcion para obtener los articulos con la enfermedad unicamente (nombre y se expluye el id de la enfermedad)
function obtenerArticulosConEnfermedad(req, res, next) {
  Articulo.aggregate([
    {
      '$lookup': {
        'from': 'enfermedades',
        'localField': 'idEnfermedad',
        'foreignField': '_id',
        'as': 'enfermedad_object_inArray'
      }
    },
    {
      '$addFields': {
        'enfermedadNombre': "$enfermedad_object_inArray.nombre"
      }
    },
    {
      '$project': {
        'enfermedad_object_inArray': 0,
        'idEnfermedad': 0
      }
    }
  ])
    .then(r => {
      res.status(200).send(r);
    })
    .catch(next);
}
//funcion para ver si en el atributo mandado esta contenida la frase que tiene la variable pasada por URL "valorContenido"
function obtenerRegistrosCoincidenciaAtributos(req, res, next) {
  var atributo = req.params.atributo;
  let valorContenido = req.params.valorContenido;
  switch (atributo) {
    case "titulo":

      Articulo.find(
        { 'titulo': { '$regex': req.params.valorContenido, '$options': 'i' } }
      )
        .then(arts => {
          res.status(200).send(arts);
        })
        .catch(next);

      break;

    case "texto":

      Articulo.find(
        { 'texto': { '$regex': req.params.valorContenido, '$options': 'i' } }
      )
        .then(arts => {
          res.status(200).send(arts);
        })
        .catch(next);

      break;
    case "referencias":

      Articulo.find(
        { 'referencias': { '$regex': req.params.valorContenido, '$options': 'i' } }
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
  Articulo.find().limit(limite)
  .then(arts=>{
    res.send(arts)
  })
  .catch(next);
}

// exportamos las funciones definidas
module.exports = {
  crearArticulo,
  obtenerArticulos,
  modificarArticulo,
  eliminarArticulo,
  obtenerArticulosConAutor,
  obtenerArticulosConEnfermedad,
  obtenerRegistrosCoincidenciaAtributos,
  limitarNumeroRegistros
}
