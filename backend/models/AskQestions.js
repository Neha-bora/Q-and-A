const mongoose = require("mongoose");

const QestionsSchema = new mongoose.Schema({
    
    title:{
        type:String,
        trim:true,
        required:true,      
    },    
    askQestion:{
        type:String,
        trim:true,
        required:true,      
    },
    
    photo:{
        data:Buffer,
        contentType:String
    }
},{timestamps:true}
);

module.exports = mongoose.model("Qestions" , QestionsSchema );