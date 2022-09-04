const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
app.use(cors());

// imports
const getRoute = require('./routes/Routes.js')
const config = require('./config/env.js');

// settings
app.set('port', config.PORT);

// Middleware -- Intercambio de información entre aplicaciones.
app.use(morgan(config.NODE_ENV));               // Para desarrollador.
app.use(express.json());                        // Las peticiones las va a devolver en formato json.
app.use(express.urlencoded({extended:false}));  // Sirve para enviar fotos o videos, en este caso utilizaremos texto por eso es falso.

// Routes
app.use(getRoute);

// Run
app.listen(app.get('port'), ()=>{
    console.log(`Server on Port ${config.PORT}`);
    console.log(`App Listening on http://${config.HOST}:${config.PORT}`);
    
});