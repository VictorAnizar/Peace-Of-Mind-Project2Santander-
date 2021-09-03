/*  Archivo controllers/Recursos.js
 *  Simulando la respuesta de objetos Recurso
 *  en un futuro aquí se utilizarán los modelos
 */

// importamos el modelo de Recursos
const Recurso = require('../models/Recurso')

function crearRecurso() {
  // Instanciaremos un nuevo Recurso utilizando la clase Recurso
  
}

function obtenerRecursos() {
  // Simulando dos Recursos y respondiendolos
}
function obtenerRecursosPorPropiedad(req, res){
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

function modificarRecurso() {
 
}

function eliminarRecurso() {
  
}

// exportamos las funciones definidas
module.exports = {
  crearRecurso,
  obtenerRecursos,
  obtenerRecursosPorPropiedad,
  modificarRecurso,
  eliminarRecurso
}
