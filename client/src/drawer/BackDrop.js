import React from 'react'
import './backdrop.css'
import ShowDrawer from '../Context';

export default function BackDrop() {
    const show=React.useContext(ShowDrawer);
    return (
        show.sideToggle&&<div className="backdrop">
            
        </div>
    )
}
