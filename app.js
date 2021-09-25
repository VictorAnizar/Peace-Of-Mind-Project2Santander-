//importamos la biblioteca de express para poder generar la API
const express = require('express');
//esta var es la que va a abstraer el comportamiento COMPLETO de nuestra API
const app = express();
//importamos la biblioteca para parsear los bodys de los json que se mandan 
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
//se parsean los bodys a json
app.use(bodyParser.json());
//Configuración de la Base de datos
//primero decimos que usaremos mongoose
const mongoose = require('mongoose');
// //Aqui va a estar la parte de autentificacion a la BD
mongoose.connect(process.env.MONGO_URI);
// //para que se generen alertas y errores de una forma verbosa

mongoose.set("debug", true);
// //usamos los modelos
require('./models/Usuario');
require('./models/Recurso');
require('./models/Enfermedad');
require('./models/Comentario');
require('./models/Articulo');

require('./config/passport')
//configuracion de las rutas
app.use('/v1', require('./routes'));
//decimos cómo/dónde se va a ejecutar la app

//activa la aplicacion y decimos qué debe de hacer
app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}!`);
});

