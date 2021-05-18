const IncomeModel=require('../model/Income');

module.exports=IncomeRoute= async (req,res)=>{
    const Standard=req.body.Standard;
    const Family=req.body.Family;
    const Commen=req.body.Commen;
    const Standard$=req.body.Standard$;
    const Family$=req.body.Family$;
    const Commen$=req.body.Commen$;
    const date=req.body.data;
    let error=[];
    if(!Standard||!Family||!Commen){
        error.push("all fields are required");
    }
    else{
        if(date){
            await new IncomeModel({
                Standard,Commen,Family,date
            }).save().then(Response=>{
                res.json({success:true,error:[]});
            }).catch(error=>console.log(error));
        }else{
            await new IncomeModel({
                Standard,Commen,Family
            }).save().then(Response=>{
                res.json({success:true,error:[]});
            }).catch(error=>console.log(error));
        }
    }
    if(error.length>0){
        res.json({error:error,success:false});
    }
}
