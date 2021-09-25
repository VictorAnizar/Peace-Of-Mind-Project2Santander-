/*  Archivo controllers/Recursos.js
 *  Simulando la respuesta de objetos Recurso
 *  en un futuro aquí se utilizarán los modelos
 */

// importamos el modelo de Recursos
const mongoose = require('mongoose');
const Recurso = mongoose.model("Recurso");

function crearRecurso(req, res, next) {
  // Instanciaremos un nuevo Recurso
  let recurso = new Recurso(req.body);
  recurso.save()
    .then(rec => res.status(200).send("Registro creado"))
    .catch(next);
}

function obtenerRecursos(req, res, next) {
  // Si se recibe una id
  if (req.params.id) {
    Recurso.findById(req.params.id)
      .then(rec => {
        res.status(200).send(rec);
      })
      .catch(next);
  }
  else {
    Recurso.find()
      .then(
        recs => {
          res.send(recs);
        }
      )
      .catch(next);
  }

}

function modificarRecurso(req, res, next) {
  Recurso.findById(req.params.id)
    .then(rec => {
      //Si es Undefined
      if (!rec) {
        return res.sendStatus(401);
      }
      //Si sí existe, obtenemos lo que nos manda el usuario
      let nuevaInfo = req.body;
      //Si se desea cambiar el tipo
      if (typeof nuevaInfo.tipo !== "undefined") {
        rec.tipo = nuevaInfo.tipo
      }
      //Si se desea cambiar el nombre
      if (typeof nuevaInfo.nombre !== "undefined") {
        rec.nombre = nuevaInfo.nombre
      }
      //Si se desea cambiar el link
      if (typeof nuevaInfo.link !== "undefined") {
        rec.link = nuevaInfo.link
      }

      //se guarda el registro actualizado
      rec.save()
        .then(
          //se manda a la BD en forma de JSON
          updated => res.status(200).send("Registro modificado")
        )
        .catch(next);

    })
    .catch(next);
}

function eliminarRecurso(req, res, next) {
  Recurso.findByIdAndDelete({ _id: req.params.id })
    .then(rec => res.send("Registro eliminado"))
    .catch(next);
}

//funcion que permite agrupar los registros por tipo
function listarRecursoPorTipo(req, res, next) {
  Recurso.find({ 'tipo': req.params.tipo })
    .then(recs => {
      res.status(200).send(recs);
    })
    .catch(next);
}

//funcion para ver si en el atributo mandado esta contenida la frase que tiene la variable pasada por URL "valorContenido"
function obtenerRegistrosCoincidenciaAtributos(req, res, next) {
  var atributo = req.params.atributo;
  let valorContenido = req.params.valorContenido;
  switch (atributo) {
    case "tipo":

      Recurso.find(
        { 'tipo': { '$regex': req.params.valorContenido, '$options': 'i' } }
      )
        .then(arts => {
          res.status(200).send(arts);
        })
        .catch(next);

      break;

    case "nombre":

      Recurso.find(
        { 'nombre': { '$regex': req.params.valorContenido, '$options': 'i' } }
      )
        .then(arts => {
          res.status(200).send(arts);
        })
        .catch(next);

      break;

    case "link":

      Recurso.find(
        { 'link': { '$regex': req.params.valorContenido, '$options': 'i' } }
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
  Recurso.find().limit(limite)
  .then(recs=>{
    res.send(recs)
  })
  .catch(next);
}

// exportamos las funciones definidas
module.exports = {
  crearRecurso,
  obtenerRecursos,
  modificarRecurso,
  eliminarRecurso,
  listarRecursoPorTipo,
  obtenerRegistrosCoincidenciaAtributos,
  limitarNumeroRegistros
}
