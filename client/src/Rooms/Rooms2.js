import React from 'react'
import {Grid,Button,makeStyles, Container} from '@material-ui/core';
import staticImage1 from '../images/room-5.jpeg';

const useStyles=makeStyles({
  bookButton:{
    '&:hover':{
      backgroundColor:"blue",
      color:"#ffffff"
    }
  },
})
export default function Rooms2() {
    const classes=useStyles();
    return (
        <div>
            <Container style={{
          marginTop:"200px"
        }}>
          <Grid container  className="container" spacing={4}>
            <Grid item={true} xm={12} sm={4}>
              <div className="card">
                  <div className="imgBx">
                      <img src={staticImage1} alt="rooms"/>
                  </div>
                  <div className="content">
                      <h2>sweet room</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus similique ipsum molestiae provident quidem, perferendis laudantium veniam tempora a. Molestiae maiores ducimus, blanditiis repellat cum ab porro inventore. Ut, iure.</p>
                      <Button size="large" color="primary" variant="outlined" fullWidth className={classes.bookButton}>
                      Book now
                      </Button>
                  </div>
              </div>
            </Grid>
            <Grid item={true} xm={12} sm={4}>
              <div className="card">
                  <div className="imgBx">
                      <img src={staticImage1} alt="rooms"/>
                  </div>
                  <div className="content">
                      <h2>sweet room</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus similique ipsum molestiae provident quidem, perferendis laudantium veniam tempora a. Molestiae maiores ducimus, blanditiis repellat cum ab porro inventore. Ut, iure.</p>
                      <Button size="large" color="primary" variant="outlined" fullWidth className={classes.bookButton}>
                      Book now
                      </Button>
                  </div>
              </div>
            </Grid> 
            <Grid item={true} xm={12} sm={4}>
              <div className="card">
                    <div className="imgBx">
                        <img src={staticImage1} alt="rooms"/>
                    </div>
                    <div className="content">
                        <h2>sweet room</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus similique ipsum molestiae provident quidem, perferendis laudantium veniam tempora a. Molestiae maiores ducimus, blanditiis repellat cum ab porro inventore. Ut, iure.</p>
                        <Button size="large" color="primary" variant="outlined" fullWidth className={classes.bookButton}>
                        Book now
                        </Button>
                    </div>
                </div>
            </Grid>
          </Grid>
        </Container>
        </div>
    )
}
