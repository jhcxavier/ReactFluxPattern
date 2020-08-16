import React, { useContext, useState } from "react";
import { Context } from '../store/appContext';

import AddContact from "./addContact";

const Contact = ({ data }) => {
    const { actions, store } = useContext(Context)
    const [value, setValue] = useState({
        firstName: data.firstName
    })
    const [editContact, setEditContact] = useState(false)

    return (

        <>
            <tr >
                {editContact ? (<><td><input type="text" value={data.firstName} onChange={(e) => { setValue({ ...value, firstName: e.target.value }) }} /></td>
                    <td><input type="text" value={data.lastName} onChange={(e) => { setValue({ ...value, lastName: e.target.value }) }} /></td>
                    {/* <td><input value={data.company} /></td>
                    <td><input value={data.email} /></td>
                    <td><input value={data.phone} /></td> */}
                    <td>{data.create_date}</td></>) :
                    (<><td>{data.firstName}</td>
                        <td>{data.lastName}</td>
                        <td>{data.company}</td>
                        <td>{data.email}</td>
                        <td>{data.phone}</td>
                        <td>{data.create_date}</td></>)}

                <td>
                    <i id='tooltip' className="fas fa-edit p-2" samesite={"None"} type="button" onClick={() => {
                        setEditContact(!editContact)
                    }}></i>
                    <i className="fas fa-users-cog p-2" samesite={"None"}></i>
                    <i className="fas fa-file-download p-2" samesite={"None"}></i>
                    <i className="far fa-trash-alt p-2" samesite={"None"} type="button"></i>
                </td>

            </tr>
        </>
    )
}
export default Contact;

