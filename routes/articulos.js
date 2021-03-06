//estructura del crud

const router = require('express').Router();
const {
    crearArticulo,
    obtenerArticulos,
    modificarArticulo,
    eliminarArticulo,
    obtenerArticulosConAutor,
    obtenerArticulosConEnfermedad,
    obtenerRegistrosCoincidenciaAtributos,
    limitarNumeroRegistros,
    listarSolo
} = require('../controllers/articulos');

const auth = require('./auth')


router.get('/listarSolo/:soloMuestra', listarSolo);
router.get('/limite=:limit', limitarNumeroRegistros);
router.get('/:atributo=:valorContenido', obtenerRegistrosCoincidenciaAtributos);
router.get('/getAutor/', obtenerArticulosConAutor);
router.get('/getEnfermedadRelacionada/', obtenerArticulosConEnfermedad);
router.get('/', obtenerArticulos);
router.get('/:id', obtenerArticulos);
router.post('/', auth.requerido, crearArticulo);
router.put('/:id', auth.requerido, modificarArticulo);
router.delete('/:id', auth.requerido, eliminarArticulo);

module.exports = router; 