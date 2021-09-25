//estructura del crud

const router = require('express').Router();
const {
    crearComentario,
    obtenerComentarios,
    modificarComentario,
    eliminarComentario,
    isAnonimoComentario,
    getNumberOfReactions,
    obtenerRegistrosCoincidenciaAtributos
} = require('../controllers/comentarios');

router.get('/:atributo=:valorContenido', obtenerRegistrosCoincidenciaAtributos);
router.get('/', obtenerComentarios);
router.get('/:id', obtenerComentarios);
router.get('/anonimo/:valorBooleano', isAnonimoComentario);
router.get('/cantidadMaxReacciones/:max', getNumberOfReactions);
router.post('/', crearComentario);
router.put('/:id', modificarComentario);
router.delete('/:id', eliminarComentario);

module.exports = router; 