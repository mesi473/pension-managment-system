const CustomerModel=require('../model/CustemerModel');

module.exports=ReatchCustomer=async (req,res)=>{
    await CustomerModel.find({}).then(response=>{
            res.json({customers:response,error:[]})
    }).catch(error=>console.log(error));
}