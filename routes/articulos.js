//estructura del crud

const router = require('express').Router();
const {
    crearArticulo,
    obtenerArticulos,
    modificarArticulo,
    eliminarArticulo,
    obtenerArticulosConAutor,
    obtenerArticulosConEnfermedad,
    obtenerRegistrosCoincidenciaAtributos
} = require('../controllers/articulos');

router.get('/:atributo=:valorContenido', obtenerRegistrosCoincidenciaAtributos);
router.get('/getAutor/', obtenerArticulosConAutor);
router.get('/getEnfermedadRelacionada/', obtenerArticulosConEnfermedad);
router.get('/', obtenerArticulos);
router.get('/:id', obtenerArticulos);
router.post('/', crearArticulo);
router.put('/:id', modificarArticulo);
router.delete('/:id', eliminarArticulo);

module.exports = router; 