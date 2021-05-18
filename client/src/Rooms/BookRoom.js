import React from 'react'
import {Dialog,MenuItem
    ,DialogContent,DialogTitle,TextField,Button,Select,InputLabel,FormControl 
} from '@material-ui/core';
import ExitIcon from '@material-ui/icons/Close';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import {
    makeStyles,
  } from '@material-ui/core/styles';
import 'date-fns';
import {addBook} from '../redux/Action';
import {useDispatch,useSelector} from 'react-redux';
import {Alert} from '@material-ui/lab'
import CloseIcom from '@material-ui/icons/Close'
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';
import DateFnsUtils from '@date-io/date-fns';

const useStyles = makeStyles((theme) => ({
    margin: {
      marginBottom: "20px",
    },
    
  }));
export default function BookRoom(props) {
    const classes = useStyles();
    const [book,setBook]=React.useState({
      name:'',
      phoneNumber:'',
      typeOfRoom:'Standard',
      howMany:'',
      dateLeave:Date.now(),
      dateArrive:Date.now()
    });
    const dispatch=useDispatch();
    const errors=useSelector(state=>state.addBook.book.error);
    const success=useSelector(state=>state.addBook.book.success)
    return (
        <Dialog open={props.open} style={{width:"400px",height:"100%",marginLeft:"10px"}}>
            <DialogTitle>
                {errors.map((error,index)=>(
                <Alert style={{margin:"2%"}} severity="error"key={index}>{error}</Alert>
                ))}
                {success?<Alert >customer successfuly added</Alert>:null}
                <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                
                <div >
                    <Button  color="secondary" onClick={() => {props.setOpen(!props.open); }}>
                        <ExitIcon />
                    </Button>
                </div>
                
                </div>
                <hr/>
            </DialogTitle>
            <DialogContent >
                <TextField fullWidth
                value={book.name}
                onChange={(e)=>{setBook({...book,name:e.target.value})}}
                className={classes.margin}
                label="name"
                variant="outlined"
                />
                <TextField fullWidth
                value={book.phoneNumber}
                onChange={(e)=>{setBook({...book,phoneNumber:e.target.value})}}
                className={classes.margin}
                label="phone Number"
                variant="outlined"
                />
                <TextField fullWidth variant="outlined"
                    onChange={(e)=>{setBook({...book,howMany:e.target.value})}}
                    label="number of room"
                    className={classes.margin}
                    value={book.howMany}
                    name="numberformat"
                    InputProps={{
                        inputComponent: NumberFormatCustom,
                    }}
                />
                <FormControl className={classes.margin} >
                    <InputLabel id="type"></InputLabel>
                    <Select
                        labelId="type"
                        value={book.typeOfRoom}
                        onChange={(e) => {
                        setBook({...book,typeOfRoom:e.target.value})
                        }}
                    >
                        <MenuItem value="Standard">Standard</MenuItem>
                        <MenuItem value="Family">Family</MenuItem>
                        <MenuItem value="Commen shower">Commen shower</MenuItem>
                    </Select>
                </FormControl>
                <MuiPickersUtilsProvider utils={DateFnsUtils} style={{margin:"5px"}}>
                    <KeyboardDatePicker fullWidth variant="outlined"
                        disableToolbar
                        format="MM/dd/yyyy"
                        margin="normal"
                        label="Date of arrive"
                        value={book.dateArrive}
                        onChange={(date)=>setBook({...book,dateArrive:date})}
                        KeyboardButtonProps={{
                            'aria-label': 'date',
                        }}
                    />
                </MuiPickersUtilsProvider>
                <MuiPickersUtilsProvider utils={DateFnsUtils} style={{margin:"5px"}}>
                    <KeyboardDatePicker fullWidth variant="outlined"
                        disableToolbar
                        format="MM/dd/yyyy"
                        margin="normal"
                        label="Date of leave"
                        value={book.dateLeave}
                        onChange={(date)=>setBook({...book,dateLeave:date})}
                        KeyboardButtonProps={{
                            'aria-label': 'date',
                        }}
                    />
                </MuiPickersUtilsProvider>
                <Button fullWidth
                onClick={async ()=>{
                await dispatch(addBook(book));
                }} 
                size="large" color="primary" style={{marginTop:"2px"}} className={classes.margin} variant="contained" >Book</Button>
            </DialogContent>
        </Dialog>
    )
}
function TextMaskCustom(props) {
    const { inputRef, ...other } = props;
  
    return (
        <MaskedInput
            {...other}
            ref={(ref) => {
                inputRef(ref ? ref.inputElement : null);
            }}
            mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
            placeholderChar={'\u2000'}
            showMask
        />
    );
  }
  NumberFormatCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };
  TextMaskCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
  };
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