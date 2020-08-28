// importar express
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes');

const configs = require('./config');

require('dotenv').config({path: 'variables.env'});


// configurar express
const app = express();

// Habilitar pug
app.set('view engine', 'pug');

// Añadir las vistas
app.set('views', path.join(__dirname, './views'));

// cargar una carpeta statica llamada public
app.use(express.static('public'));

//validar si estamos en desarrollo o en producción
const config = configs[app.get('env')];

// Creamos la variable para el sitio web
app.locals.titulo = config.nombresitio;

// Muestra el año actual
app.use((req,res,next) => {
    // crear una una nueva fecha
    const fecha = new Date();
    res.locals.fechaActual = fecha.getFullYear();
    res.locals.ruta = req.path;
    return next();
});

// Antes de cargar las suras ejecutamos el body-parser
app.use(bodyParser.urlencoded({extended:true}));
// Pargar las routas
app.use('/', routes());

//puerto y host para la app
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

app.listen(port, host, ()=>{
    console.log("running ...");
});
