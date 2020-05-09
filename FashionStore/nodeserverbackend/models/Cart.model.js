const mongoose = require('mongoose');
const Schema= mongoose.Schema;

let cart = new Schema({
    cartName :{
        type :String,
        required: true
    },
    cartPrice :{
        type :Number,
        required: true
    },
    quantity:{
        type: Number,
        required: true
    },
    userId :{
        type :String,
        required: true
    }

});

module.exports = mongoose.model('Cart',cart);

