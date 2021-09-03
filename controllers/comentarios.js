/*  Archivo controllers/Comentarios.js
 *  Simulando la respuesta de objetos Comentario
 *  en un futuro aquí se utilizarán los modelos
 */

// importamos el modelo de Comentarios
const Comentario = require('../models/Comentario')

function crearComentario() {
  // Instanciaremos un nuevo Comentario utilizando la clase Comentario
  
}

function obtenerComentarios() {
  // Simulando dos Comentarios y respondiendolos
  
}

function obtenerComentariosPorPropiedad(req, res){
  //se guardan en variables los valores mandados por url
  // let valor = req.params.valor;
  // let propiedad = req.params.propiedad;
  // for (const key of Object.entries(usuarios)) {
  //     //si por lo menos sabemos que el valor mandado para la propiedad existe
  //     if (key[1][propiedad] ) {
  //         if (key[1][propiedad] == valor) {
  //         //se hace un filtro y se devuelve el json de la constelacion el cual contenga como propiedad
  //         //el valor mandado
  //         res.send(...key.filter(e => e[propiedad] == valor));
  //         }
  //     }
  //     else{
  //         res.status(404).send("Propiedad no definida");
  //     }
  // }
  // res.status(404).send(" Usuario no encontrado. Introduce un valor existente para la propiedad "+propiedad);

}

function modificarComentario() {
 
}

function eliminarComentario() {
  
}

// exportamos las funciones definidas
module.exports = {
  crearComentario,
  obtenerComentarios,
  obtenerComentariosPorPropiedad,
  modificarComentario,
  eliminarComentario
}
