import React from 'react'
import './employee.css';
import Status from './Status';
import EmployeeTable from './EmployeeTable';
import NewEmployee from './NewEmployee';
import Note from './Note';
import {useSelector, useDispatch} from 'react-redux';
import {getNoteAndVacancy} from '../../../redux/Action';


export default function Employee() {
    const [state,setState]=React.useState("Num");
    const [openDialog,setOpenDialog]=React.useState(false);
    const employees=useSelector(state=>state.featchEmployee.employeesInfo.employees);
    
    const dispatch=useDispatch();
    function Choice(){
        switch(state){
            case "Num":
                return <EmployeeTable/>
            case "Status":
                return <Status/>  
            case "Add":
              return <NewEmployee open={openDialog} setOpen={setOpenDialog}/>
            case "Other":
                return <Note/>
            default:
                return <EmployeeTable/>
        }
    }
    
    return (
        <div className="dashboard-employee">
            <div className="menu">
                <div onClick={()=>{
                    setState("Num")
                }} className="number-of-emp"># of employee ({employees.length})</div>
                <div onClick={()=>{
                    setState("Status")
                }}
                 className="status-of-emp">status</div>
                <div onClick={()=>{
                    setState("Add");
                    setOpenDialog(true);
                }}
                 className="salary-of-emp">Add new Employee</div>
                <div onClick={async ()=>{
                    
                    await dispatch(getNoteAndVacancy());
                    setState("Other");
                }}
                 className="take note">Other</div>
            </div>
            <div className="mainArea">
                {Choice()}
            </div>
        </div>
    )
    
}


