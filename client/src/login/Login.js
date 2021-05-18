import React from 'react';
import {
    TextField, makeStyles, Button, OutlinedInput, IconButton,
    FormControl, InputAdornment, InputLabel, MenuItem, Select,CircularProgress
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import './login.css';
import { useDispatch, useSelector } from 'react-redux';
import LockImage from '../images/login.png';
import { loginAction,getProfile } from '../redux/Action';

const useStyles = makeStyles({
    textfield: {
        marginBottom: "2%"
    },
    loginButton: {
        marginTop: "2%"
    }
})

export default function Login({ match, history }) {
    const dispatch = useDispatch();
    const classes = useStyles();
    const canLogin = useSelector((state) => state.featchInfo.user.success);
    const error = useSelector((state) => state.featchInfo.user.error);
    const [userInfo, setUserInfo] = React.useState({
        userName: "",
        password: "",
        type: 'admin'
    });

    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
        isClicked: false
    });
    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <div className="login_window">
            <div className="login_page">
                <div style={{ display: "flex", flexDirection: 'row', justifyContent: "center" }}>
                    <h2 style={{color:"#fff",backgroundColor:"#3498eb",borderRadius:"5px"}}>Login</h2>
                    <FormControl style={{ marginLeft: '50px', width: "100px" }} >
                        <InputLabel id="type"></InputLabel>
                        <Select
                            labelId="type"
                            id="select"
                            value={userInfo.type}
                            onChange={(e) => {
                                setUserInfo({...userInfo,type:e.target.value});
                            }}
                        >
                            <MenuItem value="admin">Admin</MenuItem>
                            <MenuItem value="casher">Casher</MenuItem>
                        </Select>
                    </FormControl>
                    
                </div>
                <div style={{}}>
                    {error !== undefined ? error.map((error, index) => (
                        <Alert style={{margin:"2%"}} variant="outlined" severity="error"key={index}>{error}</Alert>
                    )) : null}
                </div>
                <TextField
                    label="username"
                    value={userInfo.userName}
                    className={classes.textfield} variant="outlined" fullWidth
                    onChange={(e) => {
                        setUserInfo({ ...userInfo, userName: e.target.value });
                    }} />
                <FormControl variant="outlined" fullWidth>
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={userInfo.password}
                        className={classes.textfield}
                        onChange={(e) => { setUserInfo({ ...userInfo, password: e.target.value }) }}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                        labelWidth={70}
                    />
                </FormControl>
                <Button 
                onClick={
                    async () => {
                        await dispatch(loginAction(userInfo))
                        await history.push(`/${userInfo.type}-dashboard/${userInfo.userName}`);
                        await dispatch(getProfile(userInfo.userName,userInfo.type));
                    }
                }
                className={classes.loginButton}
                variant="contained" color="primary"
                fullWidth>
                Login{values.isClicked && !canLogin?<CircularProgress color="Secondary"/>:null}
                </Button>
            </div>
            <div className="lock_image">
                <img src={LockImage} alt="lock" />
            </div>
        </div>
    )
}
