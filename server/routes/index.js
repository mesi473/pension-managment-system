const express=require('express');
const RegisterRoute=require('./RegisterRoute');
const router=express();
const LoginRoute=require('./LoginRoute');
const CustomerRoute=require('./CustomerRoute');
const EmployeeRoute=require('./EmployeeRoute');
const multer=require('multer');
const path=require('path');
const FeatchEmployeeRoute=require('./FeatchEmployeeRoute');
const IncomeRoute=require('./IncomeRoute');
const ExpenseRoute=require('./ExpenseRoute');
const GetTotal=require('./GetTotal');
const FeatchCustomer=require('./FeatchCustomer');
const BookRoute=require('./BookRoute');
const NoteRoute=require('./NoteRoute');
const VacancyRoute=require('./VacancyRoute');
const GetNoteroute=require('./GetNoteRoute');
const addRoom=require('./BookRoom');
const MessageRoute=require('./MessageRoute');
const getMessageRoute=require('./GetMessageRoute');
const getEmployeeProfile=require('./GetEmployeeProfile');
const getAdminMessage=require('./getAdminMessage');
const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./uploads/');
    },
    filename:function(req,file,cb){
        cb(null,file.originalname);
    },
})

const upload=multer({storage:storage,limits:{fieldSize:24*1024*1024*1024}});

router.post("/register",RegisterRoute)
router.get("/login/:userName/:password/:type",LoginRoute);
router.post('/registerCustemer',CustomerRoute);
router.post('/registerEmployee',upload.array('Image',2),EmployeeRoute);
router.get('/featchemployee/:userName',FeatchEmployeeRoute);
router.post('/income',IncomeRoute);
router.post('/expense',ExpenseRoute);
router.get('/gettotalexpense',GetTotal);
router.post('/addcustomer',upload.single("Image"),CustomerRoute);
router.get('/featchcustomer',FeatchCustomer);
router.post('/addbook',BookRoute);
router.post('/addnote',NoteRoute);
router.post('/addvacancy',VacancyRoute);
router.get('/get_vacancy_note',GetNoteroute);
router.post('/addroom',addRoom);
router.post('/message',MessageRoute);

router.get('/getmessage/:userName',getMessageRoute);
router.get('/getmessage/',getAdminMessage);
router.get('/getprofile/:userName/:typeOfUser',getEmployeeProfile);
module.exports=router;