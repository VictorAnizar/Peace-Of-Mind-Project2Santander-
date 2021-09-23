//estructura del crud

const router = require('express').Router();
const {
    crearArticulo,
    obtenerArticulos,
    obtenerArticuloPorPropiedad,
    modificarArticulo,
    eliminarArticulo
} = require('../controllers/articulos');

router.get('/', obtenerArticulos);
router.get('/:propiedad=:valor', obtenerArticuloPorPropiedad);
router.get('/:id', obtenerArticulos);
router.post('/', crearArticulo);
router.put('/:id', modificarArticulo);
router.delete('/:id', eliminarArticulo);

module.exports = router; 