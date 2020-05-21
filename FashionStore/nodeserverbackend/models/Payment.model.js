const mongoose = require('mongoose');
const Schema= mongoose.Schema;

let payment = new Schema({
    orderId:{
        type: Number,
        required: true
    },
    itemTotal:{
        type: Number,
        required: true
    },


});

module.exports = mongoose.model('Payment',payment);

