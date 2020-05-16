const mongoose = require('mongoose');
const Schema= mongoose.Schema;

let feedback = new Schema({
    feedback :{
        type :String,
        required: true
    }
});

module.exports = mongoose.model('Feedback',feedback);

