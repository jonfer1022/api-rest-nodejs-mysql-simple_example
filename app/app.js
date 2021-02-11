'use strict'

const express = require('express');
const port = (process.env.PORT || 3000);

//Inizialitions
const app = express();


//Settings
app.set('port',port)


//Middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json())

//Routes
app.use(require('./routes/cars.route'))


module.exports = app;