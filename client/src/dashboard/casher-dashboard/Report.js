import React from 'react'
import { Button, Grid, MenuItem, InputLabel, Select, FormControl, TextField, Typography,makeStyles } from '@material-ui/core';
import ReportIcon from '@material-ui/icons/Report';
import ReplayIcon from '@material-ui/icons/Replay';
import {useSelector, useDispatch} from 'react-redux';
import {sendMessage,getMessage} from '../../redux/Action'

const useStyles=makeStyles({
    margin:{
        margin:"2%"
    }
})

export default function Report() {
    const userName=useSelector(state=>state.featchInfo.user.userName);
    const [state,setState]=React.useState({
        cases:"permision",
        sender:userName,
        receiver:'Admin',
        message:''
    });
    const dispatch=useDispatch();
    const messages=useSelector(state=>state.getMessage.getmessages.message);
    const classes=useStyles();
    return (
        <div style={{display:'flex',flexDirection:"column",justifyContent:'space-between'}}>
            <div style={{
                display:"block",
                marginTop: "10px",
                background: "#ffffff",
                borderRadius: "20px",
                width: "30%",
                padding: '5px',
                alignItems: "center",
                textAlign: "center",
                position:'fixed',
                justifyContent:"center",
                alignSelf:"center"
            }}>
                <div style={{ display: "flex" }}>
                    <div style={{ flexGrow: 1 }}>
                        <ReportIcon />
                        <Typography>Report</Typography>
                    </div>
                </div>
                <hr />
                <Grid container spacing={2} style={{ width: "100%" }}>
                    <Grid item sm={12} >
                        <FormControl fullWidth className={classes.margin}>
                            <InputLabel >case</InputLabel>
                            <Select
                                value={state.cases}
                                onChange={(e)=>{
                                    setState({...state,cases:e.target.value})
                                }}
                            >
                                <MenuItem value="permision">Permission</MenuItem>
                                <MenuItem value="problem">problem</MenuItem>
                                <MenuItem value="other">other</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField fullWidth name="message" label="message" 
                            value={state.message}
                            multiline
                            className={classes.margin}
                            onChange={(e)=>{
                                setState({...state,message:e.target.value})
                            }}
                        />
                        <Button variant="contained"  color="primary" className={classes.margin}
                            onClick={async () => {
                                await dispatch(sendMessage(state));
                                setState({
                                    cases:"permision",
                                    sender:userName,
                                    receiver:'Admin',
                                    message:''
                                })
                                dispatch(getMessage(userName))
                            }}
                            style={{ margin: "1%" }} fullWidth>Send</Button>
                    </Grid>
                </Grid>
            </div>
            <div style={{marginTop:"25%"}}>
                <div>
                    <div style={{ flexGrow: 1 }}>
                        <Button onClick={()=>{dispatch(getMessage(userName))}}><ReplayIcon  /></Button>
                        <Typography>Messages</Typography>
                        <hr/>
                    </div>
                </div>
                <div >
                    {messages.map((message,index)=>(
                        <div key={index}>
                            <hr/>
                            <p>sender: {message.sender}</p>
                            <p>receiver: {message.receiver}</p>
                            <p>{message.message}</p>
                            <p>{message.date}</p>
                            <hr/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
