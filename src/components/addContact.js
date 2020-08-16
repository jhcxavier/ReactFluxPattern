import React, { useState, useContext } from "react";
import { Context } from '../store/appContext';
import PropTypes from "prop-types";


const AddContact = ({ closeAddContact }) => {
    const { actions, store } = useContext(Context)
    const [value, setValue] = useState({
        firstName: "",
        lastName: "",
        company: "",
        email: "",
        phone: ""
    })

    return (
        <div>
            <div>
                Add new Contact
            </div>
            <form className="container border mt-2">
                <div className="row">
                    <div className="col m-2">
                        <input type="text" className="form-control" placeholder="First name" onChange={(e) => setValue({ ...value, firstName: e.target.value })} />
                    </div>
                    <div className="col m-2">
                        <input type="text" className="form-control" placeholder="Last name" onChange={(e) => setValue({ ...value, lastName: e.target.value })} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-5 m-2">
                        <input type="text" className="form-control" placeholder="Company" onChange={(e) => setValue({ ...value, company: e.target.value })} />
                    </div>
                    <div className="col m-2">
                        <input type="text" className="form-control" placeholder="Email" onChange={(e) => setValue({ ...value, email: e.target.value })} />
                    </div>
                    <div className="col m-2">
                        <input type="text" className="form-control" placeholder="Phone" onChange={(e) => setValue({ ...value, phone: e.target.value })} />
                    </div>
                </div>
                <div className="row m-1 d-flex justify-content-end">
                    <button type="button" className="btn btn-primary m-1" onClick={(e) => {
                        setValue("")
                        closeAddContact();
                        // e.preventDefault()
                    }}>Cancel</button>
                    <button type="button" className="btn btn-primary m-1" onClick={() => {
                        console.log(value.firstName)
                        actions.addContact(value.firstName, value.lastName, value.company, value.email, value.phone)
                        closeAddContact()
                        // actions.getContacts(store.token)
                    }}>Submit</button>
                </div>
            </form>
        </div>
    )
}
export default AddContact;
AddContact.propType = {
    match: PropTypes.object
}