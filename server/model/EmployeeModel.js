const mongoose=require("mongoose");

 const Employee=mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true,
    },
    id:{
        type:String,
        required:true,
    },
    provinance:{
        type:String,
        required:true
    },
    street:{
        type:String,
        required:true
    },
    zone:{
        type:String,
        required:true
    },
    wereda:{
        type:String,
        required:true
    },
    idImage:{
        type:String,
    },
    date:{
        type:String,
        default:Date.now()
    },
    houseNumber:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    expriance:{
        type:String,
        required:true
    },
    Bid:{
        type:String,
        requried:true,
    },
    BphoneNumber:{
        type:String,
        required:true
    },
    BfirstName:{
        type:String,
        required:true
    },
    BlastName:{
        type:String,
        required:true
    },
    Bcountry:{
        type:String,
        required:true
    },
    Bprovinance:{
        type:String,
        required:true
    },
    Bstreet:{
        type:String,
        required:true
    },
    Bzone:{
        type:String,
        required:true
    },
    Bwereda:{
        type:String,
        required:true
    },
    BidImage:{
        type:String,
    },
    BhouseNumber:{
        type:String,
        required:true
    },
    Bgender:{
        type:String,
        required:true
    },
    salary:{
        type:String,
        required:true
    },
    education:{
        type:String,
        required:true
    },
    workingArea:{
        type:String,
        required:true
    }
});
module.exports=EmployeeModel=mongoose.model("employee",Employee);