const mongoose = require('mongoose');
const Schema= mongoose.Schema;

let cart = new Schema({
    userId :{
        type :String,
        required: true
    },
    cartPhotoImage :{
        type :Buffer,
        contentType: String

    },
    cartItemName :{
        type: String,
        required: true
    },
    cartItemPrice :{
        type:  Number,
        required: true
    },
    cartQuantity :{
        type :Number,
        required: true
    },
    itemTotal :{
        type: Number,
        required: true
    }

});

module.exports = mongoose.model('Cart',cart);

