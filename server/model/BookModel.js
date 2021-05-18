const mongoose=require('mongoose');

const Book=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    typeOfRoom:{
        type:String,
        required:true
    },
    howMany:{
        type:String,
        required:true
    },
    dateArrive:{
        type:String,
        required:true
    },
    dateLeave:{
        type:String,
        required:true
    }
});

module.exports=BookModel=mongoose.model("book",Book)
