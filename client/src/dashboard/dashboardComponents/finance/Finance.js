import React from 'react';
import './finance.css';
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';
import {Button,TextField,Dialog,Grid,InputAdornment
    ,DialogContent,Typography,DialogTitle
} from '@material-ui/core';
import NumberFormat from 'react-number-format';
import ExitIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';
import MoreIcon from '@material-ui/icons/MoreHoriz';
import SearchIcon from '@material-ui/icons/Search';
import ArrowRight from '@material-ui/icons/ArrowRight';
import DateFnsUtils from '@date-io/date-fns';
import {useDispatch,useSelector} from 'react-redux';
import {addIncome,addExpense,getTotalExpenseIncome} from '../../../redux/Action';
import {Alert} from '@material-ui/lab'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import 'date-fns';


export default function Finance() {
      const [comptype,setComptype]=React.useState("ShowTotal");
      const [open,setOpen]=React.useState(false);
      const [open2,setOpen2]=React.useState(false);
      const dispatch=useDispatch();
      function Choice(){
          switch(comptype){
                case "ShowTotal":
                    return <ShowTotal/>
                default:
                    return <ShowTotal/>
          }
      }
    return (
        <div className="dashboard-employee">
            <div className="menu">
                <div onClick={()=>{
                    dispatch(getTotalExpenseIncome());
                    setOpen(true);
                }} className="number-of-emp">add daily income</div>
                <div onClick={async ()=>{
                    dispatch(getTotalExpenseIncome());
                    setOpen2(true);
                }}
                 className="status-of-emp">add daily expense</div>
                <div onClick={()=>{
                    dispatch(getTotalExpenseIncome());
                    setComptype("ShowTotal");
                }}
                 className="status-of-emp">show total income and expense</div>
            </div>
            <div className="mainArea">
                <AddIncome open={open} setOpen={setOpen}  />
                <AddExpense open={open2} setOpen={setOpen2} />
                {Choice()}
            </div>
        </div>
    )
}

function ShowTotal(){
    const totalExpense=useSelector(state=>state.getIncomeAndExpense.total.expense);
    const totalIncome=useSelector(state=>state.getIncomeAndExpense.total.income);
    const [open,setOpen]=React.useState(false);
    const [id,setId]=React.useState('');
    function TotalExpense(){
        let expense=0;
        for(let i=0;i<totalExpense.length;i++){
            expense=expense + parseFloat(totalExpense[i].amount);
        }
        return expense;
    }
    function TotalIncome(){
        let income=0;
        for(let i=0;i<totalIncome.length;i++){
            income=income + parseFloat(totalIncome[i].Standard)*150 + parseFloat(totalIncome[i].Family)*300 + parseFloat(totalIncome[i].Commen)*120;
        }
        return income;
    }
    function subIncome(i){
        let income=0;
        income=parseFloat(totalIncome[i].Standard)*150 + parseFloat(totalIncome[i].Family)*300 + parseFloat(totalIncome[i].Commen)*120; 
        return income;
    }
    function ShowAll(){
        return(
            <Dialog open={open}  style={{}}>
            <DialogTitle>
                <div >
                    <Button  color="secondary" onClick={() => {setOpen(false); }}>
                        <ExitIcon />
                    </Button>
                </div>
            </DialogTitle>
            <DialogContent >
                <div >
                {id==="income"?
                <div className="card-body">
                        <h3>Income</h3>
                        <table width="100%">
                            <thead>
                                <tr>
                                    <td>number of standard room</td>
                                    <td>number of family room </td>
                                    <td>number of commen shawer room</td>
                                    <td>date of income</td>
                                    <td>sub total</td>
                                    <td>total income</td>
                                </tr>
                            </thead>
                            <tbody>
                                {totalIncome.map((income,index)=>(
                                    <tr key={index}>
                                        <td>{income.Standard}</td>
                                        <td>{income.Family}</td>
                                        <td>{income.Commen}</td>
                                        <td>{income.date}</td>
                                        <td>$${subIncome(index)}</td>
                                        {index===0?
                                            <td>${TotalIncome()}</td>
                                        :<td></td>}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                :null}
                </div>
                <div >
                {id==="expense"?
                <div className="card-body">
                        <h3>Expense</h3>
                        <table width="100%">
                            <thead>
                                <tr>
                                    <td>purpose</td>
                                    <td>amount</td>
                                    <td>date of expense</td>
                                    <td>total expense</td>
                                </tr>
                            </thead>
                            <tbody>
                                {totalExpense.map((expense,index)=>(
                                    <tr key={index}>
                                        <td>{expense.purpose}</td>
                                        <td>{expense.amount}</td>
                                        <td>{expense.date}</td>
                                        {index===0?<td>${TotalExpense()}</td>:<td></td>}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                :null}
                </div>
            </DialogContent>
        </Dialog>
        )
    }
    return(
        <div>
            {ShowAll()}
            <div className="total-employee">
                <div className="card">
                    <div className="card-header">
                        <h2>Finance</h2>
                        <TextField
                        size="small"
                        label="search"
                        InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon/>
                            </InputAdornment>
                        ),
                        }}
                        >
                        <span><ArrowRight/></span></TextField>
                    </div>
                    <div className="card-body">
                        <h3>Income</h3>
                        <table width="100%">
                            <thead>
                                <tr>
                                    <td>number of standard room</td>
                                    <td>number of family room </td>
                                    <td>number of commen shawer room</td>
                                    <td>date of income</td>
                                    <td>sub total</td>
                                    <td>total income</td>
                                    <td>
                                        <span className="status"><MoreIcon
                                            onClick={async ()=>{await setId("income");setOpen(true);}}
                                        /></span>
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                {totalIncome.map((income,index)=>(
                                    <tr key={index}>
                                        <td>{income.Standard}</td>
                                        <td>{income.Family}</td>
                                        <td>{income.Commen}</td>
                                        <td>{income.date}</td>
                                        <td>${subIncome(index)}</td>
                                        {index===0?
                                            <td>${TotalIncome()}</td>
                                        :<td></td>}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="card-body">
                        <h3>Expense</h3>
                        <table width="100%">
                            <thead>
                                <tr>
                                    <td>purpose</td>
                                    <td>amount</td>
                                    <td>date of expense</td>
                                    <td>total expense</td>
                                    <td>
                                        <span className="status"><MoreIcon
                                            onClick={async ()=>{await setId("expense");setOpen(true);}}
                                        /></span>
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                {totalExpense.map((expense,index)=>(
                                    <tr key={index}>
                                        <td>{expense.purpose}</td>
                                        <td>{expense.amount}</td>
                                        <td>{expense.date}</td>
                                        {index===0?<td>${TotalExpense()}</td>:<td></td>}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
function AddExpense(props){
    const [selectedDate, setSelectedDate] = React.useState(Date.now());

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
    const dispatch=useDispatch();
    const [state,setState]=React.useState({
        purpose:'',
        amount:'',
        date:selectedDate
    });
    function ClearAll(){
        setState({
            purpose:'',
            amount:'',
            data:Date.now(),
        })
    }
    const success=useSelector((state)=>state.addExpense.expense.success);
    const errors=useSelector((state)=>state.addExpense.expense.error);
    
    return(
        <Dialog open={props.open} maxWidth="md">
            <DialogTitle>
                <div style={{ display: "flex" }}>
                    <div style={{ flexGrow: 1 }}>
                        <AddIcon color="primary"/>
                        <Typography>Add Expense</Typography>
                    </div>
                    <ExitIcon color="secondary" onClick={() => {
                        props.setOpen(false) }} 
                        style={{width:"20px",hieght:"20px"}}/>
                </div>
                {errors.map((error,index)=>(
                    <Alert severity="error" variant="outlined" key={index} >{error}</Alert>
                ))}
                {success?<Alert variant="outlined">expense successfuly added</Alert>:null}
            </DialogTitle>
            <DialogContent>
                <Grid container  spacing={2} >
                    <Grid item sm={12}  >
                        <div style={{display:"flex",flexDirection:'column'}}>
                            <Typography>for what purpose</Typography>
                            <TextField
                            onChange={(e)=>{
                                setState({...state,purpose:e.target.value})
                            }}
                             variant="outlined" label="Purpose" fullWidth></TextField>
                            <TextField
                            label="how many (in birr)"
                            style={{margin:"8px"}}
                            value={state.amount}
                            onChange={(e)=>{
                                setState({...state,amount:e.target.value});
                            }}
                            name="numberformat"
                            id="formatted-numberformat-input"
                            InputProps={{
                                inputComponent: NumberFormatCustom,
                            }}
                            />
                        </div>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Date picker inline"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                            'aria-label': 'change date',
                            }}
                        />
                        </MuiPickersUtilsProvider>
                        <Button fullWidth variant="contained" size="small" color="primary"
                        onClick={async () => {
                            dispatch(addExpense(state));
                            ClearAll();
                        }}
                        style={{ marginBottom: "1%" }}>Add</Button>
                        <Button fullWidth variant="contained" size="small" color="secondary" onClick={ClearAll} >Clear All</Button>
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
    )
}
function AddIncome(props){
    const [selectedDate, setSelectedDate] = React.useState(Date.now());
    const success=useSelector((state)=>state.addIncome.income.success);
    const errors=useSelector((state)=>state.addIncome.income.error);

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };

    const dispatch=useDispatch();
    
    const [state,setState]=React.useState({
        Standard:'',
        Family:'',
        Commen:'',
        date:selectedDate
    });
    function ClearAll(){
        setState({
            Standard:'',
            Family:'',
            Commen:'',
            date:Date.now()
        })
    }
    
    
    return(
        <Dialog open={props.open} maxWidth="md">
            <DialogTitle>
                <div style={{ display: "flex" }}>
                    <div style={{ flexGrow: 1 }}>
                        <AddIcon color="primary"/>
                        <Typography>Add Income</Typography>
                    </div>
                    <ExitIcon color="secondary" onClick={async () => {
                        props.setOpen(false) }} 
                    style={{width:"20px",hieght:"20px"}}/>
                    
                </div>
                {errors.map((error,index)=>(
                    <Alert severity="error" variant="outlined" key={index} >{error}</Alert>
                ))}
                {success?<Alert variant="outlined">income successfuly added</Alert>:null}
            </DialogTitle>
            <DialogContent>
                <Grid container  spacing={2} >
                    <Grid item sm={12}  >
                        <div style={{display:"flex",flexDirection:'column'}}>
                            <Typography>Standard room</Typography>
                            <TextField
                            label="Room taken"
                            value={state.Standard}
                            onChange={(e)=>{
                                setState({...state,Standard:e.target.value})
                            }}
                            name="numberformat"
                            id="numberformat-input"
                            InputProps={{
                                inputComponent: NumberFormatCustom,
                            }}
                            />
                            <Typography>One Room :$150</Typography>
                        </div>
                        <div style={{display:"flex",flexDirection:'column'}}>
                            <Typography>Commen Shawer room</Typography>
                            <TextField
                            label="Room taken"
                            value={state.Commen}
                            onChange={(e)=>{
                                setState({...state,Commen:e.target.value})
                            }}
                            name="numberformat"
                            id="formatted-numberformat"
                            InputProps={{
                                inputComponent: NumberFormatCustom,
                            }}
                            />
                            <Typography>One Room :$120</Typography>
                        </div>
                        <div style={{display:"flex",flexDirection:'column'}}>
                            <Typography>family Rooms</Typography>
                            <TextField
                            label="Room taken"
                            value={state.Family}
                            onChange={(e)=>{
                                setState({...state,Family:e.target.value})
                            }}
                            name="numberformat"
                            id="formatted"
                            InputProps={{
                                inputComponent: NumberFormatCustom,
                            }}
                            />
                            <Typography>One Room :$300</Typography>
                        </div>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker"
                            label="Date picker inline"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                            'aria-label': 'change date',
                            }}
                        />
                        </MuiPickersUtilsProvider>
                        <Button fullWidth variant="contained" size="small" color="primary"
                                onClick={async () => {
                                    await dispatch(addIncome(state))
                                    ClearAll()
                                }}
                                style={{ marginBottom: "1%" }}>Add</Button>
                        <Button fullWidth variant="contained" size="small" color="secondary" onClick={ClearAll} >Clear All</Button>
                     </Grid>
                </Grid>
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
  
  NumberFormatCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };