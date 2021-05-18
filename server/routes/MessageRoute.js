const MessageModel=require('../model/MessageModel');

module.exports=MessageRoute=async (req,res)=>{
    const receiver=req.body.receiver;
    const sender=req.body.sender;
    const message=req.body.message;
    const cases =req.body.cases;
    let error=[]
    
    if(!receiver||!sender||!message||!cases){
        error.push("all fields are required");
    }
    else{
        new MessageModel({
            receiver,sender,message,cases
        }).save().then(Response=>{
            res.json({success:true,error:[]})
        }).catch(error=>console.log(error))
    }
    if(error.length>0){
        res.json({success:false,error:error})
    }
}