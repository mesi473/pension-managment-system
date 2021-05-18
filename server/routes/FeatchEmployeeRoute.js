const EmployeeModel=require('../model/EmployeeModel');
const UserModel=require('../model/UserModel')

module.exports=FeatchEmployeeRoute=async (req,res)=>{
    const userName=req.params.userName;
    let error=[];
    if(!userName){
        error.push("user name must be provided")
    }
    else{
        await UserModel.find({userName:userName}).then(response=>{
            if(response){
                EmployeeModel.find({}).then(employee=>{
                    res.json({employees:employee,error:[]});
                }).catch(error=>console.log(error));
            }else{
                error.push("incorrect userName");
            }
        }).catch(error=>console.log(error))
    }
    if(error.length>0){
        res.json({error:error,employees:[]});
    }
}