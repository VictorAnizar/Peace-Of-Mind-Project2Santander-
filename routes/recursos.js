//estructura del crud

const router = require('express').Router();
const {
    crearRecurso,
    obtenerRecursos,
    modificarRecurso,
    eliminarRecurso,
    listarRecursoPorTipo
} = require('../controllers/recursos');

router.get('/', obtenerRecursos);
router.get('/:id', obtenerRecursos);
router.get('/tipo/:tipo', listarRecursoPorTipo);
router.post('/', crearRecurso);
router.put('/:id', modificarRecurso);
router.delete('/:id', eliminarRecurso);

module.exports = router; 