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
  .then(rec=>res.status(200).send("Registro creado"))
  .catch(next);
}

function obtenerRecursos(req, res, next) {
  // Si se recibe una id
  if(req.params.id){
    Recurso.findById(req.params.id)
    .then(rec=>{
      res.status(200).send(rec);
    })
    .catch(next);
  }
  else{ 
    Recurso.find()
    .then(
      recs=>{
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
    Recurso.findByIdAndDelete({_id: req.params.id})
    .then(rec=>res.send("Registro eliminado"))
    .catch(next);
}

//funcion que permite agrupar los registros por tipo
function listarRecursoPorTipo(req, res, next){
  Recurso.find({'tipo': req.params.tipo})
  .then(recs=>{
    res.status(200).send(recs);
  })
  .catch(next);
}

// exportamos las funciones definidas
module.exports = {
  crearRecurso,
  obtenerRecursos,
  modificarRecurso,
  eliminarRecurso,
  listarRecursoPorTipo
}
