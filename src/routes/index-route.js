'use strict'; // ajuda o slint a checar erros

const express = require('express');
const router = express.Router();

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

router.get('/', (req, res, next)=>{
    res.status(200).send({
        title: "Node Lead API",
        version: "1.0.1",
        teste: process.env.TEST || 'sem teste'
    })
});

module.exports = router;