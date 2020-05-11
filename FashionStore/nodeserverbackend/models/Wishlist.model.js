const mongoose = require('mongoose');
const Schema= mongoose.Schema;

let wishlist = new Schema({
    cartName :{
        type :String,
        required: true
    },
    cartPrice :{
        type :Number,
        required: true
    },
    /*quantity:{
        type: Number,
        required: true
    },*/
    userId :{
        type :String,
        required: true
    },
    itemId:{
        type: String,
        required: true
    }

});

module.exports = mongoose.model('Wishlist',wishlist);

