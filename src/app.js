'use strict'; // ajuda o slint a checar erros

const express = require('express');
const bodyParser = require('body-parser');
const monggose = require('mongoose');
const config = require('./config');
const xhub = require('express-x-hub');

const app = express();

// Conecta ao banco
monggose.connect(config.connectionString);

// Carrega os Models
const Lead = require('./models/lead');
const Webhook = require('./models/webhook');

// Carrega as Rotas
const leadRoute = require('./routes/lead-route');
const indexRoute = require('./routes/index-route');
const webhookRoute = require('./routes/webhook-route');

// Validação APP_SECRET Facebook
app.use(xhub({ algorithm: 'sha1', secret: process.env.APP_SECRET }));

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

app.use('/', indexRoute);
app.use('/', webhookRoute);
app.use('/lead', leadRoute);

module.exports = app;