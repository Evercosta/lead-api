'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    // _id é criado automaticamente
    fullName: {
        type: String,
        required: [true, 'O Nome é obrigatório']
    },
    email: {
        type: String,
        required: [true, 'O email é obrigatório'],
        trim: true
    }
});

module.exports = mongoose.model('Lead', schema);