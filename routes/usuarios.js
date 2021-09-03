//estructura del crud

const router = require('express').Router();
const {
    crearUsuario,
    obtenerUsuarios,
    obtenerUsuarioPorPropiedad,
    modificarUsuario,
    eliminarUsuario
} = require('../controllers/usuarios');

router.get('/', obtenerUsuarios);
router.get('/:propiedad=:valor', obtenerUsuarioPorPropiedad);
router.post('/', crearUsuario);
router.put('/:id', modificarUsuario);
router.delete('/:id', eliminarUsuario);

module.exports = router;