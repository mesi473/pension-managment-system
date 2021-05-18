const mongoose=require('mongoose');

const Message=mongoose.Schema({
    receiver:{
        type:String,
        required:true
    },
    sender:{
        type:String,
        required:true
    },
    cases:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now()
    }
});

module.exports=MessageModel=mongoose.model("message",Message);