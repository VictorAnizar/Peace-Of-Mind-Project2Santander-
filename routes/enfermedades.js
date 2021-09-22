//estructura del crud

const router = require('express').Router();
const {
    crearEnfermedad,
    obtenerEnfermedades,
    obtenerEnfermedadPorPropiedad,
    modificarEnfermedad,
    eliminarEnfermedad
} = require('../controllers/enfermedades');

router.get('/', obtenerEnfermedades);
router.get('/:propiedad=:valor', obtenerEnfermedadPorPropiedad);
router.get('/:id', obtenerEnfermedades);
router.post('/', crearEnfermedad);
router.put('/:id', modificarEnfermedad);
router.delete('/:id', eliminarEnfermedad);

module.exports = router; 