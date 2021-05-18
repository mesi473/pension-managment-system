import React from 'react';
import ArrowRight from '@material-ui/icons/ArrowRight';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreHoriz';
import {TextField,InputAdornment,Dialog,DialogTitle,Typography,Button,DialogContent} from '@material-ui/core'
import './customer.css';
import {useSelector} from 'react-redux';
import ExitIcon from '@material-ui/icons/Close';

export default function Customer() {
    const customers=useSelector(state=>state.featchCustomer.CustomerInfo.customers);
    const [open,setOpen]=React.useState(false);
    const [id,setId]=React.useState(0);
    function ShowAll(){
        if(customers.length>0)
        return(
            <Dialog open={open}  style={{}}>
            <DialogTitle>
                <div style={{display:"flex"}}>
                    <div style={{ flexGrow: 1 }}>
                        <Typography>Customer Information</Typography>
                    </div>
                    <Button  color="secondary" onClick={() => {setOpen(false); }}>
                        <ExitIcon />
                    </Button>
                </div>
            </DialogTitle>
            <DialogContent >
                <hr/>
                <div className="total-employee">
                    <div className="card">
                        <div className="card-body">
                            <table width="100%">
                                <thead>
                                    <tr>
                                        <td>Image</td>
                                        <td>Full Name</td>
                                    </tr>
                                </thead>
                                <tbody>
                                        <tr >
                                            <td><img src={customers[id].idImage?`http://localhost:5000/${customers[id].idImage}`:''} alt="" width="60px" height="60px"/></td>
                                            <td>{customers[id].firstName} &nbsp; {customers[id].lastName}</td>
                                        </tr>
                                </tbody>
                            </table>
                            <table width="100%">
                                <thead>
                                    <tr>
                                        <td>ID Number</td>
                                        <td>Room Number</td>
                                        <td>house Number</td>
                                    </tr>
                                </thead>
                                <tbody>
                                        <tr >
                                            <td>{customers[id].id}</td>
                                            <td>{customers[id].roomNumber}</td>
                                            <td>{customers[id].houseNumber}</td>
                                        </tr>
                                </tbody>
                            </table>
                            <table width="100%">
                                <thead>
                                    <tr>
                                        <td>Country</td>
                                        <td>provinance</td>
                                        <td>Date</td>
                                    </tr>
                                </thead>
                                <tbody>
                                        <tr >
                                            <td>{customers[id].country}</td>
                                            <td>{customers[id].provinance}</td>
                                            <td>{customers[id].date}</td>
                                        </tr>
                                </tbody>
                            </table>
                            <table width="100%">
                                <thead>
                                    <tr>
                                        <td>street</td>
                                        <td>wereda</td>
                                        <td>zone</td>
                                    </tr>
                                </thead>
                                <tbody>
                                        <tr >
                                            <td>{customers[id].street}</td>
                                            <td>{customers[id].wereda}</td>
                                            <td>{customers[id].zone}</td>
                                        </tr>
                                </tbody>
                            </table>
                            <table width="100%">
                                <thead>
                                    <tr>
                                        <td>phoneNumber</td>
                                    </tr>
                                </thead>
                                <tbody>
                                        <tr >
                                            <td>{customers[id].phoneNumber}</td>
                                        </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
        )
    }
    return (
        <div>
            {ShowAll()}
            <div>
                <div className="total-employee">
                    <div className="card">
                        <div className="card-header">
                            <h2>Customer Information</h2>
                            <TextField
                                size="small"
                                label="search"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon />
                                        </InputAdornment>
                                    )
                                }}
                            >
                                <span><ArrowRight /></span></TextField>
                        </div>
                        <div className="card-body">
                            <table width="100%">
                                <thead>
                                    <tr>
                                        <td>Full Name</td>
                                        <td>ID Number</td>
                                        <td>Room Number</td>
                                        <td>house Number</td>
                                        <td>Country</td>
                                        <td>provinance</td>
                                        <td>Date</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {customers.map((customer,index)=>(
                                        <tr key={index}>
                                            <td>{customer.firstName} &nbsp; {customer.lastName}</td>
                                            <td>{customer.id}</td>
                                            <td>{customer.roomNumber}</td>
                                            <td>{customer.houseNumber}</td>
                                            <td>{customer.country}</td>
                                            <td>{customer.provinance}</td>
                                            <td>{customer.date}</td>
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
        </div>
    )
}
