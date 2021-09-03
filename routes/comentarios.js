//estructura del crud

const router = require('express').Router();
const {
    crearComentario,
    obtenerComentarios,
    modificarComentario,
    eliminarComentario
} = require('../controllers/comentarios');

router.get('/', obtenerComentarios);
router.post('/', crearComentario);
router.put('/:id', modificarComentario);
router.delete('/:id', eliminarComentario);

module.exports = router; 