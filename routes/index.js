//importamos dependencias necesarias
var router = require('express').Router()
//definimos el comportamiento en la raiz del endpoint
router.get('/', (req, res)=>{
    res.send('Bienvenido a la API Enferma');
});

//definimos qué vamos a entregar dependiendo de lo que el usuario pida
router.use('/usuarios', require('./usuarios'));
router.use('/articulos', require('./articulos'));
router.use('/recursos', require('./recursos'));
router.use('/enfermedades', require('./enfermedades'));
router.use('/comentarios', require('./comentarios'));

//exportamos la variable router
module.exports=router;