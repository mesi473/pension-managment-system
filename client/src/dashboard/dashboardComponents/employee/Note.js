import React from 'react'
import {
    Button, TextField, Dialog, Radio, FormControlLabel,
    RadioGroup, FormLabel, makeStyles, FormControl, Grid,Container,Card
    , DialogContent, Typography, DialogTitle
} from '@material-ui/core';
import ExitIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add'
import { useDispatch, useSelector } from 'react-redux';
import { addNote,addVacancy ,getNoteAndVacancy} from '../../../redux/Action';
import {Alert} from '@material-ui/lab'
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
const useStyle = makeStyles({
    marginRight: {
        marginRight: "5px",
    },
    card:{
        width:"300px",
        height:"400px"
    }
})

export default function Note() {
    const [component, setComponent] = React.useState("Note");
    const [open, setOpen] = React.useState(false);
    const [open2,setOpen2]=React.useState(false);
    const classes=useStyle();
    const notes=useSelector(state=>state.getVacancyAndNote.getVN.notes)
    const vacancies=useSelector(state=>state.getVacancyAndNote.getVN.vacancies)
    const messages=useSelector(state=>state.getMessage.getmessages.message);
    function Choice() {
        switch (component) {
            case "Note":
                return <TakeNote open={open2} setOpen={setOpen2} />
            case "Vacancy":
                return <Vacancy open={open} setOpen={setOpen} />

            default:
                return null;
        }
    }
    return (
        <div className="note">
            <div className="note-field">
                <div style={{
                    padding: "3px",
                    marginTop: "20px",
                    marginLeft:"35%",
                    height: "50px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: 'center',
                }}>
                    <Button onClick={() =>{setOpen2(true); setComponent("Note")}} style={{ marginRight: "5px" }} variant='outlined' >take Note</Button>
                    <Button onClick={() => { setOpen(true); setComponent('Vacancy') }} style={{ marginRight: "5px" }} variant='outlined'>Write Vacancy</Button>
                </div>

            </div>
            {Choice()}
            <Container>
                <Grid container  spacing={4} style={{marginTop:"5px"}}>
                    <Grid item sm={4} lx={12}>
                        <Card className={classes.card}>
                            <h4>Notes</h4>
                            <hr></hr>
                            {notes.map((note,index)=>(
                                <div key={index}>
                                    <div>{note.note}</div>
                                    <div>{note.date}</div>
                                </div>
                            ))}
                        </Card>
                    </Grid>
                    <Grid item sm={4} lx={12}>
                        <Card className={classes.card}>
                            <h4>Vacancys</h4>
                            <hr></hr>
                            {vacancies.map((vacancy,index)=>(
                                <div key={index}>
                                    <hr></hr>
                                    <div>{vacancy.jobtitle}</div>
                                    <div>{vacancy.NumEmp}</div>
                                    <div>{vacancy.jobType}</div>
                                    <div>{vacancy.expriance}</div>
                                    <div>{vacancy.gender}</div>
                                    <div>{vacancy.date}</div>
                                    <hr></hr>
                                </div>
                            ))}
                        </Card>
                    </Grid>
                    <Grid item sm={4} lx={12}>
                        <Card className={classes.card}>
                            <h4>Message from Casher</h4>
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
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )

}
function TakeNote(props) {
    const styles = useStyle();
    const dispatch = useDispatch();
    const [state, setState] = React.useState({
        note:''
    });
    const errors=useSelector(state=>state.addNote.note.error);
    const success=useSelector(state=>state.addNote.note.success);
    
    return (
        <Dialog open={props.open} >
            {errors.map((error,index)=>(
                <Alert severity="error" variant="outlined" key={index} >{error}</Alert>
            ))}
            {success?<Alert variant="outlined">note successfuly added</Alert>:null}
            <hr />
            <DialogTitle>
                <div style={{ display: "flex" }}>
                    <div style={{ flexGrow: 1 }}>
                        <AddIcon />
                        <Typography>Note</Typography>
                    </div>
                    <Button color="secondary" onClick={() => { props.setOpen(false);dispatch(addNote(false)); }}>
                        <ExitIcon />
                    </Button>
                </div>
                
            </DialogTitle>
            <DialogContent>
                <div>
                    <TextField
                        value={state.note}
                        onChange={(e) => {
                            setState({note:e.target.value});
                        }}
                        color="primary" className={styles.marginRight} variant="outlined" size="small" />
                    <Button
                        onClick={async () => { await dispatch(addNote(state)); setState({note:''});dispatch(getNoteAndVacancy()); }}
                        variant="contained" color="primary" size="large">Take Note</Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}
function Vacancy(props) {
    const dispatch = useDispatch();
    const errors=useSelector(state=>state.addVacancy.vacancy.error);
    const success=useSelector(state=>state.addVacancy.vacancy.success);
    const [state,setState]=React.useState({
        jobtitle:'',
        NumEmp:'',
        jobType:'',
        expriance:'',
        gender:'',
    })
    return (
        <Dialog open={props.open} >
            <DialogTitle>
            {errors.map((error,index)=>(
                <Alert severity="error" variant="outlined" key={index} >{error}</Alert>
            ))}
            {success?<Alert variant="outlined">note successfuly added</Alert>:null}
                <div style={{ display: "flex" }}>
                    <div style={{ flexGrow: 1 }}>
                        <AddIcon />
                        <Typography> Write a vacancy letter</Typography>
                    </div>
                    <Button  color="secondary" onClick={() => { props.setOpen(false);dispatch(addVacancy(false)); }}>
                        <ExitIcon />
                    </Button>
                </div>
            </DialogTitle>
            <DialogContent>
                <hr/>
                <Grid container spacing={2} >
                    <Grid item sm={12}  >
                        <TextField
                        value={state.jobtitle}
                        onChange={(e)=>{
                            setState({...state,jobtitle:e.target.value})
                        }} 
                        name="job title" variant="outlined" label="job title" fullWidth />

                        <TextField fullWidth
                            label="how many employee"
                            style={{marginTop:'10px',marginBottom:"10px"}}
                            value={state.NumEmp}
                            onChange={(e)=>{
                                setState({...state,NumEmp:e.target.value})
                            }}
                            name="numberformat"
                            id="formatted"
                            InputProps={{
                                inputComponent: NumberFormatCustom,
                            }}
                            />
                        <FormControl >
                            <FormLabel>job type</FormLabel>
                            <RadioGroup row={true}
                            value={state.jobType}
                            onChange={(e)=>{
                                setState({...state,jobType:e.target.value})
                            }} 
                            >
                                <FormControlLabel value="contractual" control={<Radio />} label="contractual" />
                                <FormControlLabel value="permanent" control={<Radio />} label="permanent" />
                            </RadioGroup>
                        </FormControl>
                        <TextField
                        value={state.expriance}
                        onChange={(e)=>{
                            setState({...state,expriance:e.target.value})
                        }}  
                        name='expriance ' variant="outlined" label="expriance" fullWidth />
                        <FormControl >
                            <FormLabel>Gender</FormLabel>
                            <RadioGroup
                            value={state.gender}
                            onChange={(e)=>{
                                setState({...state,gender:e.target.value})
                            }}  
                            row={true}  >
                                <FormControlLabel value="female" control={<Radio />} label="Female only" />
                                <FormControlLabel value="male" control={<Radio />} label="Male only" />
                                <FormControlLabel value="Both" control={<Radio />} label="Both can be accepted" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                </Grid>
                <div  >
                    <Button variant="contained"  color="primary"
                        onClick={async () => {
                            await dispatch(addVacancy(state));
                            setState({
                                jobtitle:'',
                                NumEmp:'',
                                jobType:'',
                                expriance:'',
                                gender:'',
                            });
                            dispatch(getNoteAndVacancy());
                        }}
                        style={{ margin: "1%" }}>Add</Button>
                    <Button variant="contained" color="secondary">Clear All</Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}

function NumberFormatCustom(props) {
    const { inputRef, onChange, ...other } = props;
  
    return (
      <NumberFormat
        {...other}
        getInputRef={inputRef}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        thousandSeparator
        isNumericString
        prefix=""
      />
    );
  }
  
  NumberFormatCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };