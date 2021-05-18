const mongoose=require("mongoose");

 const Customer=mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    id:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    roomNumber:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true,
    },
    provinance:{
        type:String,
        required:true
    },
    street:{
        type:String,
        required:true
    },
    zone:{
        type:String,
        required:true
    },
    wereda:{
        type:String,
        required:true
    },
    idImage:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    houseNumber:{
        type:String,
        required:true
    }
});
module.exports=CustomerModel=mongoose.model("customer",Customer);