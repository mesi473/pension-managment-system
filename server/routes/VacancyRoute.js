const VacancyModel=require('../model/VacancyModel');

module.exports=NoteRoute= async (req,res)=>{
    const jobtitle=req.body.jobtitle
    const NumEmp=req.body.NumEmp
    const jobType=req.body.jobType
    const expriance=req.body.expriance
    const gender=req.body.gender
    let error=[];
    if(!jobType||!jobtitle||!NumEmp||!expriance||!gender){
        error.push("all fields are required");
    }
    else{
        new VacancyModel({
            jobtitle,NumEmp,jobType,expriance,gender
        }).save().then(response=>{
            res.json({success:true,error:[]});
        }).catch(error=>console.log(error));
    }
    if(error.length>0){
        res.json({success:false,error:error})
    }
}