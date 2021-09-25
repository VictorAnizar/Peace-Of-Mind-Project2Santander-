//estructura del crud

const router = require('express').Router();
const {
    crearEnfermedad,
    obtenerEnfermedades,
    modificarEnfermedad,
    eliminarEnfermedad,
    obtenerRegistrosCoincidenciaAtributos,
    limitarNumeroRegistros
} = require('../controllers/enfermedades');

router.get('/limite=:limit', limitarNumeroRegistros);
router.get('/:atributo=:valorContenido', obtenerRegistrosCoincidenciaAtributos);
router.get('/', obtenerEnfermedades);
router.get('/:id', obtenerEnfermedades);
router.post('/', crearEnfermedad);
router.put('/:id', modificarEnfermedad);
router.delete('/:id', eliminarEnfermedad);

module.exports = router; 