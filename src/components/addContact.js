import React, { useState } from "react";

const AddContact = () => {
    const [value, setValue] = useState()
    return (
        <div>
            <div>
                Add new Contact
            </div>
            <form className="container border mt-2">
                <div className="row">
                    <div className="col m-2">
                        <input type="text" className="form-control" placeholder="First name" />
                    </div>
                    <div className="col m-2">
                        <input type="text" className="form-control" placeholder="Last name" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-5 m-2">
                        <input type="text" className="form-control" placeholder="Company" />
                    </div>
                    <div className="col m-2">
                        <input type="text" className="form-control" placeholder="Email" />
                    </div>
                    <div className="col m-2">
                        <input type="text" className="form-control" placeholder="Phone" />
                    </div>
                </div>
                <div className="row m-1 d-flex justify-content-end">
                    <button type="submit" className="btn btn-primary m-1">Submit</button>
                    <button type="submit" className="btn btn-primary m-1">Submit</button>
                </div>
            </form>
        </div>
    )
}
export default AddContact;