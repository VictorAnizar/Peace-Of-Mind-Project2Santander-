//estructura del crud

const router = require('express').Router();
const {
    crearArticulo,
    obtenerArticulos,
    obtenerArticulosPorPropiedad,
    modificarArticulo,
    eliminarArticulo
} = require('../controllers/articulos');

router.get('/', obtenerArticulos);
router.get('/:propiedad=:valor', obtenerArticulosPorPropiedad);
router.post('/', crearArticulo);
router.put('/:id', modificarArticulo);
router.delete('/:id', eliminarArticulo);

module.exports = router; 