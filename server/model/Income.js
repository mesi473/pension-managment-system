const  mongoose=require('mongoose');

const Income=mongoose.Schema({
    Standard:{
        type:Number,
        required:true
    },
    Commen:{
        type:Number,
        required:true
    },
    Family:{
        type:Number,
        required:true
    },
    Standard$:{
        type:Number,
        default:150
    },
    Commen$:{
        type:Number,
        default:120
    },
    Family$:{
        type:Number,
        default:300
    },
    date:{
        type:Date,
        default:Date.now
    }

})

module.exports=IncomeModel=mongoose.model('income',Income);