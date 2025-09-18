const mongoose = require("mongoose");

const TestData = new mongoose.Schema({
    sentence_1:{type:String,required:true},
    sentence_2:{type:String,required:true},
    sentence_3:{type:String},
})
module.exports = mongoose.model('TestData',TestData);