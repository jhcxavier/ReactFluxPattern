import React, { useState } from "react";

const AddContact = () => {
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
                    <button type="submit" className="btn btn-primary m-1" onClick={(e) => {
                        setValue("")
                        // e.preventDefault()
                    }}>Cancel</button>
                    <button type="submit" className="btn btn-primary m-1">Submit</button>
                </div>
            </form>
        </div>
    )
}
export default AddContact;