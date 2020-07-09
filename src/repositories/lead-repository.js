'use strict';
const mongoose = require('mongoose');
const Lead = mongoose.model('Lead');

exports.create = async(data) => {
    var lead = new Lead(data);
    await lead.save(); // esse nao precisa retornar
}