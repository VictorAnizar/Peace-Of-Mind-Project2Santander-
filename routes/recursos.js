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

router.get('/limite=:limit', limitarNumeroRegistros);
router.get('/:atributo=:valorContenido', obtenerRegistrosCoincidenciaAtributos);
router.get('/', obtenerRecursos);
router.get('/:id', obtenerRecursos);
router.get('/tipo/:tipo', listarRecursoPorTipo);
router.post('/', crearRecurso);
router.put('/:id', modificarRecurso);
router.delete('/:id', eliminarRecurso);

module.exports = router; 