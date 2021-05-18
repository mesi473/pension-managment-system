const ExpenseModel=require('../model/ExpenseModel');

module.exports=ExpenseRoute= async (req,res)=>{
    const purpose=req.body.purpose;
    const amount=req.body.amount;
    const date=req.body.data;
    let error=[];
    if(!purpose||!amount){
        error.push("all fields are required");
    }
    else{
        if(date){
            await new ExpenseModel({
                purpose,amount,date
            }).save().then(Response=>{
                res.json({success:true,error:[]});
            }).catch(error=>console.log(error));
        }else{
            await new ExpenseModel({
                purpose,amount
            }).save().then(Response=>{
                res.json({success:true,error:[]});
            }).catch(error=>console.log(error));
        }
    }
    if(error.length>0){
        res.json({error:error,success:false});
    }
}
