const NoteModel=require('../model/NoteModel');

module.exports=NoteRoute= async (req,res)=>{
    const note=req.body.note;
    let error=[]
    if(!note){
        error.push("note must be provided")
    }
    else{
        new NoteModel({
            note
        }).save().then(Response=>{
            res.json({success:true,error:[]});
        }).catch(error=>console.log(error))
    }
    if(error.length>0){
        res.json({success:false,error:error})
    }
}