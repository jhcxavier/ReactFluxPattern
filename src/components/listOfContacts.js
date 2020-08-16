import React, { useContext, useState } from "react";
import { Context } from '../store/appContext';
import AddContact from "./addContact";
import Contact from "./contact";

const ListOfContacts = () => {
    const { store } = useContext(Context)
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
                    {store.contacts.map((contact, index) => (
                        <Contact key={index} data={contact} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default ListOfContacts;