import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { Button, Typography,Grid } from '@material-ui/core';
import AddCustomerInfo from './AddCustomer';
import Report from './Report';
import CustomerInfo from '../dashboardComponents/customer/Customer';
import ProfileIcon from '@material-ui/icons/People';
import {featchCustomer,getMessage} from '../../redux/Action';
import {useDispatch,useSelector} from 'react-redux';
import MpImage from '../../images/meklit.png';
import AddCustomerIcon from '@material-ui/icons/PersonAddOutlined';
import ReportIcon from '@material-ui/icons/Report';
import CustomerInfoIcon from '@material-ui/icons/ContactMail';  
import ProfileIcon2 from '@material-ui/icons/AccountCircle'
import CloseIcon from '@material-ui/icons/Close';

export default function Dashboard() {
    const [componet, setComponent] = React.useState("CustomerInfo");
    const user=useSelector(state=>state.featchInfo.user.typeOfUser);
    const userName=useSelector(state=>state.featchInfo.user.userName);
    const profile=useSelector(state=>state.getProfile.profile);
    const [showSidebar, setShow] = React.useState(false);

    const dispatch=useDispatch();
    function Choice() {
        switch (componet) {
            case "CustomerInfo":
                dispatch(featchCustomer())
                return <CustomerInfo />;
            case "Add":
                return <AddCustomerInfo />;
            case "Report":
                return <Report />
            case "Profile":
                return <Profile/>
            default:
                return <CustomerInfo/>
        }
    }
    return (
        <div className="dashboard">
            <div className="dashboard-sidebar">
                <div className="dashboard-logo">
                    <img src={MpImage} alt="" height="60px"/>
                </div>
                <div className="dashboard-links">
                    <ul>
                        <li><Button
                            onClick={() => {
                                setComponent("Add");
                            }}
                            fullWidth variant="outlined">Add Customer</Button></li>
                        <li><Button
                            onClick={() => {
                                dispatch(getMessage(userName));
                                setComponent("Report");
                            }}
                            fullWidth variant="outlined">Report To Manager</Button></li>

                        <li><Button
                            onClick={() => {
                                dispatch(featchCustomer())
                                setComponent("CustomerInfo")
                            }}
                            fullWidth variant="outlined">Customer Info</Button></li>
                        <li><Button
                            onClick={() => {
                                setComponent("Profile")
                            }}
                            fullWidth variant="outlined">Profile</Button></li>
                    </ul>
                </div>
            </div>
            <div className="dashboard-appbar">
                <header>
                    <nav>
                        <div className="dashboard-menubarIcon">
                            <span className="menu-button"><Button variant="outlined" onClick={()=>{setShow(!showSidebar)}}><MenuIcon /></Button></span>
                            <label style={{marginTop:"10px"}}>Dashboard</label>
                        </div>
                        <div className="user-profile">
                            <div className="profilePic"><img src={`http://localhost:5000/${profile.idImage}`} alt="" /></div>
                            <label>{user}</label>
                        </div>
                    </nav>
                </header>
            </div>
            <div className="dashboard-main">
                {Choice()}
            </div>
            {showSidebar?
                <div className="sidebar-2">
                <CloseIcon onClick={()=>{setShow(!showSidebar)}}/>
                <div className="sidebar-icons" onClick={() => {
                                setComponent("Add");
                            }}>
                    <AddCustomerIcon style={{color:"#fff",width:"40px",height:"40px"}}/>
                    <span><h4>Add</h4></span>
                </div>
                <div className="sidebar-icons" onClick={() => {
                                dispatch(getMessage(userName));
                                setComponent("Report");
                            }}>
                    <ReportIcon style={{color:"#fff",width:"40px",height:"40px"}}/>
                    <span><h4>Report</h4></span>
                </div>
                <div className="sidebar-icons" onClick={() => {
                                dispatch(featchCustomer())
                                setComponent("CustomerInfo")
                            }}>
                    <CustomerInfoIcon style={{color:"#fff",width:"40px",height:"40px"}}/>
                    <span><h4>Customer Info</h4></span>
                </div>
                <div className="sidebar-icons" onClick={() => {
                                setComponent("Profile")
                            }}>
                    <ProfileIcon2 style={{color:"#fff",width:"40px",height:"40px"}}/>
                    <span><h4>Profile</h4></span>
                </div>
            </div>
            :null
            }
        </div>
    )
}
function Profile() {
    const profile=useSelector(state=>state.getProfile.profile);
    return(
        <div style={{
            marginTop: "60px",
            background: "#ffffff",
            borderRadius: "20px",
            width: "50%",
            padding: '5px',
            display: "flex",
            alignItems: "center",
            textAlign: "center"
        }}>
            <div style={{ display: "flex" }}>
                <div style={{ flexGrow: 1 }}>
                    <ProfileIcon />
                    <Typography>profile</Typography>
                </div>
            </div>
            <hr />
            <Grid container spacing={2} style={{ width: "100%" }}>
                <Grid item={true} sm={6} >
                    <div style={{width:"150px",height:"200px"}}>
                        <img src={`http://localhost:5000/${profile.idImage}`} alt="" height="100%" width="100%"/>
                    </div>
                    
                </Grid>
                <Grid item={true} sm={6}>
                    <Typography>Name:&nbsp;{profile.firstName} &nbsp;{profile.lastName} </Typography>
                    <Typography>working area:&nbsp;{profile.workingArea} </Typography>
                    <Typography>Gender:&nbsp;{profile.gender}</Typography>
                </Grid>
            </Grid>
        </div>
    )
}