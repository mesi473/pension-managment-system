import React from 'react';
import Rooms1 from '../Rooms/Rooms';
import Rooms2 from '../Rooms/Rooms2';
import About from '../About/About';
import Footer from '../Footer/Footer';
import HomePagePhoto from '../Home/HomePagePhoto'
export default function Home() {
    return (
        <>
            <HomePagePhoto/>
            <Rooms1/>
            <About/>
            <Rooms2/>
            <Footer/>
        </>
    )
}
