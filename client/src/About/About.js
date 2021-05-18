import React from 'react';
import {Container,Card,CardMedia,makeStyles,Grid} from '@material-ui/core'
import staticImage4 from '../images/defaultBcg.jpeg';
import staticImage5 from '../images/details-1.jpeg';

const useStyles=makeStyles({
    aboutimage1:{
    
        width:200,
        height:400,
        "&:hover":{
          transform:"scale(1.4)"
        },
        transition:"2s"
      },
      aboutCard1:{
        maxWidth:200,
        marginRight:20,
        
      },
      aboutCard2:{
        maxWidth:200,
        marginRight:40,
        fontFamily:"paragraphfont",
      },
      media5:{
        height: "400px",
        '&:hover':{
          transform:"scale(1.1)",
          transition:"1s"
        },
      },
})
export default function About() {

    const classes=useStyles();
    return (
        <div>
            <Container>
              <Grid container spacing={0}>
                <Grid item={true} xs={12} sm={2}>
                  <div style={{
                    marginTop:"50px",
                  }}>
                        <Card elevation={3} className={classes.aboutCard1}>
                          <CardMedia
                              className={classes.aboutimage1}
                              image={staticImage4}
                              title="sweet room"
                            />
                        </Card>
                  </div>
                </Grid>
                <Grid item={true} xs={12} sm={2}>
                  <div style={{
                    marginTop:"110px"
                  }}>
                    <Card elevation={3} className={classes.aboutCard2}>
                      <CardMedia
                          className={classes.aboutimage1}
                          image={staticImage5}
                          title="sweet room"
                        />
                    </Card>
                  </div>
                </Grid>
                <Grid item={true} xs={12} sm={8}>
                  <div style={{
                    fontFamily:"paragraphfont",
                    marginTop:"30%"
                  }}>
                    <p>
                            Up to 35% savings on Club
                          rooms and Suites
                          Luxaries condition
                          3 Adults & 2 Children size
                          Sea view side
                          Up to 35% savings on Club
                          rooms and Suites
                          Luxaries condition
                          3 Adults & 2 Children size
                          Sea view sideUp to 35% savings on Club
                          rooms and Suites
                          Luxaries condition
                          3 Adults & 2 Children size
                          Sea view sideUp to 35% savings on Club
                          rooms and Suites
                          Luxaries condition
                          3 Adults & 2 Children size
                          Sea view side
                    </p>
                  </div>
                </Grid>
              </Grid>
        </Container>
        <Container>
              <Grid container spacing={0}>
              <Grid item={true} xs={12} sm={8}>
                  <div style={{
                    fontFamily:"paragraphfont",
                    marginTop:"30%"
                  }}>
                    <p>
                            Up to 35% savings on Club
                          rooms and Suites
                          Luxaries condition
                          3 Adults & 2 Children size
                          Sea view side
                          Up to 35% savings on Club
                          rooms and Suites
                          Luxaries condition
                          3 Adults & 2 Children size
                          Sea view sideUp to 35% savings on Club
                          rooms and Suites
                          Luxaries condition
                          3 Adults & 2 Children size
                          Sea view sideUp to 35% savings on Club
                          rooms and Suites
                          Luxaries condition
                          3 Adults & 2 Children size
                          Sea view side
                    </p>
                  </div>
                </Grid>
                <Grid item={true} xs={12} sm={2}>
                  <div style={{
                    marginTop:"50px",
                  }}>
                        <Card elevation={3} className={classes.aboutCard1}>
                          <CardMedia
                              className={classes.aboutimage1}
                              image={staticImage4}
                              title="sweet room"
                            />
                        </Card>
                  </div>
                </Grid>
                <Grid item={true} xs={12} sm={2}>
                  <div style={{
                    marginTop:"110px"
                  }}>
                    <Card elevation={3} className={classes.aboutCard2}>
                      <CardMedia
                          className={classes.aboutimage1}
                          image={staticImage5}
                          title="sweet room"
                        />
                    </Card>
                  </div>
                </Grid>
                
              </Grid>
        </Container>
        
        </div>
    )
}
