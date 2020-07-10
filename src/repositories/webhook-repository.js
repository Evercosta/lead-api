'use strict';
const mongoose = require('mongoose');
const Webhook = mongoose.model('Webhook');

exports.create = async(data) => {
    var webhook = new Webhook(data);
    await webhook.save(); // esse nao precisa retornar
}