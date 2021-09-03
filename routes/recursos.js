//estructura del crud

const router = require('express').Router();
const {
    crearRecurso,
    obtenerRecursos,
    modificarRecurso,
    eliminarRecurso
} = require('../controllers/recursos');

router.get('/', obtenerRecursos);
router.post('/', crearRecurso);
router.put('/:id', modificarRecurso);
router.delete('/:id', eliminarRecurso);

module.exports = router; 