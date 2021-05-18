const EmployeeModel=require('../model/EmployeeModel');
const UserModel=require('../model/UserModel');


module.exports=EmployeeRoute=async (req,res)=>{

    const phoneNumber=req.body.phoneNumber;
    const id=req.body.id;
    const firstName=req.body.firstName;
    const lastName=req.body.lastName;
    const country=req.body.country;
    const provinance=req.body.provinance;
    const street=req.body.street;
    const zone=req.body.zone;
    const wereda=req.body.wereda;
    const date=req.body.date;
    const houseNumber=req.body.houseNumber;
    const gender=req.body.gender;
    const BphoneNumber=req.body.BphoneNumber;
    const Bid=req.body.Bid;
    const BfirstName=req.body.BfirstName;
    const BlastName=req.body.BlastName;
    const Bcountry=req.body.Bcountry;
    const Bprovinance=req.body.Bprovinance;
    const Bstreet=req.body.Bstreet;
    const Bzone=req.body.Bzone;
    const Bwereda=req.body.Bwereda;
    const salary=req.body.salary;
    const education=req.body.education;
    const workingArea=req.body.workingArea;
    
    const BhouseNumber=req.body.BhouseNumber;
    const Bgender=req.body.Bgender;
    const expriance=req.body.expriance;
    let error=[];
    let idImage;
    let BidImage;
    if(req.file!=null || req.files!=null){
        idImage=req.files[0].originalname;
        BidImage=req.files[1].originalname;
    }
    else{
        error.push("image of the id must be provided")
    }
    if( !phoneNumber||!id||!firstName||!lastName
        ||!country||!provinance||!street||!zone||!wereda||
        !houseNumber||!gender||!expriance||
        !BphoneNumber||!Bid||!BfirstName||!BlastName
        ||!Bcountry||!Bprovinance||!Bstreet||!Bzone||!Bwereda||
        !BhouseNumber||!Bgender||!idImage||!BidImage||!salary||!education||!workingArea
        ){
            error.push("all fields are required");
    }
    else{
        if(workingArea==="casher"||workingArea==="Casher"){
            new UserModel({
                userName:firstName,typeOfUser:"casher",firstName,lastName,password:firstName
            }).save();  
        }
        new EmployeeModel({
        phoneNumber,id,firstName,lastName
        ,country,provinance,street,zone,wereda,idImage,
        date,houseNumber,gender,expriance,
        BphoneNumber,Bid,BfirstName,BlastName,salary,education,workingArea,
        Bcountry,Bprovinance,Bstreet,Bzone,Bwereda,BidImage,
        BhouseNumber,Bgender
        }).save().then(response=>{
            res.json({error:[],employeeSuccessfulyAdded:true});
        }).catch(error=>console.log(error));
    }
    if(error.length>0){
        res.json({error:error,employeeSuccessfulyAdded:false});
    }
}