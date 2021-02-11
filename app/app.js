'use strict'

const express = require('express');
const morgan = require('morgan');
const port = (process.env.PORT || 3000);

//Inizialitions
const app = express();


//Settings
app.set('port',port)


//Middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(morgan('dev'));


//Routes
app.use(require('./routes/cars.route'))


module.exports = app;