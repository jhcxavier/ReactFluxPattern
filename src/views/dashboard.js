import React, { useState, useContext } from 'react';
import { Context } from '../store/appContext';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import AddContact from '../components/addContact';
import ListOfContacts from '../components/listOfContacts';
import DashboardNav from '../components/dashboardNav';

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
            width: '20ch',
            // flexDirection: "row"
        },
    },
    margin: {
        marginLeft: theme.spacing(1),
    },
}));

const Dashboard = () => {
    const { store } = useContext(Context)
    const classes = useStyles();
    const [search, setSearch] = useState("")
    const [showAddContact, setShowAddContact] = useState(false)
    return (
        <>
            <Container component="main" className="text-center">

                <DashboardNav />
                <ListOfContacts />

            </Container>
        </>
    )
}
export default Dashboard; 