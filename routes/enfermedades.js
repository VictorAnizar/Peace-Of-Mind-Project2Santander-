//estructura del crud

const router = require('express').Router();
const {
    crearEnfermedad,
    obtenerEnfermedades,
    modificarEnfermedad,
    eliminarEnfermedad
} = require('../controllers/enfermedades');

router.get('/', obtenerEnfermedades);
router.post('/', crearEnfermedad);
router.put('/:id', modificarEnfermedad);
router.delete('/:id', eliminarEnfermedad);

module.exports = router; 