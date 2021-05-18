import React from 'react';
import './admin-dashboard.css';
import ProfilePic from '../images/room-6.jpeg';
import ShowContext from '../Context';
import MenuIcon from '@material-ui/icons/MenuOutlined';
import { Button ,CircularProgress} from '@material-ui/core'
import Employee from './dashboardComponents/employee/Employee';
import Home from './dashboardComponents/home/Home';
import Finance from './dashboardComponents/finance/Finance';
import Customer from './dashboardComponents/customer/Customer';
import Rooms from './dashboardComponents/rooms/Rooms';
import { useDispatch, useSelector } from 'react-redux';
import HomeIcon from '@material-ui/icons/Home';
import CustomerIcon from '@material-ui/icons/AssignmentInd';
import FinanceIcon from '@material-ui/icons/LocalAtm'
import RoomIco from '@material-ui/icons/KingBed';
import EmpIcon from '@material-ui/icons/PeopleOutline'
import { featchEmployee, getTotalExpenseIncome, featchCustomer ,getAdminMessage} from '../redux/Action';
import MpImage from '../images/meklit.png';
import CloseIcon from '@material-ui/icons/Close'

export default function DashBoard() {
    const show = React.useContext(ShowContext);
    const user = useSelector(state => state.featchInfo.user.typeOfUser);
    show.setSideToggle(false);
    const [component, setComponent] = React.useState("Home");
    const [showSidebar, setShow] = React.useState(false);

    const dispatch = useDispatch();
    const userName = useSelector(state => state.featchInfo.user.userName);
    const totalExpense=useSelector(state=>state.getIncomeAndExpense.total.expense);
    React.useEffect(()=>{
        dispatch(getTotalExpenseIncome());
    },[]);
    function RenderCom() {
        dispatch(getAdminMessage());
        switch (component) {
            case "Home":
                dispatch(getTotalExpenseIncome());
                if(totalExpense.length>0){
                    return <Home />
                }
                else{
                    return <CircularProgress/>
                }
            case "Employee":
                return <Employee />
            case "Finance":
                return <Finance />
            case "Customer":
                return <Customer />
            case "Rooms":
                return <Rooms />
            default:
                return null
        }
    }
    return (
        <div className="dashboard">
            <div className="dashboard-appbar">
                <header>
                    <nav>
                        <div className="dashboard-menubarIcon">
                            <span className="menu-button"><Button variant="outlined" onClick={()=>{setShow(!showSidebar)}}><MenuIcon /></Button></span>
                            <label style={{marginTop:"10px"}}>Dashboard</label>
                        </div>
                        <div className="user-profile">
                            <div className="profilePic"><img src={ProfilePic} alt="" /></div>
                            <label>{user}</label>
                        </div>
                    </nav>
                </header>
            </div>
            <div className="dashboard-main">
                {RenderCom()}
            </div>
            {showSidebar?
                <div className="sidebar-2">
                <CloseIcon onClick={()=>{setShow(!showSidebar)}}/>
                <div className="sidebar-icons" onClick={() => {
                                dispatch(featchCustomer())
                                setComponent("Home")
                                dispatch(getTotalExpenseIncome());
                            }}>
                    <HomeIcon style={{color:"#fff",width:"40px",height:"40px"}}/>
                    <span><h4>Home</h4></span>
                </div>
                <div className="sidebar-icons" onClick={async () => {
                    
                    await dispatch(featchEmployee(userName));
                    setComponent("Employee")
                    }}>
                    <EmpIcon style={{color:"#fff",width:"40px",height:"40px"}}/>
                    <span><h4>Employee</h4></span>
                </div>
                <div className="sidebar-icons" onClick={async () => {
                                
                                await dispatch(getTotalExpenseIncome());
                                setComponent("Finance")
                            }}>
                    <FinanceIcon style={{color:"#fff",width:"40px",height:"40px"}}/>
                    <span><h4>Finance</h4></span>
                </div>
                <div className="sidebar-icons" onClick={() => {
                                setComponent("Rooms")
                            }}>
                    <RoomIco style={{color:"#fff",width:"40px",height:"40px"}}/>
                    <span><h4>Room</h4></span>
                </div>
                <div className="sidebar-icons" onClick={() => {
                                dispatch(featchCustomer())
                                setComponent("Customer")
                            }}>
                    <CustomerIcon style={{color:"#fff",width:"40px",height:"40px"}}/>
                    <span><h4>Customer</h4></span>
                </div>
            </div>
            :null
            }
            <div className="dashboard-sidebar">
                <div className="dashboard-logo">
                    <img src={MpImage} alt="" height="60px" />
                </div>
                <div className="dashboard-links">
                    <ul>
                        <li><Button
                            onClick={() => {
                                dispatch(featchCustomer())
                                setComponent("Home")
                            }}
                            fullWidth variant="outlined">Home</Button></li>
                        <li><Button
                            onClick={async () => {

                                await dispatch(featchEmployee(userName));
                                setComponent("Employee")
                            }}
                            fullWidth variant="outlined">employees</Button></li>
                        <li><Button
                            onClick={async () => {
                                await dispatch(getTotalExpenseIncome());
                                setComponent("Finance")
                            }}
                            fullWidth variant="outlined">Finance</Button></li>
                        <li><Button
                            onClick={() => {
                                setComponent("Rooms")
                            }}
                            fullWidth variant="outlined">Rooms</Button></li>
                        <li><Button
                            onClick={() => {
                                dispatch(featchCustomer())
                                setComponent("Customer")
                            }}
                            fullWidth variant="outlined">Customer Info</Button></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}