import React from 'react'
import './footer.css'
import {Container,Grid,Typography,makeStyles,TextField,Button} from '@material-ui/core'
import {Link} from 'react-router-dom'
import TwiterIcon from '@material-ui/icons/Twitter';
import WhatAppIcon from '@material-ui/icons/WhatsApp';
import LinkedINIcon from '@material-ui/icons/LinkedIn';
import FbIcon from '@material-ui/icons/Facebook';
import Logoimage from '../images/31948847.jpg';
import SubmitIcon from '@material-ui/icons/Comment'


const useStyles=makeStyles({
    socialMediaIcons:{
        height:"30px",
        width:"30px",
        '&:hover':{
          color:"#785256",
        }
      },
    footerContainer:{
      paddingTop:"5%"
    }
})
export default function Footer() {
    const classes=useStyles();
    return (
        <div className="footer">
          <Container className={classes.footerContainer}>
            <Grid container spacing={6}>
              <Grid item={true} xs={12} sm={4}>
                <div style={{display:"flex",flexDirection:"column"}}>
                  <Typography color="primary" >Contact us</Typography>
                  <Typography color="primary" variant="overline">Tel</Typography>
                  <Typography color="primary">     +251917897592</Typography>
                  <Typography color="primary">     +251917897592</Typography>
                  <Typography color="primary" variant="overline">Gmail</Typography>
                  <Typography color="primary" variant="overline">meseretkifle2@gmail.com</Typography>
                </div>
              </Grid>
              <Grid item={true} xs={12} sm={4}>
                <img src={Logoimage} alt="Logo" 
                style={{marginLeft:"35%"}}
                width="100px" height="100px"/>
              </Grid>
              <Grid item={true} xs={12} sm={4}>
                  <Typography color="primary" style={{display:"flex",alignItems:"center"}}>Comment</Typography>
                  <TextField label="comment" size="medium" variant="outlined" color="primary" style={{
                  borderRadius:20}}/>
                    <Button style={{marginTop:"15px"}} size="small" color="primary" variant="outlined"  className={classes.bookButton}>
                        add<SubmitIcon/>
                    </Button>
              </Grid>
            </Grid>
            <hr/>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
              <Link className={classes.socialMediaIcons} to="https://www.facebook.com/meklitPension"><FbIcon /></Link>
              <Link className={classes.socialMediaIcons} to="https://www.whatapp.com/meklitPension"><WhatAppIcon/></Link>
              <Link className={classes.socialMediaIcons} to="https://www.twiter.com/meklitPension"><TwiterIcon/></Link>
              <Link className={classes.socialMediaIcons} to="https://www.linkedin.com/meklitPension"><LinkedINIcon/></Link>
            </div>
          </Container>
        </div>
    )
}
