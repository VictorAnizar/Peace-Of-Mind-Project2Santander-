//estructura del crud

const router = require('express').Router();
const {
    crearUsuario,
    obtenerUsuarios,
    iniciarSesion,
    modificarUsuario,
    eliminarUsuario,
    listarUsuariosPorTipo,
    obtenerRegistrosCoincidenciaAtributos,
    limitarNumeroRegistros
} = require('../controllers/usuarios');

router.get('/limite=:limit', limitarNumeroRegistros);
const auth = require('./auth')

router.get('/:atributo=:valorContenido', obtenerRegistrosCoincidenciaAtributos);
router.get('/', auth.requerido, obtenerUsuarios);
router.get('/:id', auth.requerido, obtenerUsuarios);
router.get('/tipo/:tipo', listarUsuariosPorTipo);
router.post('/', crearUsuario);
router.put('/:id', auth.requerido, modificarUsuario);
router.delete('/:id', auth.requerido, eliminarUsuario);
router.post('/entrar', iniciarSesion);  

module.exports = router;