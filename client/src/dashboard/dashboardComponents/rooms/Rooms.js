import React from 'react';
import { Button, Dialog, DialogContent, Grid, DialogTitle, MenuItem, InputLabel, Select, FormControl, TextField, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import NumberFormat from 'react-number-format';
import ExitIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import { useDispatch, useSelector } from 'react-redux';
import { addRoom } from '../../../redux/Action';
import { Alert } from '@material-ui/lab'


export default function Rooms() {
    const [state, setState] = React.useState("Add");
    const [open, setOpen] = React.useState(false);
    function Choice() {
        switch (state) {
            case "Add":
                return <AddRoom />;
            case "Edit":
                return <EditRoom />;
            default:
                return <AddRoom />
        }
    }
    return (
        <div className="room-room">
            <div className="room-header">
                <Button
                    onClick={
                        () => setState("Add")
                    }
                    style={{ margin: "5px" }} variant="outlined">Add Room</Button>
                <Button
                    onClick={
                        () => setOpen(true)
                    }
                    style={{ margin: "5px" }} variant="outlined">Delete Room</Button>
                <Button
                    onClick={
                        () => setState("Edit")
                    }
                    style={{ margin: "5px" }} variant="outlined">Edit Room</Button>
            </div>
            <div>
                <DeleteRoom open={open} setOpen={setOpen}></DeleteRoom>
                {Choice()}
            </div>
        </div>
    )
}
function EditRoom() {
    const [values, setValues] = React.useState({
        textmask: '(1  )    -    ',
        numberformat: '',
    });

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };
    return (
        <div style={{
            marginTop: "10px",
            background: "#ffffff",
            borderRadius: "20px",
            width: "50%",
            padding: '5px',
            display: "flex",
            alignItems: "center",
            textAlign: "center"
        }}>
            <div style={{ display: "flex" }}>
                <div style={{ flexGrow: 1 }}>
                    <EditIcon />
                    <Typography>Edit Room</Typography>
                </div>
            </div>
            <hr />
            <Grid container spacing={2} style={{ width: "100%" }}>
                <Grid item sm={12} spacing={2}>
                    <FormControl fullWidth>
                        <InputLabel id="">Type of room</InputLabel>
                        <Select
                            labelId=""
                            id=""
                            value="Standard"
                            onChange={handleChange}
                            defaultValue="Standard"
                        >
                            <MenuItem value={10}>Standard</MenuItem>
                            <MenuItem value={20}>Family</MenuItem>
                            <MenuItem value={30}>Commen Shawer</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField fullWidth
                        label="how many rooms"
                        style={{ margin: "8px" }}
                        value={values.numberformat}
                        onChange={handleChange}
                        name="numberformat"
                        id="formatted-numberformat-input"
                        InputProps={{
                            inputComponent: NumberFormatCustom,
                        }}
                    />
                    <TextField fullWidth
                        label="cost of the room (in birr)"
                        style={{ margin: "8px" }}
                        value={values.numberformat}
                        onChange={handleChange}
                        name="numberformat"
                        id="formatted-numberformat-input"
                        InputProps={{
                            inputComponent: NumberFormatCustom,
                        }}
                    />
                    <Button variant="contained" color="primary"
                        onClick={() => {
                        }}
                        style={{ margin: "1%" }} fullWidth>Add</Button>
                    <Button style={{ margin: "1%" }} fullWidth variant="contained" color="secondary" onClick={() => { }} >Clear All</Button>
                </Grid>
            </Grid>
        </div>
    )

}
function DeleteRoom(props) {
    return (
        <Dialog open={props.open} maxWidth="md">
            <DialogTitle>
                <div style={{ display: "flex" }}>
                    <div style={{ flexGrow: 1 }}>
                        <DeleteIcon color="secondary" />
                        <Typography>Delete Room</Typography>
                    </div>
                    <ExitIcon color="secondary" onClick={() => { props.setOpen(false) }} style={{ width: "20px", hieght: "20px" }} />
                </div>
            </DialogTitle>
            <DialogContent>
                <Grid container spacing={2} >
                    <Grid item sm={12}  >
                        <TextField variant="outlined" label="room number" name="room number" fullWidth></TextField>
                        <Button fullWidth variant="contained" size="small" color="Secondary"
                            onClick={() => {
                            }}
                            style={{ margin: "1%" }}>Delete</Button>
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
    )
}
function AddRoom() {
    const [state, setState] = React.useState({
        typeOfRoom: '',
        howManyRoom: '',
        costOfRoom: ''
    });
    const dispatch = useDispatch();
    const success = useSelector((state) => state.addRoom.room.success);
    const errors = useSelector((state) => state.addRoom.room.error);
    return (
        <div>
            {errors.map((error, index) => (
                <Alert severity="error" variant="outlined" key={index} >{error}</Alert>
            ))}
            {success ? <Alert variant="outlined">expense successfuly added</Alert> : null}
                 
            <div style={{
                marginTop: "10px",
                background: "#ffffff",
                borderRadius: "20px",
                width: "50%",
                padding: '5px',
                display: "flex",
                alignItems: "center",
                textAlign: "center"
            }}>
                   
                <div style={{ display: "flex" }}>
                    <div style={{ flexGrow: 1 }}>
                        <AddIcon />
                        <Typography>New Room</Typography>
                    </div>
                </div>

                <hr />
                <Grid container spacing={2} style={{ width: "100%" }}>
                    <Grid item sm={12} >
                        <TextField style={{ margin: "8px" }} label="type of room" fullWidth value={state.typeOfRoom} onChange={(e) => {
                            setState({ ...state, typeOfRoom: e.target.value });
                        }}></TextField>
                        <TextField fullWidth
                            onChange={(e) => {
                                setState({ ...state, howManyRoom: e.target.value })
                            }}
                            label="how many rooms"
                            style={{ margin: "8px" }}
                            value={state.howManyRoom}
                            InputProps={{
                                inputComponent: NumberFormatCustom,
                            }}
                        />
                        <TextField fullWidth
                            onChange={(e) => {
                                setState({ ...state, costOfRoom: e.target.value });
                            }}
                            label="cost of the room (in birr)"
                            style={{ margin: "8px" }}
                            value={state.costOfRoom}
                            InputProps={{
                                inputComponent: NumberFormatCustom,
                            }}
                        />
                        <Button variant="contained" color="primary"
                            onClick={() => {
                                dispatch(addRoom(state))
                            }}
                            style={{ margin: "1%" }} fullWidth>Add</Button>
                        <Button style={{ margin: "1%" }} fullWidth variant="contained" color="secondary" onClick={() => { }} >Clear All</Button>
                    </Grid>
                </Grid>
            </div>
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