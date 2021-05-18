const BookModel=require('../model/BookModel');

module.exports= BookRoom=(req,res)=>{
    const name=req.body.name;
    const phoneNumber=req.body.phoneNumber;
    const dateArrive=req.body.dateArrive;
    const dateLeave=req.body.dateLeave;
    const howMany=req.body.howMany;
    const typeOfRoom=req.body.typeOfRoom;
    let error=[];
    if(!name||!phoneNumber||!dateArrive||!dateLeave||!howMany||!typeOfRoom){
        error.push("all fields are required");
    }else
        new BookModel({
            name,phoneNumber,dateArrive,dateLeave,howMany,typeOfRoom
        }).save().then(response=>{
            res.json({success:true,error:[]})
        }).catch(error=>console.log(error))
    if(error.length>0){
        res.json({success:false,error:error});
    }
}
