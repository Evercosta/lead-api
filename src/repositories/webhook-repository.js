'use strict';
const mongoose = require('mongoose');
const Webhook = mongoose.model('Webhook');

exports.create = async(data) => {
    console.log('Body antes do squema: ',JSON.stringify(data))
    var webhook = new Webhook(data);
    console.log('Body depois do squema: ',JSON.stringify(webhook))
    await webhook.save(); // esse nao precisa retornar
}