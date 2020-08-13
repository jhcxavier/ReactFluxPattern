import React, { useState, useContext } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';

const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',


        },
    },
    margin: {
        margin: theme.spacing(1),
    },
}));

const Dashboard = () => {
    const classes = useStyles();
    const [search, setSearch] = useState("")
    return (
        <Container component="main" className="text-center">
            {/* <div className="container"> */}
            <h1>Hello Dashboard</h1>
            <form className={classes.root} noValidate autoComplete="off">
                <FormControl className={classes.margin}>
                    <InputLabel htmlFor="demo-customized-select-native">Search By</InputLabel>
                    <NativeSelect
                        id="demo-customized-select-native"
                        value={null}
                        onChange={(e) => { setSearch(e.target.value) }}
                        input={<BootstrapInput />}
                    >
                        <option aria-label="None" value="" />
                        <option value={10}>Email</option>
                        <option value={20}>Phone</option>
                        <option value={30}>Last Name</option>
                    </NativeSelect>
                </FormControl>
                <TextField id="standard-basic" label="Standard" />
                <TextField id="filled-basic" label="Filled" variant="filled" />
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />

            </form>
            {/* </div> */}
        </Container>
    )
}
export default Dashboard; 