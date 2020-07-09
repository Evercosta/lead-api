'use strict'; // ajuda o slint a checar erros

const express = require('express');
const router = express.Router();

router.get('/webhooks', (req, res, next)=>{
    res.status(200).send(req.query)
});

module.exports = router;