const  mongoose=require('mongoose');

const Expense=mongoose.Schema({
    purpose:{
        type:String,
        required:true,
    },
    amount:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now
    }

})

module.exports=ExpenseModel=mongoose.model('expense',Expense);