const MessageModel=require('../model/MessageModel');

module.exports=GetCasherMessageRoute=async (req,res)=>{
    const name=req.params.userName;
    let error=[];
    if(!name){
        error.push("all fields are required");
    }
    await MessageModel.find({$or:[{receiver:name},{sender:name}]}).sort({date:-1}).then(Response=>{
        if(Response){
            res.json({message:Response,error:[]})
        }else{
            error.push("there is no message in this name")
            res.json({error:error,message:[]})
        }
    });
}