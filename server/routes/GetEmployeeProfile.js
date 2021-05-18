const EmployeeModel=require('../model/EmployeeModel');

module.exports=RoomRoute=async (req,res)=>{
    const userName=req.params.userName;
    const typeOfUser=req.params.typeOfUser;

    if(typeOfUser==="casher"){
        EmployeeModel.findOne({firstName:userName,workingArea:typeOfUser}).then(response=>{
            if(response){
                res.json(response)
            }else{
                res.json({})
            }
        }).catch(error=>console.log(error))
    }
}