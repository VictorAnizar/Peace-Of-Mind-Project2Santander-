const mongoose = require('mongoose');
const Articulo = mongoose.model("Articulo")
function crearArticulo() {
  // Instanciaremos un nuevo Articulo utilizando la clase Articulo
  
}

function obtenerArticulos(req, res, next) {
  // Simulando dos Articulos y respondiendolos
  if(req.params.id){
    Articulo.findById(req.params.id)
    .then(
      art=>{
        res.send(art);
      }
    )
    .catch(next)
  }
  else{
    Articulo.find()
    .then(
      arts=>{
        res.status(200).send(arts);
      }
    )
    .catch(next)
  }
}
function obtenerArticuloPorPropiedad(req, res){
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

function modificarArticulo() {
 
}

function eliminarArticulo() {
  
}

// exportamos las funciones definidas
module.exports = {
  crearArticulo,
  obtenerArticulos,
  obtenerArticuloPorPropiedad,
  modificarArticulo,
  eliminarArticulo
}
