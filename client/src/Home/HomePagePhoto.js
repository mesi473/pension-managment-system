import React from 'react';
import {Button,makeStyles} from '@material-ui/core'
import './HomePage.css';
import RoomIcon from '@material-ui/icons/RoomRounded';
import CoverImage from '../images//room-7.jpeg'
import BookRoom from './BookRoom';
const useStyles=makeStyles({
    bookARoomButton:{
        position: "fixed",
        top: "40%",
        left: "70%",
        borderColor: "blue",
        '&:hover': {
            backgroundColor:"blue",
            color:"#fff"
        },
        zIndex:300
    },
})

export default function HomePagePhoto() {
    const classes=useStyles();
    const [book,setBook]=React.useState(false);
    return (
        <div>
            <div className="banner">
                <img src={CoverImage} alt="background cover"/>
            </div>
            <Button variant="outlined" color="primary" className={classes.bookARoomButton}
            startIcon={<RoomIcon/>}
            id="button"
            onClick={()=>{
                setBook(!book);
            }}
            >Book A Room</Button>
            {book?<BookRoom setBook={setBook} book={book} htmlFor="button"/>:null}
        </div>
    )
}
