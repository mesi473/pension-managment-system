import React from 'react'
import {makeStyles,Container,Grid,CardActionArea,
    CardMedia,CardContent,Typography,Button,
    Card,CardActions} from '@material-ui/core'
import staticImage1 from '../images/room-5.jpeg';
import staticImage2 from '../images/room-6.jpeg';
import staticImage3 from '../images/room-8.jpeg';
import BookRoom from './BookRoom';

import './room.css'


const useStyles=makeStyles({
    root: {
        maxWidth: 345,
        '&:hover':{
          transform:"scale(1.01)",
        }
      },
      media: {
        height: 300,
        '&:hover':{
          transform:"scale(1.1)",
          transition:"1s"
        },
      },
      
})
export default function Rooms() {
    const classes=useStyles();
    const [open,setOpen]=React.useState(false);
    return (
        <div>
          <div style={{
            marginTop:"100px"
          }}>
            <Container>
              <Grid container spacing={3} >
                <Grid item={true} xm={12} sm={4}>
                  <Card className={classes.root} elevation={5}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={staticImage1}
                        title="room 1"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          sweet room
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Up to 35% savings on Club
                        rooms and Suites
                        Luxaries condition
                        3 Adults & 2 Children size
                        Sea view side
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button
                      onClick={()=>{
                        console.log("yes")
                        setOpen(true);
                      }}
                       size="large" color="primary" variant="outlined" fullWidth className={classes.bookButton}>
                        Book now
                      </Button>
                      {open?<BookRoom open={open} setOpen={setOpen}/>:null}
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item={true} xm={12} sm={4}>
                <Card className={classes.root} elevation={5}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={staticImage2}
                        title="room 2"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          sweet room
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Up to 35% savings on Club
                        rooms and Suites
                        Luxaries condition
                        3 Adults & 2 Children size
                        Sea view side
  
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button 
                      onClick={()=>{
                        console.log("yes")
                        setOpen(true);
                      }}
                      size="large" color="primary" variant="outlined" fullWidth className={classes.bookButton}>
                        Book now
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item={true} xm={12} sm={4}>
                <Card className={classes.root} elevation={5}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={staticImage3}
                        title="room 3"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          sweet room
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Up to 35% savings on Club
                        rooms and Suites
                        Luxaries condition
                        3 Adults & 2 Children size
                        Sea view side
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button
                      onClick={()=>{
                        console.log("yes")
                        setOpen(true);
                      }}
                       size="large" color="primary" variant="outlined" fullWidth className={classes.bookButton}>
                        Book now
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
            </Grid>
            </Container>
          </div>
        </div>
    )
}
