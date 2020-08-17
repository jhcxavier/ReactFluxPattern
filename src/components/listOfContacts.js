import React, { useContext, useEffect } from "react";
import { Context } from '../store/appContext';
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
                    {store.searchCriteria.type === "" ? store.contacts.map((contact) => (
                        <Contact key={contact._id} data={contact} />
                    )) : store.contacts.filter((contact) => {

                        let type = store.searchCriteria.type
                        let value = store.searchCriteria.valueType;

                        if (type == "email") {
                            return contact.email.includes(value);
                        } else if (type == "phone") {
                            return contact.phone == Number(value);
                        }
                        return true
                    }).map((contact) => (
                        <Contact key={contact._id} data={contact} />
                    ))}

                </tbody>
            </table>
        </div>
    )
}
export default ListOfContacts;