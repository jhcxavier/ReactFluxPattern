import React, { useState, useContext } from 'react';
import { Context } from '../store/appContext';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
// import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
// import { Typography } from '@material-ui/core';
import AddContact from '../components/addContact';
// import ListOfContacts from '../components/listOfContacts';

// const BootstrapInput = withStyles((theme) => ({
//     root: {
//         'label + &': {
//             marginTop: theme.spacing(3),
//         },
//     },
//     input: {
//         borderRadius: 4,
//         position: 'relative',
//         backgroundColor: theme.palette.background.paper,
//         border: '1px solid #ced4da',
//         fontSize: 16,
//         padding: '10px 26px 10px 12px',
//         transition: theme.transitions.create(['border-color', 'box-shadow']),
//         // Use the system font instead of the default Roboto font.
//         fontFamily: [
//             '-apple-system',
//             'BlinkMacSystemFont',
//             '"Segoe UI"',
//             'Roboto',
//             '"Helvetica Neue"',
//             'Arial',
//             'sans-serif',
//             '"Apple Color Emoji"',
//             '"Segoe UI Emoji"',
//             '"Segoe UI Symbol"',
//         ].join(','),
//         '&:focus': {
//             borderRadius: 4,
//             borderColor: '#80bdff',
//             boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
//         },
//     },
// }))(InputBase);



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

const DashboardNav = () => {
    const classes = useStyles();
    const { store, actions } = useContext(Context)
    const [search, setSearch] = useState("")
    const [testEmail, setTestEmail] = useState([])
    const [inputSearch, setInputSearch] = useState("")
    const [showAddContact, setShowAddContact] = useState(false)


    if (search === "email") {
        let email = store.contacts.filter((contact) => {
            if (contact.email === inputSearch)
                return contact;
        })

    }

    console.log(testEmail)
    return (

        <>
            {/* <div className="container"> */}
            <h1>Hello Dashboard</h1>
            <form className={classes.root} noValidate autoComplete="off">

                <FormControl className={classes.margin, "mr-5"}>
                    <InputLabel id="demo-mutiple-name-label">Search By</InputLabel>

                    <NativeSelect
                        labelid="demo-mutiple-name-label"
                        id="demo-mutiple-name"
                        multiple
                        value={undefined}
                        onChange={(e) => { setSearch(e.target.value) }}
                    // input={<Input />}
                    // MenuProps={MenuProps}
                    >
                        <option aria-label="None" value="" />
                        <option value="email">Email</option>
                        <option value="phone">Phone</option>
                        <option value="lastName">Last Name</option>
                    </NativeSelect>
                </FormControl>
                <TextField id="standard-basic" label="Search" onChange={(e) => { setInputSearch(e.target.value) }} />
                <Button type="button" variant="outlined" color="primary" className="ml-5" onClick={() =>
                    actions.searchByEmail(inputSearch)
                }>
                    Search
                </Button>
                <Button variant="outlined" color="primary" className="ml-5" onClick={() => {
                    setShowAddContact(!showAddContact)
                }}>
                    Add Contact
                </Button>
            </form>
            <div>{showAddContact && <AddContact closeAddContact={() => {
                setShowAddContact(false)
            }} />}</div>
        </>
    )
}
export default DashboardNav; 