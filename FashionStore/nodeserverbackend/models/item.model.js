const mongoose = require('mongoose');
const Schema= mongoose.Schema;

let item = new Schema({
    itemCode :{
        type :String
    },
    itemName :{
        type :String
    },
    brandCode :{
        type :String
    },
    categoryCode :{
        type :String
    },
    description :{
        type :String
    }
});

module.exports = mongoose.model('Item',item);
