import {createStore,combineReducers,applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import Thunk from 'redux-thunk';
import {addVacancy,getVacancyAndNote ,
    featchInfo,addBook,addEmployee,addNote,featchEmployee,
    addIncome,addExpense,getIncomeAndExpense,addCustomer,
    featchCustomer,addRoom,sendMessage,getMessage,getProfile} from './Reducers';
 
const middleware=[Thunk];

const reducer=combineReducers({
    featchInfo,
    addEmployee,
    featchEmployee,
    addIncome,
    addExpense,
    getIncomeAndExpense,
    addCustomer,
    featchCustomer,
    addBook,
    addNote,
    addVacancy,
    getVacancyAndNote,
    addRoom,
    sendMessage,
    getMessage,
    getProfile
})

const store=createStore(reducer,composeWithDevTools(applyMiddleware(...middleware)));

export default store;