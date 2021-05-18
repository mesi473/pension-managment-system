import React from 'react'
import './Header.css'
import {NavLink} from 'react-router-dom';
import {Button,makeStyles} from '@material-ui/core';
import ShowContext from '../Context';
import MpImage from '../images/meklit.png'

const useStyle=makeStyles({
    navbarbutton:{
        fontWeight:"bold"
    },
})

export default function Header() {
    const showContext =React.useContext(ShowContext)
    React.useEffect(()=>{
        window.addEventListener('scroll',function(){
            var header=document.getElementsByClassName("header");
            header[0].classList.toggle('sticky',window.scrollY>0);
        });
    })
    const styles=useStyle();
    return (
            <div className="header">
                <div className="Logo">
                    <img src={MpImage} alt="" height="60px"/>
                </div>
                <ul>
                    <li><NavLink to="/"><Button variant="outlined" color="primary" className={styles.navbarbutton} >Home</Button></NavLink></li>
                    <li><NavLink to="/rooms"><Button variant="outlined" color="primary" className={styles.navbarbutton}>Rooms</Button></NavLink></li>
                    <li><NavLink to="/contact"><Button variant="outlined" color="primary" className={styles.navbarbutton}>contact</Button></NavLink></li>
                    <li><NavLink to="/about"><Button variant="outlined" color="primary" className={styles.navbarbutton}>About</Button></NavLink></li>
                    <li><NavLink to="/location"><Button variant="outlined" color="primary" className={styles.navbarbutton}>Location</Button></NavLink></li>
                    <li><NavLink to="/login"><Button variant="outlined" color="primary" className={styles.navbarbutton}>Login</Button></NavLink></li>
                </ul>
                <div style={{zIndex:20000}} className="header-menu" onClick={()=>{
                    showContext.setSideToggle(!showContext.sideToggle)
                }}>
                    <div>M</div>
                    <div>P</div>
                    <div></div>
                </div>
            </div>
    )
}
