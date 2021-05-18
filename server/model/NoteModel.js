const mongoose=require('mongoose');

const Note=mongoose.Schema({
    note:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now()
    }
});

module.exports=NoteModel=mongoose.model("note",Note);