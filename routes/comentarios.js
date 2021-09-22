//estructura del crud

const router = require('express').Router();
const {
    crearComentario,
    obtenerComentarios,
    obtenerComentarioPorPropiedad,
    modificarComentario,
    eliminarComentario
} = require('../controllers/comentarios');

router.get('/', obtenerComentarios);
router.get('/:propiedad=:valor', obtenerComentarioPorPropiedad);
router.get('/:id', obtenerComentarios);
router.post('/', crearComentario);
router.put('/:id', modificarComentario);
router.delete('/:id', eliminarComentario);

module.exports = router; 