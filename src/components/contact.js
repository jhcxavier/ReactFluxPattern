import React, { useContext, useState } from "react";
import { Context } from '../store/appContext';

const Contact = ({ data }) => {
    const { actions } = useContext(Context)
    const [value, setValue] = useState({
        firstName: data.firstName,
        lastName: data.lastName,
        company: data.company,
        email: data.email,
        phone: data.phone,

    })
    const [editContact, setEditContact] = useState(false)

    return (
        <>
            <tr>
                {editContact ? (<><td><input type="text" defaultValue={data.firstName} onChange={(e) => { setValue({ ...value, firstName: e.target.value }) }} /></td>
                    <td><input type="text" defaultValue={data.lastName} onChange={(e) => { setValue({ ...value, lastName: e.target.value }) }} /></td>
                    <td><input type="text" defaultValue={data.company} onChange={(e) => { setValue({ ...value, company: e.target.value }) }} /></td>
                    <td><input type="text" defaultValue={data.email} onChange={(e) => { setValue({ ...value, email: e.target.value }) }} /></td>
                    <td><input type="text" defaultValue={data.phone} onChange={(e) => { setValue({ ...value, phone: e.target.value }) }} /></td>
                    <td>{""}</td>
                    <td>
                        <i className="fas fa-check p-2" samesite={"None"} type="button" onClick={() => {
                            actions.editContact(value.firstName, value.lastName, value.company, value.email, value.phone, data._id)
                            setEditContact(!editContact)
                        }}></i>
                        <i className="fas fa-times" type="button" onClick={() => {
                            setEditContact(!editContact)
                        }}></i>
                    </td></>) :
                    (<><td>{data.firstName}</td>
                        <td>{data.lastName}</td>
                        <td>{data.company}</td>
                        <td>{data.email}</td>
                        <td>{data.phone}</td>
                        <td>{data.create_date}</td><td>
                            <i id='tooltip' className="fas fa-edit p-2" samesite={"None"} type="button" onClick={() => {
                                setEditContact(!editContact)
                            }}></i>
                            <i className="fas fa-users-cog p-2" samesite={"None"}></i>
                            <i className="fas fa-file-download p-2" samesite={"None"}></i>
                            <i className="far fa-trash-alt p-2" samesite={"None"} type="button" onClick={() => {
                                actions.deleteContact(data._id)
                            }}></i>
                        </td></>)}
            </tr>
        </>
    )
}
export default Contact;

