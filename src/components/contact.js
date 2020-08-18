import React, { useContext, useState } from "react";
import { Context } from '../store/appContext';

const Contact = ({ data }) => {
    // Enabling access to the actions in flux with useContext()
    const { actions } = useContext(Context)
    // Setting the state for an existing contact
    const [value, setValue] = useState({
        firstName: data.firstName,
        lastName: data.lastName,
        company: data.company,
        email: data.email,
        phone: data.phone,

    })
    // if the value is set to true the edit mode is enabled
    const [editContact, setEditContact] = useState(false)

    return (
        <>
            <tr>
                {/* of editContact is true we are going to render the input and button to save the updated contact */}
                {editContact ? (
                    <>
                        <td><input type="text" defaultValue={data.firstName} onChange={
                            (e) => { setValue({ ...value, firstName: e.target.value }) }} /></td>
                        <td><input type="text" defaultValue={data.lastName} onChange={
                            (e) => { setValue({ ...value, lastName: e.target.value }) }} /></td>
                        <td><input type="text" defaultValue={data.company} onChange={
                            (e) => { setValue({ ...value, company: e.target.value }) }} /></td>
                        <td><input type="text" defaultValue={data.email} onChange={
                            (e) => { setValue({ ...value, email: e.target.value }) }} /></td>
                        <td><input type="text" defaultValue={data.phone} onChange={
                            (e) => { setValue({ ...value, phone: e.target.value }) }} /></td>
                        <td>{""}</td>
                        <td>
                            {/* Here we are passing to editContact function in flux the updated contact to the API */}
                            <i className="fas fa-check p-2" samesite={"None"} type="button" onClick={() => {
                                actions.editContact(value.firstName, value.lastName, value.company, value.email, value.phone, data._id)
                                // after sending we close the Edit mode
                                setEditContact(!editContact)
                            }}></i>
                            {/* Cancelling the edit mode without update */}
                            <i className="fas fa-times" type="button" onClick={() => {
                                setEditContact(!editContact)
                            }}></i>
                        </td>
                    </>
                ) : (
                        // This part of the ternary we are rendering the list of contact
                        <>
                            <td>{data.firstName}</td>
                            <td>{data.lastName}</td>
                            <td>{data.company}</td>
                            <td>{data.email}</td>
                            <td>{data.phone}</td>
                            <td>{data.create_date}</td><td>
                                {/* Activating the edit mode */}
                                <i id='tooltip' className="fas fa-edit p-2" samesite={"None"} type="button" onClick={() => {
                                    setEditContact(!editContact)
                                }}></i>
                                <i className="fas fa-users-cog p-2 text-secondary" samesite={"None"}></i>
                                <i className="fas fa-file-download p-2 text-secondary" samesite={"None"}></i>
                                {/* Delete a contact */}
                                <i className="far fa-trash-alt p-2" samesite={"None"} type="button" onClick={() => {
                                    actions.deleteContact(data._id)
                                }}></i>
                            </td></>)}
            </tr>
        </>
    )
}
export default Contact;

