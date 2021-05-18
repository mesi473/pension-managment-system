const ExpenseModel=require('../model/ExpenseModel');
const IncomeModel=require('../model/Income');

module.exports=GetTotal= async (req,res)=>{
    let income=[];
    let expense=[];
    await IncomeModel.find({}).then(response=>{
        income=[...response]
    }).catch(error=>console.log(error));
    await ExpenseModel.find({}).then(response=>{
        expense=[...response];
    })
    res.json({income,expense});
}
