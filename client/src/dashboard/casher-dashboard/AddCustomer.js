import React from 'react'
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { Button, InputLabel, Input, Typography, TextField, IconButton, Radio, FormControlLabel, FormLabel, RadioGroup, Grid, FormControl } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';
import DateFnsUtils from '@date-io/date-fns';
import {useDispatch,useSelector} from 'react-redux'
import {addCustomer,featchCustomer} from '../../redux/Action';
import {Alert} from '@material-ui/lab';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import 'date-fns';

export default function AddCustomer() {
    const success=useSelector((state)=>state.addCustomer.customer.success);
    const errors=useSelector((state)=>state.addCustomer.customer.error);
    const dispatch=useDispatch();
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
        setState({date:date})
    };
    const [state, setState] = React.useState({
        phoneNumber: '',
        id: '',
        firstName: '',
        lastName: '',
        country: '',
        provinance: '',
        street: '',
        zone: '',
        wereda: '',
        idImage: '',
        houseNumber: '',
        gender: 'male',
        roomNumber:'',
        date:Date.now()
    })
    function clearAll(){
        setState({
            phoneNumber: '',
            id: '',
            firstName: '',
            lastName: '',
            country: '',
            provinance: '',
            street: '',
            zone: '',
            wereda: '',
            idImage: '',
            houseNumber: '',
            gender: 'male',
            roomNumber:'',
            date:Date.now()
        })
    }
    return (
        <div style={{
            marginTop: "10px",
            background: "#ffffff",
            borderRadius: "20px"
        }}>
            <div style={{ display: "flex" }}>
                <div style={{ flexGrow: 1 }}>
                    <AddIcon />
                    <Typography>Customer</Typography>
                </div>
            </div>
            {errors.map((error,index)=>(
                    <Alert severity="error" variant="outlined" key={index} >{error}</Alert>
                ))}
            {success?<Alert variant="outlined">customer successfuly added</Alert>:null}
            <hr />
            <Grid container spacing={2} className="add-new-employee">
                <Grid item sm={6} >
                    <TextField value={state.firstName}
                    onChange={(e)=>{setState({...state,firstName:e.target.value})}}
                     style={{ margin: "2px" }} name="first name" variant="outlined" label="First Name" fullWidth />
                    <TextField value={state.lastName}
                    onChange={(e)=>{setState({...state,lastName:e.target.value})}}
                     style={{ margin: "2px" }} name="last name" variant="outlined" label="last Name" fullWidth />
                    <TextField 
                        onChange={(e)=>{setState({...state,roomNumber:e.target.value})}}
                        fullWidth variant="outlined"
                        label="room number"
                        style={{ marginTop: "8px" ,marginBottom: "8px"}}
                        value={state.roomNumber}
                        name="numberformat"
                        id="formatted-numberformat-input"
                        InputProps={{
                            inputComponent: NumberFormatCustom,
                        }}
                    />
                    <TextField 
                        onChange={(e)=>{setState({...state,id:e.target.value})}}
                        fullWidth variant="outlined"
                        label="ID number"
                        style={{ marginTop: "8px" ,marginBottom: "8px"}}
                        value={state.id}
                        name="numberformat"
                        id="formatted-numberformat-input"
                        InputProps={{
                            inputComponent: NumberFormatCustom,
                        }}
                    />
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker fullWidth variant="outlined"
                            disableToolbar
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Date picker inline"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'date',
                            }}
                        />
                    </MuiPickersUtilsProvider>
                    <TextField fullWidth variant="outlined"
                        onChange={(e)=>{setState({...state,houseNumber:e.target.value})}}
                        label="House number"
                        style={{ margin: "8px" }}
                        value={state.houseNumber}
                        name="numberformat"
                        id="formatted-numberformat-input"
                        InputProps={{
                            inputComponent: NumberFormatCustom,
                        }}
                    />
                </Grid>
                <Grid item sm={6}>
                    <TextField value={state.country}
                    onChange={(e)=>{setState({...state,country:e.target.value})}}
                     style={{ margin: "2px" }} name="country" variant="outlined" label="country" fullWidth />
                    <TextField value={state.provinance}
                    onChange={(e)=>{setState({...state,provinance:e.target.value})}}
                    style={{ margin: "2px" }} name="Provinance" variant="outlined" label="Provinance" fullWidth />
                    <TextField value={state.street}
                    onChange={(e)=>{setState({...state,street:e.target.value})}}
                    style={{ margin: "2px" }} name="Street" variant="outlined" label="Street" fullWidth />
                    <TextField value={state.zone}
                    onChange={(e)=>{setState({...state,zone:e.target.value})}}
                    style={{ margin: "2px" }} name="Zone" variant="outlined" label="Zone" fullWidth />
                    <TextField value={state.wereda}
                    onChange={(e)=>{setState({...state,wereda:e.target.value})}}
                    style={{ margin: "2px" }} name="wereda" variant="outlined" label="wereda" fullWidth />
                    <FormControl fullWidth>
                        <InputLabel htmlFor="formatted-text-mask-input">phone number</InputLabel>
                        <Input fullWidth 
                            value={state.phoneNumber}
                            onChange={(e)=>{setState({...state,phoneNumber:e.target.value})}}
                            name="textmask"
                            id="formatted-text-mask-input"
                            inputComponent={TextMaskCustom}
                        />
                    </FormControl>
                    <FormControl >
                        <FormLabel>Gender</FormLabel>
                        <RadioGroup row={true}  
                        value={state.gender}
                        onChange={(e)=>{setState({...state,gender:e.target.value})}}
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                    </FormControl>
                    <label>Image/Copy of ID Card</label>
                    <input
                        style={{display:"none"}}
                        accept="image/*"
                        id="image"
                        onChange={(e) => {
                            setState({...state, idImage: e.target.files[0] })
                        }}
                        type="file"
                    />
                    <label htmlFor="image">
                        <IconButton color="primary" aria-label="upload picture" component="span">
                            <PhotoCamera />
                        </IconButton>
                    </label>
                    <label>{state.idImage?state.idImage.name:""}</label>
                </Grid>
            </Grid>
            <Grid container>
                <div style={{display:"flex",justifyContent:"center",alignItems:'center',textAlign:"center"}}>
                    <Button variant="contained" size="large" color="primary"
                        onClick={() => {
                            const formData=new FormData();
                            formData.append('Image',state.idImage);
                            formData.append('firstName',state.firstName)
                            formData.append("phoneNumber",state.phoneNumber)
                            formData.append("id",state.id)
                            formData.append("lastName",state.lastName)
                            formData.append("country",state.country)
                            formData.append("provinance",state.provinance)
                            formData.append("street",state.street)
                            formData.append("zone",state.zone)
                            formData.append("wereda",state.wereda)
                            formData.append("houseNumber",state.houseNumber)
                            formData.append("gender",state.gender)
                            formData.append("date",state.date);
                            formData.append("roomNumber",state.roomNumber);                                                     
                            dispatch(addCustomer(formData));
                            clearAll();
                            dispatch(featchCustomer())
                        }}
                        style={{ margin: "1%" }}>Add</Button>
                    <Button variant="contained" size="large" color="secondary" onClick={clearAll} >Clear</Button>
                </div>
            </Grid>
        </div>
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