//estructura del crud

const router = require('express').Router();
const {
    crearEnfermedad,
    obtenerEnfermedades,
    obtenerEnfermedadPorPropiedad,
    modificarEnfermedad,
    eliminarEnfermedad,
    obtenerRegistrosCoincidenciaAtributos
} = require('../controllers/enfermedades');

router.get('/:atributo=:valorContenido', obtenerRegistrosCoincidenciaAtributos);
router.get('/', obtenerEnfermedades);
router.get('/:id', obtenerEnfermedades);
router.post('/', crearEnfermedad);
router.put('/:id', modificarEnfermedad);
router.delete('/:id', eliminarEnfermedad);

module.exports = router; 