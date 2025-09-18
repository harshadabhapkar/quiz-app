const mongoose = require("mongoose");

const RegisterData = new mongoose.Schema({
    username:{type:String,required:true},
    password:{type:String,required:true},
    confirm_password:{type:String,required:true},
})
module.exports = mongoose.model('RegisterData',RegisterData);