'use strict'; // ajuda o slint a checar erros

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Webhook = mongoose.model('Webhook');

router.get('/webhooks', (req, res, next)=>{
    if (req.query["hub.verify_token"] === process.env.TOKEN) {
        console.log("Verified webhook");
        res.status(200).send(req.query["hub.challenge"]);
    } else {
        console.error("Verification failed. The tokens do not match.");
        res.sendStatus(403);
    }
});

const controller = require('../controllers/webhook-controller');

router.post('/webhooks', controller.post);

// router.post('/webhooks', (req, res, next)=>{
//     const webhook = new Webhook(req.body);
//     webhook.save();
// })


module.exports = router;