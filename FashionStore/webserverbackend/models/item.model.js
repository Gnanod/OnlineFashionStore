const mongoose = require('mongoose');
const Schema= mongoose.Schema;

let item = new Schema({
    itemCode :{
        type :String
    },
    itemName :{
        type :String
    },
    brandId :{
        type :String
    },
    categoryName : {
        type :Boolean
    },
    brandId :{
        type :String
    }
});

module.exports = mongoose.model('Item',item);
