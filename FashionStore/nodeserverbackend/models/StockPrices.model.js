const mongoose = require('mongoose');
const Schema= mongoose.Schema;

let stockPrice = new Schema({
    buyingPrice :{
        type :Number,
        required: true
    },
    sellingPrice :{
        type :Number,
        required: true
    },
    quantity :{
        type: Number,
        required: true
    },
    discount :{
        type: Number,
        required: true
    },
    totalPrice :{
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('StockPrice',stockPrice);
