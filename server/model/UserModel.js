const mongoose=require("mongoose");

const User=mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    typeOfUser:{
        type:String,
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    }
});

module.exports=UserModel=mongoose.model("user",User);