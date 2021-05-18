import React from 'react'
import {
    Button, TextField, Radio, FormControlLabel,
    RadioGroup, FormLabel, FormControl, Grid, Typography, makeStyles
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add'
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import {useSelector,useDispatch} from 'react-redux';
import {addEmployee} from '../../../redux/Action';
import Alert from '@material-ui/lab/Alert'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    input: {
        display: 'none',
    },
}));

export default function NewEmployee() {
    const classes = useStyles();
    const dispatch=useDispatch();
    const employeeState=useSelector(state=>state.addEmployee.employee);
    
    const [employee, setEmployee] = React.useState({
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
        expriance: '',
        gender: 'male',
        BphoneNumber: '',
        BfirstName: '',
        BlastName: '',
        Bcountry: '',
        Bprovinance: '',
        Bstreet: '',
        Bzone: '',
        Bwereda: '',
        Bid:'',
        BidImage: '',
        BhouseNumber: '',
        Bgender: 'female',
        workingArea:'',
        salary:'',
        Education:'',
    })
    function clearAll(){
        setEmployee({
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
            expriance: '',
            gender: 'male',
            BphoneNumber: '',
            BfirstName: '',
            BlastName: '',
            Bcountry: '',
            Bprovinance: '',
            Bstreet: '',
            Bzone: '',
            Bwereda: '',
            Bid:'',
            BidImage: '',
            BhouseNumber: '',
            Bgender: 'female',
            workingArea:'',
            salary:'',
            Education:'',
        })
    }
    React.useEffect(()=>{
        if(employeeState.employeeSuccessfulyAdded){
            clearAll()
        }
    },[employeeState.employeeSuccessfulyAdded])
    return (
        <div style={{
            marginTop: "10px",
            background: "#ffffff",
            borderRadius: "20px"
        }}> 
            {
                employeeState.error.map((error,index)=>(
                    <Alert style={{margin:"2%"}} variant="outlined" severity="error" key={index}>{error}</Alert>
                ))
            }
            
            <div style={{ display: "flex" }}>
                <div style={{ flexGrow: 1 }}>
                    <AddIcon />
                    <Typography>new Employee</Typography>
                </div>
            </div>
            <hr />
            <Grid container spacing={2} className="add-new-employee">
                <Grid item xs={12} sm={6} >
                    <h2>personal information</h2>
                    <TextField variant="outlined" value={employee.firstName} onChange={(e) => {
                        setEmployee({...employee, firstName: e.target.value })
                    }} style={{ margin: "2px" }}   label="First name" fullWidth/>
                    <TextField value={employee.lastName} onChange={(e) => {
                        setEmployee({...employee, lastName: e.target.value })
                    }} style={{ margin: "2px" }} name="last name" variant="outlined" label="last Name" fullWidth />
                    <TextField fullWidth
                        variant="outlined"
                        label="id"
                        style={{ margin: "8px" }}
                        value={employee.id}
                        onChange={(e) => { setEmployee({...employee, id: e.target.value }) }}
                        name="numberformat"
                        id="formatted-numberformat"
                        InputProps={{
                            inputComponent: NumberFormatCustom,
                        }}
                    />
                    <TextField fullWidth variant="outlined"
                        label="house number"
                        style={{ margin: "8px" }}
                        value={employee.houseNumber}
                        onChange={(e) => { setEmployee({...employee, houseNumber: e.target.value }) }}
                        name="numberformat"
                        id="formatted-input"
                        InputProps={{
                            inputComponent: NumberFormatCustom,
                        }}
                    />
                    <TextField value={employee.country} onChange={(e) => {
                        setEmployee({...employee, country: e.target.value });
                    }} style={{ margin: "2px" }} name="country" variant="outlined" label="country" fullWidth />
                    <TextField value={employee.provinance} onChange={(e) => {
                        setEmployee({...employee, provinance: e.target.value });
                    }} style={{ margin: "2px" }} name="provinance" variant="outlined" label="provinance" fullWidth />
                    <TextField value={employee.zone} onChange={(e) => {
                        setEmployee({...employee, zone: e.target.value })
                    }} style={{ margin: "2px" }} name="zone" variant="outlined" label="zone" fullWidth />
                    <TextField value={employee.wereda} onChange={(e) => {
                        setEmployee({...employee, wereda: e.target.value })
                    }} style={{ margin: "2px" }} name="wereda" variant="outlined" label="wereda" fullWidth />
                    <TextField value={employee.street} onChange={(e) => {
                        setEmployee({...employee, street: e.target.value })
                    }} style={{ margin: "2px" }} name="street" variant="outlined" label="street" fullWidth />

                    <TextField value={employee.phoneNumber} onChange={(e) => {
                        setEmployee({...employee, phoneNumber: e.target.value })
                    }} style={{ margin: "2px" }} name="phone number" variant="outlined" label="phone number" fullWidth />
                    <TextField value={employee.expriance} onChange={(e) => {
                        setEmployee({...employee, expriance: e.target.value })
                    }} style={{ margin: "2px" }} name="expriance" variant="outlined" label="expriance" fullWidth />
                    
                    <TextField value={employee.workingArea} onChange={(e) => {
                        setEmployee({...employee, workingArea: e.target.value })
                    }} style={{ margin: "2px" }} name="workingArea" variant="outlined" label="workingArea" fullWidth />

                    <TextField value={employee.ducation} onChange={(e) => {
                        setEmployee({...employee, Education: e.target.value })
                    }} style={{ margin: "2px" }} name="Education" variant="outlined" label="Education" fullWidth />
                    <TextField fullWidth
                        variant="outlined"
                        label="salary"
                        style={{ margin: "8px" }}
                        value={employee.salary}
                        onChange={(e) => { setEmployee({...employee, salary: e.target.value }) }}
                        name="numberformat"
                        id="formatted-numberformat"
                        InputProps={{
                            inputComponent: NumberFormatCustom,
                        }}
                    />
                    <FormControl >
                        <FormLabel>Gender</FormLabel>
                        <RadioGroup row={true} aria-label="gender" value={employee.gender}  onChange={(e) => { setEmployee({...employee, gender: e.target.value }) }}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                    </FormControl>
                    <label>add Photo</label>
                    <input
                        accept="image/*"
                        className={classes.input}
                        id="icon-button"
                        onChange={(e) => {
                            setEmployee({...employee, idImage: e.target.files[0] })
                        }}
                        type="file"
                    />
                    <label htmlFor="icon-button">
                        <IconButton color="primary" aria-label="upload picture" component="span">
                            <PhotoCamera />
                        </IconButton>
                    </label>
                    <label>{employee.idImage.name}</label>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <h2>bonds man/woman information</h2>
                    <TextField value={employee.BfirstName} onChange={(e) => {
                        setEmployee({...employee, BfirstName: e.target.value })
                    }} style={{ margin: "2px" }} name="first name" variant="outlined" label="First Name" fullWidth />
                    <TextField value={employee.BlastName} onChange={(e) => {
                        setEmployee({...employee, BlastName: e.target.value })
                    }} style={{ margin: "2px" }} name="last name" variant="outlined" label="last Name" fullWidth />
                    <TextField fullWidth variant="outlined"
                        label="id"
                        style={{ margin: "8px" }}
                        value={employee.Bid}
                        onChange={(e) => { setEmployee({...employee, Bid: e.target.value }) }}
                        name="numberformat"
                        id="numberformat-input"
                        InputProps={{
                            inputComponent: NumberFormatCustom,
                        }}
                    />
                    <TextField fullWidth variant="outlined"
                        label="house number"
                        style={{ margin: "8px" }}
                        value={employee.BhouseNumber}
                        onChange={(e) => { setEmployee({...employee, BhouseNumber: e.target.value }) }}
                        name="numberformat"
                        id="formatted"
                        InputProps={{
                            inputComponent: NumberFormatCustom,
                        }}
                    />
                    <TextField value={employee.Bcountry} onChange={(e) => {
                        setEmployee({...employee, Bcountry: e.target.value });
                    }} style={{ margin: "2px" }} name="country" variant="outlined" label="country" fullWidth />
                    <TextField value={employee.Bpro} onChange={(e) => {
                        setEmployee({...employee, Bprovinance: e.target.value });
                    }} style={{ margin: "2px" }} name="provinance" variant="outlined" label="provinance" fullWidth />
                    <TextField value={employee.Bzone} onChange={(e) => {
                        setEmployee({...employee, Bzone: e.target.value })
                    }} style={{ margin: "2px" }} name="zone" variant="outlined" label="zone" fullWidth />
                    <TextField value={employee.Bwereda} onChange={(e) => {
                        setEmployee({...employee, Bwereda: e.target.value })
                    }} style={{ margin: "2px" }} name="wereda" variant="outlined" label="wereda" fullWidth />
                    <TextField value={employee.Bstreet} onChange={(e) => {
                        setEmployee({...employee, Bstreet: e.target.value })
                    }} style={{ margin: "2px" }} name="street" variant="outlined" label="street" fullWidth />

                    <TextField value={employee.BphoneNumber} onChange={(e) => {
                        setEmployee({...employee, BphoneNumber: e.target.value })
                    }} style={{ margin: "2px" }} name="phone number" variant="outlined" label="phone number" fullWidth />

                    <FormControl >
                        <FormLabel>Gender</FormLabel>
                        <RadioGroup row={true}  value={employee.Bgender} onChange={(e) => { setEmployee({...employee, Bgender: e.target.value }) }}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                    </FormControl>
                    <label>add Photo</label>
                    <input
                        accept="image/*"
                        className={classes.input}
                        id="icon"
                        // multiple
                        onChange={(e) => {
                            setEmployee({...employee, BidImage: e.target.files[0] })
                        }}
                        type="file"
                    />
                    <label htmlFor="icon">
                        <IconButton color="primary" aria-label="upload picture" component="span">
                            <PhotoCamera />
                        </IconButton>
                    </label>
                    <label>{employee.BidImage.name}</label>
                </Grid>
            </Grid>
            <Grid container>
                <div style={{display:"flex",justifyContent:"center",alignItems:'center',textAlign:"center"}}>
                    <Button variant="contained" size="large" color="primary"
                        onClick={() => {
                            const formData=new FormData();
                            formData.append('Image',employee.idImage);
                            formData.append('Image',employee.BidImage);
                            formData.append('firstName',employee.firstName)
                            formData.append("phoneNumber",employee.phoneNumber)
                            formData.append("id",employee.id)
                            formData.append("lastName",employee.lastName)
                            formData.append("country",employee.country)
                            formData.append("provinance",employee.provinance)
                            formData.append("street",employee.street)
                            formData.append("zone",employee.zone)
                            formData.append("wereda",employee.wereda)
                            formData.append("houseNumber",employee.houseNumber)
                            formData.append("expriance",employee.expriance)
                            formData.append("gender",employee.gender)
                            formData.append("BphoneNumber",employee.BphoneNumber)
                            formData.append("BfirstName",employee.BfirstName)
                            formData.append("BlastName",employee.BlastName)
                            formData.append("Bid",employee.Bid);
                            formData.append("Bcountry",employee.Bcountry)
                            formData.append("Bprovinance",employee.Bprovinance)
                            formData.append("Bstreet",employee.Bstreet)
                            formData.append("Bzone",employee.Bzone)
                            formData.append("Bwereda",employee.Bwereda)
                            formData.append("BhouseNumber",employee.BhouseNumber)
                            formData.append("Bgender",employee.Bgender);
                            formData.append("salary",employee.salary);
                            formData.append("education",employee.Education);
                            formData.append("workingArea",employee.workingArea);
                            
                            dispatch(addEmployee(formData));
                        }}
                        style={{ margin: "1%" }}>Add</Button>
                    <Button variant="contained" size="large" color="secondary" onClick={() => {clearAll() }} >Clear</Button>
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
            prefix="MP"
        />
    );
}

NumberFormatCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};
