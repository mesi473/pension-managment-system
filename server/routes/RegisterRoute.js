const UserModel=require('../model/UserModel');

module.exports=RegisterRoute= async (req,res)=>{
    const userName=req.body.userName;
    const typeOfUser=req.body.typeOfUser;
    const firstName=req.body.firstName;
    const lastName=req.body.lastName;
    const conPassword=req.body.conPassword;
    const password=req.body.password;
    let error=[];
    if(password!==conPassword){
        error.push("password and confirm password must be same")
    }
    if(!userName||!password||!conPassword||!typeOfUser||!lastName||!firstName){
        error.push("all fields are required");
    }
    else{
        await UserModel.find({userName:userName}).then(
            response=>{
                if(response.length!==0){
                    error.push("this username is taken by other");
                }else{
                    new UserModel({
                        userName,typeOfUser,firstName,lastName,password 
                     }).save().then(response=>{
                         res.json({success:true,typeOfUser:response.typeOfUser});
                     }).catch(error=>{
                         console.log(error);
                     })
                }
            }
        ).catch(error=>console.log(error));
        
    }
    if(error.length>0){
        res.json(error);
    }
}