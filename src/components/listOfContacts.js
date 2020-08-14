import React from "react";

const ListOfContacts = () => {
    const today = new Date();
    // let time = today.getMonth + "/" + today.getDay + "/" + today.getFullYear + " " + today.getHours() + ":" + today.getMinutes()
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

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

                    <tr>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>{date}</td>
                        <td>

                            <i id='tooltip' className="fas fa-edit p-2"></i>

                            <i className="fas fa-users-cog p-2"></i>

                            <i className="fas fa-file-download p-2"></i>


                            <i className="far fa-trash-alt p-2" ></i>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}
export default ListOfContacts;