const mongoose = require('mongoose');
const Schema= mongoose.Schema;

let stock = new Schema({
    supplier :[{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Supplier",
        required : true
    }],
    itemColorId :[{
        type :mongoose.Schema.Types.ObjectId,
        ref : "itemcolors",
        required : true
    }],
    startDate :{
        type: Date,
        required: true
    },
    endDate :{
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Stock',stock);
