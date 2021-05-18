import React from 'react';
import './drawer.css';
import ShowDrawer from '../Context';
import {NavLink} from 'react-router-dom';
import DrawerImage from '../images/room-5.jpeg';
import {makeStyles,Button} from '@material-ui/core';


const useStyles=makeStyles({
    navbarbutton:{
        fontWeight:"bold",
    }
})
export default function SideDrawer() {
    const show=React.useContext(ShowDrawer);
    const sideDrawerClass=["sidedrawer"];
    const sideDrawerLeft=["sideDrawerLeft"];
    if(show.sideToggle){
        sideDrawerClass.push("show");
        sideDrawerLeft.push("show");
    }
    const styles=useStyles();
    return (
        show &&<div>
            <div className={sideDrawerClass.join(" ")}>
                <div className="drawerImage">
                    <img src={DrawerImage} alt="drawer"/>
                </div>
                <div className="drawerItems">
                    <ul>
                        <li><Button fullWidth ><NavLink to="/"><div className={styles.navbarbutton} >Home</div></NavLink></Button></li>
                        <li><Button fullWidth ><NavLink to="/rooms"><div className={styles.navbarbutton}>Rooms</div></NavLink></Button></li>
                        <li><Button fullWidth ><NavLink to="/contact"><div className={styles.navbarbutton}>contact</div></NavLink></Button></li>
                        <li><Button fullWidth ><NavLink to="/about"><div className={styles.navbarbutton}>About</div></NavLink></Button></li>
                        <li><Button fullWidth ><NavLink to="/location"><div className={styles.navbarbutton}>Location</div></NavLink></Button></li>
                        <li><Button fullWidth ><NavLink to="/login"><div className={styles.navbarbutton}>Login</div></NavLink></Button></li>
                    </ul>
                </div>
            </div>
            <div style={{zIndex:600}} className={sideDrawerLeft.join(" ")} onClick={()=>{
                show.setSideToggle(false);
            }}>
            </div>
        </div>
    )
    
}
