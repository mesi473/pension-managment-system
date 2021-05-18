const CustomerModel=require('../model/CustemerModel');

module.exports=CustomerRoute=async (req,res)=>{
    const phoneNumber=req.body.phoneNumber;
    const id=req.body.id;
    const firstName=req.body.firstName;
    const lastName=req.body.lastName;
    const roomNumber=req.body.roomNumber;
    const country=req.body.country;
    const provinance=req.body.provinance;
    const street=req.body.street;
    const zone=req.body.zone;
    const wereda=req.body.wereda;
    
    const date=req.body.date;
    const houseNumber=req.body.houseNumber;
    let idImage='';
    const error=[];
    if(req.file==null){
        error.push("image must be provided");
    }
    else{
        idImage=req.file.originalname;
    }
    if(!phoneNumber||!id||!firstName||!lastName||!roomNumber
        ||!country||!provinance||!street||!zone||!wereda||!idImage||
        !date||!houseNumber){
            error.push("all fields are required");
    }
    else{
        new CustomerModel({
            phoneNumber,id,firstName,lastName,roomNumber,country,
            provinance,street,zone,wereda,idImage,date,houseNumber
        }).save().then(response=>{
            res.json({success:true,error:[]})
        }).catch(error=>console.log(error))
    }
    if(error.length>0){
        res.json({error:error,success:false});
    }
}