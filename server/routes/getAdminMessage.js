const MessageModel=require('../model/MessageModel');

module.exports=GetCasherMessageRoute=async (req,res)=>{

    await MessageModel.find({}).sort({date:-1}).then(Response=>{
        if(Response){
            res.json({message:Response,error:[]})
        }else{
            error.push("there is no message in this name")
            res.json({error:error,message:[]})
        }
    });
}