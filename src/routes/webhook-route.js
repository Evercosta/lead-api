'use strict'; // ajuda o slint a checar erros

const express = require('express');
const router = express.Router();

router.get('/webhooks', (req, res, next)=>{
    if (req.query["hub.verify_token"] === process.env.TOKEN) {
        console.log("Verified webhook");
        res.status(200).send(req.query["hub.challenge"]);
    } else {
        console.error("Verification failed. The tokens do not match.");
        res.sendStatus(403);
    }
});

module.exports = router;