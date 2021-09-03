/*  Archivo controllers/Enfermedads.js
 *  Simulando la respuesta de objetos Enfermedad
 *  en un futuro aquí se utilizarán los modelos
 */

// importamos el modelo de Enfermedads
const Enfermedad = require('../models/Enfermedad')

function crearEnfermedad() {
  // Instanciaremos un nuevo Enfermedad utilizando la clase Enfermedad
  
}

function obtenerEnfermedades() {
  // Simulando dos Enfermedads y respondiendolos
  
}
function obtenerEnfermedadesPorPropiedad(req, res){
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

function modificarEnfermedad() {
 
}

function eliminarEnfermedad() {
  
}

// exportamos las funciones definidas
module.exports = {
  crearEnfermedad,
  obtenerEnfermedades,
  obtenerEnfermedadesPorPropiedad,
  modificarEnfermedad,
  eliminarEnfermedad
}
