const express = require("express");
const app = express();
const path = require('path');
//nos ayuda a analizar el cuerpo de la solicitud POST
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// cargar el css del index.html as static
app.use(express.static(__dirname));

//cargamos el archivo de rutas
app.use(require('./routes/endpoints'));

app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname,'./public/html/index.html'));
  })

app.listen(process.env.PORT||3000,() => {
    console.log("Servidor corriendo en el puerto: "+process.env.PORT);
});

module.exports = app;