const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://harshadabhapkar28_db_user:quiz123@cluster0.jzj0rbr.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0");
        console.log("Database Connected Successfully");
    }
    catch(error){
        console.log("Database not connected",error);
    }
  
}

module.exports = connectDB;