import React, { useContext } from "react";
import { Context } from '../store/appContext';

const ListOfContacts = () => {
    const { actions, store } = useContext(Context)
    const today = new Date();
    // let time = today.getMonth + "/" + today.getDay + "/" + today.getFullYear + " " + today.getHours() + ":" + today.getMinutes()
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    console.log(store.contacts)
    console.log("token", store.token)
    return (
        <div>
            <table className="table table-bordered mt-2 pt-5">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Company</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Created at</th>
                        <th scope="col">{' '}</th>
                    </tr>
                </thead>

                <tbody className="tbody-dark">
                    {store.contacts.map((contact, index) => {
                        return (
                            <tr key={index}>
                                <td>{contact.firstName}</td>
                                <td>{contact.lastName}</td>
                                <td>{contact.company}</td>
                                <td>{contact.email}</td>
                                <td>{contact.phone}</td>
                                <td>{contact.create_date}</td>
                                <td>
                                    <i id='tooltip' className="fas fa-edit p-2" SameSite={"None"}></i>
                                    <i className="fas fa-users-cog p-2" SameSite={"None"}></i>
                                    <i className="fas fa-file-download p-2" SameSite={"None"}></i>
                                    <i className="far fa-trash-alt p-2" SameSite={"None"}></i>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default ListOfContacts;