import React from 'react';
import MoreIcon from '@material-ui/icons/MoreHoriz'
import SearchIcon from '@material-ui/icons/Search';
import {TextField,InputAdornment,Dialog,DialogTitle,Typography,Button,DialogContent} from '@material-ui/core';
import ArrowRight from '@material-ui/icons/ArrowRight';
import {useSelector} from 'react-redux';
import ExitIcon from '@material-ui/icons/Close';
import AdditionalIcon from '@material-ui/icons/ArrowForward';
import BackIcon from '@material-ui/icons/ArrowBack';

export default function EmployeeTable(){
    const employees=useSelector(state=>state.featchEmployee.employeesInfo.employees);
    const [open,setOpen]=React.useState(false);
    const [id,setId]=React.useState(0);
    const [sideshow,setSideshow]=React.useState(false)
    function ShowAll(){
        let display="flex";
        let display2="none"
        if(sideshow){
            display="none";
            display2="flex"
        }else{
            display="flex";
            display2="none"
        }
        return(
            <Dialog open={open}  style={{}}>
            <DialogTitle>
                <div style={{ display: display }} >
                    <div style={{ flexGrow: 1 }}>
                        <Typography> Employee Information</Typography>
                    </div>
                    <Button  color="secondary" onClick={() => {setOpen(false); }}>
                        <ExitIcon />
                    </Button>
                    <Button>
                        <AdditionalIcon color="primary"
                            onClick={()=>{setSideshow(true)}}
                        />
                    </Button>
                </div>
                <div style={{ display: display2 }} >
                    <Button>
                        <BackIcon color="primary"
                            onClick={()=>{setSideshow(false)}}
                        />
                    </Button>
                    <div style={{ flexGrow: 1 }}>
                        <Typography>Bonds man/women information</Typography>
                    </div>
                    <Button  color="secondary" onClick={() => {setOpen(false); }}>
                        <ExitIcon />
                    </Button>
                </div>
            </DialogTitle>
            <DialogContent >
                <hr/>
                <div style={{display:display}}>
                {employees.length>0?
                    <div className="card-body">
                        <table width="100%">
                            <thead>
                                <tr>
                                    <td>Image</td>
                                    <td>Name</td>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                        <td>
                                            <img src={employees[id].idImage?`http://localhost:5000/${employees[id].idImage}`:''} alt="" width="60px" height="60px"/>
                                        </td>
                                    <td>{employees[id].firstName+" "+employees[id].lastName}</td>
                                    
                                </tr>
                            </tbody>
                        </table>
                        <table width="100%">
                            <thead>
                                <tr>
                                    <td>Working Area</td>
                                    <td>Salary</td>
                                    <td>Expriance</td>
                                    <td>Education</td>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td>{employees[id].workingArea}</td>
                                    <td>${employees[id].salary}</td>
                                    <td>{employees[id].expriance}</td>
                                    <td>{employees[id].education}</td>
                                    
                                </tr>
                            </tbody>
                        </table>
                        <table width="100%">
                            <thead>
                                <tr>
                                    <td>date</td>
                                    <td>gender</td>
                                    <td>houseNumber</td>
                                    <td>id number</td>
                                    
                                </tr>
                            </thead>
                            <tbody>
                            
                                <tr >
                                    <td>{employees[id].date}</td>
                                    <td>{employees[id].houseNumber}</td>
                                    <td>{employees[id].id}</td>
                                    <td>{employees[id].education}</td>
                                </tr>
                            </tbody>
                        </table>
                        <table width="100%">
                            <thead>
                                <tr>
                                    <td>street</td>
                                    <td>wereda</td>
                                    <td>zone</td>
                                    <td>country</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td>{employees[id].street}</td>
                                    <td>{employees[id].wereda}</td>
                                    <td>{employees[id].zone}</td>
                                    <td>{employees[id].country}</td>
                                </tr>
                            </tbody>
                        </table>
                        <table width="100%">
                            <thead>
                                <tr>
                                    <td>provinance</td>
                                    <td>phoneNumber</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td>{employees[id].provinance}</td>
                                    <td>{employees[id].phoneNumber}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                :null}
                </div>
                <div style={{display:display2}}>
                {employees.length>0?
                    <div className="card-body">
                        <table width="100%">
                            <thead>
                                <tr>
                                    <td>Image</td>
                                    <td>Name</td>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                        <td>
                                            <img src={employees[id].idImage?`http://localhost:5000/${employees[id].BidImage}`:''} alt="" width="60px" height="60px"/>
                                        </td>
                                    <td>{employees[id].BfirstName+" "+employees[id].BlastName}</td>
                                </tr>
                            </tbody>
                        </table>
                        <table width="100%">
                            <thead>
                                <tr>
                                    <td>gender</td>
                                    <td>houseNumber</td>
                                    <td>phoneNumber</td>
                                </tr>
                            </thead>
                            <tbody>
                            
                                <tr >
                                    <td>{employees[id].Bgender}</td>
                                    <td>{employees[id].BhouseNumber}</td>
                                    <td>{employees[id].BphoneNumber}</td>
                                </tr>
                            </tbody>
                        </table>
                        <table width="100%">
                            <thead>
                                <tr>
                                    <td>provinance</td>
                                    <td>street</td>
                                    <td>wereda</td>
                                    <td>zone</td>
                                    <td>country</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td>{employees[id].Bprovinance}</td>
                                    <td>{employees[id].Bstreet}</td>
                                    <td>{employees[id].Bwereda}</td>
                                    <td>{employees[id].Bzone}</td>
                                    <td>{employees[id].Bcountry}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                :null}
                </div>
            </DialogContent>
        </Dialog>
        )
    }
    return(
        <div>
            {ShowAll()}
            <div className="total-employee">
                <div className="card">
                    <div className="card-header">
                        <h2>employees</h2>
                        <TextField
                        size="small"
                        label="search"
                        InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon/>
                            </InputAdornment>
                        ),
                        }}
                        >
                        <span><ArrowRight/></span></TextField>
                    </div>
                    <div className="card-body">
                        <table width="100%">
                            <thead>
                                <tr>
                                    <td>Name</td>
                                    <td>Working Area</td>
                                    <td>Salary</td>
                                    <td>Expriance</td>
                                    <td>Education</td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody>
                            {employees.map((employee,index)=>(
                                <tr key={index}>
                                    <td>{employee.firstName+" "+employee.lastName}</td>
                                    <td>{employee.workingArea}</td>
                                    <td>${employee.salary}</td>
                                    <td>{employee.expriance}</td>
                                    <td>{employee.education}</td>
                                    <td>
                                        <span className="status"><MoreIcon
                                            onClick={async ()=>{await setId(index);setOpen(true);}}
                                        /></span>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
