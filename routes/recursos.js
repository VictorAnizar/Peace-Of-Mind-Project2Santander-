//estructura del crud

const router = require('express').Router();
const {
    crearRecurso,
    obtenerRecursos,
    modificarRecurso,
    eliminarRecurso,
    listarRecursoPorTipo,
    obtenerRegistrosCoincidenciaAtributos,
    limitarNumeroRegistros
} = require('../controllers/recursos');

const auth = require('./auth')


router.get('/limite=:limit', limitarNumeroRegistros);
router.get('/:atributo=:valorContenido', obtenerRegistrosCoincidenciaAtributos);
router.get('/', obtenerRecursos);
router.get('/:id', obtenerRecursos);
router.get('/tipo/:tipo', listarRecursoPorTipo);
router.post('/', auth.requerido, crearRecurso);
router.put('/:id', auth.requerido, modificarRecurso);
router.delete('/:id', auth.requerido, eliminarRecurso);

module.exports = router; 