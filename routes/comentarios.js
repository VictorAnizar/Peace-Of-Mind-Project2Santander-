//estructura del crud

const router = require('express').Router();
const {
    crearComentario,
    obtenerComentarios,
    modificarComentario,
    eliminarComentario,
    isAnonimoComentario,
    getNumberOfReactions,
    obtenerRegistrosCoincidenciaAtributos,
    limitarNumeroRegistros
} = require('../controllers/comentarios');

router.get('/limite=:limit', limitarNumeroRegistros);
router.get('/:atributo=:valorContenido', obtenerRegistrosCoincidenciaAtributos);
router.get('/', obtenerComentarios);
router.get('/:id', obtenerComentarios);
router.get('/anonimo/:valorBooleano', isAnonimoComentario);
router.get('/cantidadMaxReacciones/:max', getNumberOfReactions);
router.post('/', auth.requerido, crearComentario);
router.put('/:id', auth.requerido, modificarComentario);
router.delete('/:id', auth.requerido, eliminarComentario);

module.exports = router; 