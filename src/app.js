'use strict'; // ajuda o slint a checar erros

const express = require('express');
const bodyParser = require('body-parser');
const monggose = require('mongoose');
const config = require('./config');

const app = express();
const router = express.Router();

// Conecta ao banco
monggose.connect(config.connectionString);

// Carrega os Models
const Lead = require('./models/lead');

// Carrega as Rotas
const leadRoute = require('./routes/lead-route');
const indexRoute = require('./routes/index-route');

// converter o body com o bodyParser
app.use(bodyParser.json({
    limit: '10mb'
}));
// codifica a url
app.use(bodyParser.urlencoded({ extended: false }));

// Habilita o CORS
app.use(function(req, res, next){
    res.header('Access-control-Allow-Origin', '*');
    res.header(
        'Access-control-Allow-Headers', 
        'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header(
        'Access-control-Allow-Methods', 
        'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

// app.post('/lead', (req, res, next) => {
//     console.log('body ' + req.body)
//     // res.status(201).send(req.body);
//     if (req.body) {
//         req.body.save()
//     }
// })

app.use('/', indexRoute);
app.use('/lead', leadRoute);

module.exports = app;