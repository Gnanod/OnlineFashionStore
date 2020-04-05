const mongoose = require('mongoose');
const Schema= mongoose.Schema;

let item = new Schema({
    testCode :{
        type :String
    },
    testName :{
        type :String
    }
});

module.exports = mongoose.model('item',item);
