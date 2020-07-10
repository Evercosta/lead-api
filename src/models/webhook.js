'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    // _id é criado automaticamente
    // {
    //     "field": "leadgen",
    //     "value": {
    //       "ad_id": "444444444",
    //       "form_id": "444444444444",
    //       "leadgen_id": "444444444444",
    //       "created_time": 1594404825,
    //       "page_id": "444444444444",
    //       "adgroup_id": "44444444444"
    //     }
    //   }
    time: {
        type: Number
    },
    changes: {
        type: Array
    }
});

module.exports = mongoose.model('Webhook', schema);