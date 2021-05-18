const mongoose=require('mongoose');

const Vacancy=mongoose.Schema({
    jobtitle:{
        type:String,
        required:true
    },
    NumEmp:{
        type:Number,
        required:true
    },
    jobType:{
        type:String,
        required:true
    },
    expriance:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now()
    }
});

module.exports=NoteModel=mongoose.model("vacancy",Vacancy);