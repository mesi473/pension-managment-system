const  express =require('express');
const mongoose =require('mongoose');
const cors =require('cors');
const router=require('./routes/index')
const app=express();


app.use(cors());
app.use(express.json())
app.use('',router);
app.use(express.static("uploads"));

mongoose.connect("mongodb://localhost:27017/pension_managment",{useUnifiedTopology: true,useNewUrlParser: true})
    .then(res=>{
        console.log("our database is running on port 27017");
    })
    .catch(error=>console.log(error));

app.listen(5000,()=>console.log("our server is running on port 5000"));