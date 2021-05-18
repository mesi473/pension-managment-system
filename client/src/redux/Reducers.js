import * as actionType from './Constant'
const initialState={
    user:{
        success:false,
        typeOfuser:'',
        error:[],
        userName:''
    },
    employee:{
        employeeSuccessfulyAdded:false,
        error:[],
    },
    employeesInfo:{
        employees:[],
        error:[]
    },
    income:{
        success:false,
        error:[],
    },
    expense:{
        success:false,
        error:[],
    },
    total:{
        income:[],
        expense:[],
        error:[]
    },
    customer:{
        success:false,
        error:[]
    },
    CustomerInfo:{
        customers:[],
        error:[]
    },
    book:{
        success:false,
        error:[]
    },
    note:{
        success:false,
        error:[]
    },
    vacancy:{
        success:false,
        error:[]
    },
    getVN:{
        notes:[],
        vacancies:[]
    },
    room:{
        success:false,
        error:[]
    },
    message:{
        success:false,
        progress:true
    },
    getmessages:{
        message:[],
        error:[]
    },
    profile:{
    }

}

export const featchInfo=(state=initialState,action)=>{
    switch(action.type){
        case actionType.FEATCH_INFO:
            return{
                ...state,
                user:action.payload,
            }
        default:
            return state;
    }
}
export const addEmployee = (state = initialState, action) => {
    switch (action.type) {
        case actionType.ADD_EMPLOYEE:
            return {
                ...state,
                employee:action.payload,
            }
        default:
            return state
    }
}
export const featchEmployee = (state =initialState , action) => {
    switch (action.type) {
        case actionType.FEATCH_EMPLOYEE:
            return {
                ...state,
                employeesInfo:action.payload
            }
        default:
            return state
    }
}
export const addIncome = (state = initialState, action) => {
    switch (action.type) {
        case actionType.ADD_INCOME:
            return {
                ...state,
                income:action.payload
            }
        default:
            return state
    }
}
export const addExpense = (state = initialState, action) => {
    switch (action.type) {
        case actionType.ADD_EXPENSE:
            return {
                ...state,
                expense:action.payload
            }
        default:
            return state
    }
}

export const getIncomeAndExpense = (state = initialState, action) => {
    switch (action.type) {
        case actionType.GETINCOMEANDEXPENSE:
            return {
                ...state,
                total:action.payload
            }
        default:
            return state
    }
}
export const addCustomer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.ADD_CUSTOMER:
            return {
                ...state,
                customer:action.payload,
            }
        default:
            return state
    }
}
export const featchCustomer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.FEATCH_CUSTOMER:
            return {
                ...state,
                CustomerInfo:action.payload,
            }
        default:
            return state
    }
}
export const addBook = (state = initialState, action) => {
    switch (action.type) {
        case actionType.BOOK_CUSTOMER:
            return {
                ...state,
                book:action.payload,
            }
        case "CLEAR_BOOK":
            return{
                ...state,
                book:{success:false,error:[]}
            }
        default:
            return state
    }
}
export const addNote = (state = initialState, action) => {
    switch (action.type) {
        case actionType.ADD_NOTE:
            return {
                ...state,
                note:action.payload,
            }
        case "CLEAR_NOTE":
            return{
                ...state,
                note:{success:false,error:[]}
            }
        default:
            return state
    }
}
export const addVacancy = (state = initialState, action) => {
    switch (action.type) {
        case actionType.ADD_VACANCY:
            return {
                ...state,
                vacancy:action.payload,
            }
        case "CLEAR_VACANCY":
            return{
                ...state,
                vacancy:{success:false,error:[]}
            }
        default:
            return state
    }
}
export const getVacancyAndNote = (state = initialState, action) => {
    switch (action.type) {
        case actionType.GET_VACANCY_NOTE:
            return {
                ...state,
                getVN:action.payload
            }
        default:
            return state
    }
}
export const addRoom = (state = initialState, action) => {
    switch (action.type) {
        case actionType.ADD_ROOM:
            return {
                ...state,
                room:action.payload
            }
        default:
            return state
    }
}
export const sendMessage = (state = initialState, action) => {
    switch (action.type) {
        case actionType.SEND_MESSAGE:
            if(action.payload.success===true){
                return {
                    ...state,
                    message:{success:true,error:[],progress:false}
                }
            }else{
                return{
                    ...state,
                    message:{success:false,error:[],progress:true}
                }
            }
            
        default:
            return state
    }
}
export const getMessage = (state = initialState, action) => {
    switch (action.type) {
        case actionType.GET_MESSAGE:
            return{
                ...state,
                getmessages:action.payload
            }
        default:
            return state
    }
}
export const getProfile = (state = initialState, action) => {
    switch (action.type) {
        case actionType.GET_PROFILE:
            return{
                ...state,
                profile:action.payload
            }
        default:
            return state
    }
}