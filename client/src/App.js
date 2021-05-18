import React from 'react';
import Header from './Header/Header';
import './Header/Header.css'
import {BrowserRouter as Router,Route,Switch,Redirect}  from 'react-router-dom';
import DrawerShadow from './drawer/BackDrop';
import ShowContext from './Context';
import Drawer from './drawer/drawer';
import HomePage from './Home/Home'
import OurRooms from './OurRooms';
import Location from './location/Location';
import Login from './login/Login';
import {Provider,useSelector} from 'react-redux';
import Store from './redux/Store';
import CasherDashBoard from './dashboard/casher-dashboard/Dashboard';
import DashBoard from './dashboard/DashBoard';


export default function App(){
    const [sideToggle,setSideToggle]=React.useState(false)
    return(
    <Provider store={Store}>
        <ShowContext.Provider value={{sideToggle,setSideToggle}}>
            <Router>
                <Header/>
                <DrawerShadow/>
                <Drawer/>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/rooms" component={OurRooms}/>
                    <Route exact path="/location" component={Location}/>
                    <Route exact path="/login" component={Login}/>
                    <ProtectedRoute exact path="/admin-dashboard/:userName"  component={DashBoard}/>
                    <ProtectedRoute exact path="/casher-dashboard/:userName" component={CasherDashBoard}/>
                    <Route path="*" component={ErrorRoute}/>
                </Switch>
            </Router>
        </ShowContext.Provider>
    </Provider>
    )
}
function ProtectedRoute({component:Component,...rest}){
    const canLogin=useSelector((state)=>state.featchInfo.user.success)

    return (
        <Route {...rest} render={(props)=>{
            if(canLogin){
                return(
                <Component {...props}/>
                )
            }
            else{
                return (
                   <Redirect to={
                       {
                       pathname:"/login",
                       state:{
                           from:props.location
                       }
                   }}/>
               )
            }
        }}/>
    )
}
function ErrorRoute(){
    return(
        <div style={{
            
            background:"#d7f8f9f4",
            display:"flex",
            justifyContent:"center",
            alignContent:"center",
            textAlign:"center",
            width:"100%",
            height:"100vh",
        }}>
            <h1 style={{
                position:"absolute",
                top:"40%"
            }}>404 Page Not Found</h1>
        </div>
    )
}