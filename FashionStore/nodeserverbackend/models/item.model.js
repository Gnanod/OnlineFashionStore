const mongoose = require('mongoose');
const Schema= mongoose.Schema;

let item = new Schema({
    itemCode :{
        type :String
    },
    itemName :{
        type :String
    },
    brandCategory :[{
        type : mongoose.Schema.Types.ObjectId,
        ref : "BrandCategory",
        required : true
    }],
    description :{
        type :String
    },


});

module.exports = mongoose.model('Item',item);
