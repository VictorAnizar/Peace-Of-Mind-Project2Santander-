//estructura del crud

const router = require('express').Router();
const {
    crearRecurso,
    obtenerRecursos,
    obtenerRecursoPorPropiedad,
    modificarRecurso,
    eliminarRecurso
} = require('../controllers/recursos');

router.get('/', obtenerRecursos);
router.get('/:propiedad=:valor', obtenerRecursoPorPropiedad);
router.post('/', crearRecurso);
router.put('/:id', modificarRecurso);
router.delete('/:id', eliminarRecurso);

module.exports = router; 