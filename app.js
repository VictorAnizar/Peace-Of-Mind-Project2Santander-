const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
//se parsean los bodys a json
app.use(bodyParser.json());
const PORT = 3464;
//activa la aplicacion y decimos qué debe de hacer
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}!`);
});
