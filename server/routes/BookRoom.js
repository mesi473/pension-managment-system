const RoomModel=require('../model/RoomModel');

module.exports=RoomRoute=async (req,res)=>{
    const typeOfRoom=req.body.typeOfRoom;
    const howManyRoom=req.body.howManyRoom;
    const costOfRoom=req.body.costOfRoom;
    // const images=req.files.orginalname
    let error=[]

    if(!typeOfRoom||!howManyRoom||!costOfRoom){
        error.push("all fields are required")
    }else{
        await new RoomModel({
            typeOfRoom,howManyRoom,costOfRoom
        }).save().then(response=>{
            res.json({success:true,error:[]})
        }).catch(error=>console.log(error));  
    }
    if(error.length>0){
        res.json({success:false,error:error});
    }
}