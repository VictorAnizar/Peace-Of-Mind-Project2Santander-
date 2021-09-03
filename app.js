//importamos la biblioteca de express para poder generar la API
const express = require('express');
//esta var es la que va a abstraer el comportamiento COMPLETO de nuestra API
const app = express();
//importamos la biblioteca para parsear los bodys de los json que se mandan 
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
//se parsean los bodys a json
app.use(bodyParser.json());

app.use('/v1', require('./routes'));


//decimos cómo/dónde se va a ejecutar la app
//definimos el puerto 
const PORT = 3464;
//activa la aplicacion y decimos qué debe de hacer
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}!`);
});
