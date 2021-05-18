const mongoose=require('mongoose');

const Room=mongoose.Schema({
    typeOfRoom:{
        type:String,
        required:true,
    },
    howManyRoom:{
        type:String,
        required:true,
    },
    costOfRoom:{
        type:String,
        required:true,
    }
})

module.exports=RoomModel=mongoose.model("room",Room);