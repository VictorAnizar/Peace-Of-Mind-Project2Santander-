//estructura del crud

const router = require('express').Router();
const {
    crearComentario,
    obtenerComentarios,
    obtenerComentariosPorPropiedad,
    modificarComentario,
    eliminarComentario
} = require('../controllers/comentarios');

router.get('/', obtenerComentarios);
router.get('/:propiedad=:valor', obtenerComentariosPorPropiedad);
router.post('/', crearComentario);
router.put('/:id', modificarComentario);
router.delete('/:id', eliminarComentario);

module.exports = router; 