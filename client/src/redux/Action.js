import * as actionType from './Constant';
import axios from 'axios'
 
export const loginAction=(userData)=>async (dispatch)=>{

    try{
        let data=null;
        await axios.get(`http://localhost:5000/login/${userData.userName}/${userData.password}/${userData.type}`).then((value) => {
            data = value;
        })
        dispatch({
            type:actionType.FEATCH_INFO,
            payload:data.data,
        })

    }
    catch(error){
        console.log(error);
    }
}
export const addEmployee=(formData)=>async (dispatch)=>{
    
    try{
        const {data}=await axios.post(`http://localhost:5000/registerEmployee`,formData);
        
        dispatch({
            type:actionType.ADD_EMPLOYEE,
            payload:data
        })
    }
    catch(error){
        console.log(error);
    }
}
export const featchEmployee=(userName)=>async (dispatch)=>{
    try{
        const {data}=await axios.get(`http://localhost:5000/featchemployee/${userName}`)
        
        dispatch({
            type:actionType.FEATCH_EMPLOYEE,
            payload:data
        })
    }
    catch(error){
        console.log(error);
    }
}
export const addIncome=(income)=>async (dispatch)=>{
    
    try{
        const {data}=await axios.post("http://localhost:5000/income",income);
        
        dispatch({
            type:actionType.ADD_INCOME,
            payload:data
        })
    }
    catch(error){
        console.log(error);
    }
}
export const addExpense=(expense)=>async (dispatch)=>{
    
    try{
        const {data}=await axios.post("http://localhost:5000/expense",expense);
        console.log(data);
        dispatch({
            type:actionType.ADD_EXPENSE,
            payload:data
        })
    }
    catch(error){
        console.log(error);
    }
}

export const getTotalExpenseIncome=()=>async (dispatch)=>{
    try{
        const {data}=await axios.get(`http://localhost:5000/gettotalexpense`);
        
        dispatch({
            type:actionType.GETINCOMEANDEXPENSE,
            payload:data
        })
    }
    catch(error){
        console.log(error);
    }
}
export const addCustomer=(customer)=>async (dispatch)=>{
    console.log(customer)
    try{
        const {data}=await axios.post(`http://localhost:5000/addcustomer`,customer);
        
        dispatch({
            type:actionType.ADD_CUSTOMER,
            payload:data
        })
    }
    catch(error){
        console.log(error);
    }
}
export const featchCustomer=()=>async (dispatch)=>{
    try{
        const {data}=await axios.get(`http://localhost:5000/featchcustomer`);
        
        dispatch({
            type:actionType.FEATCH_CUSTOMER,
            payload:data
        })
    }
    catch(error){
        console.log(error);
    }
}
export const addBook=(book)=>async (dispatch)=>{
    try{
        if(!book){
            dispatch({
                type:"CLEAR_BOOK"
            })
        }
        else{
        const {data}=await axios.post(`http://localhost:5000/addbook`,book);
        dispatch({
            type:actionType.BOOK_CUSTOMER,
            payload:data
        })
    }
    }
    catch(error){
        console.log(error);
    }
}
export const addNote=(note)=>async (dispatch)=>{
    try{
        if(!note){
            dispatch({
                type:"CLEAR_NOTE"
            })
        }
        else{
            const {data}=await axios.post(`http://localhost:5000/addnote`,note);
            dispatch({
                type:actionType.ADD_NOTE,
                payload:data
            })
    }
    }
    catch(error){
        console.log(error);
    }
}
export const addVacancy=(vacancy)=>async (dispatch)=>{
    try{
        if(!vacancy){
            dispatch({
                type:"CLEAR_VACANCY"
            })
        }
        else{
            const {data}=await axios.post(`http://localhost:5000/addvacancy`,vacancy);
           
            dispatch({
                type:actionType.ADD_VACANCY,
                payload:data
            })
    }
    }
    catch(error){
        console.log(error);
    }
}
export const getNoteAndVacancy=()=>async (dispatch)=>{
    try{
        const {data}=await axios.get(`http://localhost:5000/get_vacancy_note`)
        
        dispatch({
            type:actionType.GET_VACANCY_NOTE,
            payload:data
        })
    }
    catch(error){
        console.log(error);
    }
}
export const addRoom=(room)=>async (dispatch)=>{
    try{
        const {data}=await axios.post(`http://localhost:5000/addroom`,room)
        
        dispatch({
            type:actionType.ADD_ROOM,
            payload:data
        })
    }
    catch(error){
        console.log(error);
    }
}
export const sendMessage=(message)=>async (dispatch)=>{
    try{
        const {data}=await axios.post(`http://localhost:5000/message`,message)
        
        dispatch({
            type:actionType.SEND_MESSAGE,
            payload:data
        })
    }
    catch(error){
        console.log(error);
    }
}
export const getMessage=(typeOfUser)=>async (dispatch)=>{
    try{
        console.log(typeOfUser)
        const {data}=await axios.get(`http://localhost:5000/getmessage/${typeOfUser}`)
        console.log(data)
        dispatch({
            type:actionType.GET_MESSAGE,
            payload:data
        })
    }catch(error){
        console.log(error);
    }
}
export const getAdminMessage=()=>async (dispatch)=>{
    try{
        const {data}=await axios.get(`http://localhost:5000/getmessage`)
        dispatch({
            type:actionType.GET_MESSAGE,
            payload:data
        })
    }catch(error){
        console.log(error);
    }
}
export const getProfile=(userName,typeOfUser)=>async (dispatch)=>{
    try{
        const {data}=await axios.get(`http://localhost:5000/getprofile/${userName}/${typeOfUser}`)
        
        dispatch({
            type:actionType.GET_PROFILE,
            payload:data
        })
    }catch(error){
        console.log(error)
    }
}