const UserModel=require('../model/UserModel');

module.exports=LoginRoute= async (req,res)=>{
    const userName=req.params.userName;
    const password=req.params.password;
    const typeOfUser=req.params.type;
    let error=[];
    if(!userName||!password){
        error.push("all fields are required");
    }   
    else{
        await UserModel.findOne({userName:userName,password:password,typeOfUser:typeOfUser}).then(
            response=>{
                if(response){
                    res.json({success:true,typeOfUser:response.typeOfUser,error:[],userName:response.userName});
                }else{
                    error.push("incorrect username,password or type of user");
                }
            }
        ).catch(error=>console.log(error));
    }
    if(error.length>0){
        res.json({success:false,typeOfUser:'',error:error,userName:''});
    }
}