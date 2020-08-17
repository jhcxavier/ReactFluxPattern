import axios from 'axios';

const getState = ({ getStore, getActions, setStore, setHistory }) => {
    return {
        store: {
            contacts: [],
            token: null,
            currentUser: null,
            searchCriteria: { type: "", valueType: "" }

        },
        actions: {
            login: (email, password) => {
                axios.post("http://localhost:4002/login", {
                    email: email,
                    password: password

                }).then((response) => {
                    if (response.status === 200) return response.data;
                    alert("User not found")
                    throw Error("User not found")

                }).then(data => {
                    setStore({ token: data.token, currentUser: data.username })

                }).then(() => {
                    getActions().getContacts(getStore().token)

                }).catch((error) => {
                    console.error(error)
                })
            },
            getContacts: (token) => {
                let headers = null;
                if (token) {
                    console.log("token2 ", token)
                    headers = {
                        "Authorization": `JWT ${token}`,
                        "Access": "application/json",
                        "Content-Type": "application/json",
                    }
                } else if (getStore().token) {
                    console.log("token3", getStore().token)
                    headers = {
                        "Authorization": `JWT ${getStore().token}`,
                        "Content-Type": "application/json"
                    }
                }
                axios.get("http://localhost:4002/contacts", {
                    headers
                })
                    .then(response => response.data)
                    .then((data) => {
                        let arr = data.slice().reverse()
                        setStore({ contacts: arr })
                        console.log("contacts", getStore().contacts)
                    }).catch(e => console.error(e))
            },
            addContact: (firstName, lastName, company, email, phone) => {
                axios({
                    method: "POST",
                    headers: {
                        "Authorization": `JWT ${getStore().token}`,
                        "Access": "application/json",
                        "Content-Type": "application/json"
                    },
                    url: "http://localhost:4002/contacts",
                    data: {
                        firstName: firstName,
                        lastName: lastName,
                        company: company,
                        email: email,
                        phone: phone
                    }
                }).then(() => {
                    getActions().getContacts()
                })
            },
            editContact: (firstName, lastName, company, email, phone, id) => {
                axios({
                    method: "PUT",
                    headers: {
                        "Authorization": `JWT ${getStore().token}`,
                        "Access": "application/json",
                        "Content-Type": "application/json"
                    },
                    url: `http://localhost:4002/contact/${id}`,
                    data: {
                        firstName: firstName,
                        lastName: lastName,
                        company: company,
                        email: email,
                        phone: phone
                    }
                }).then(() => {
                    getActions().getContacts()
                })
            },
            deleteContact: (id) => {
                axios({
                    method: "delete",
                    headers: {
                        "Authorization": `JWT ${getStore().token}`,
                        "Access": "application/json",
                        "Content-Type": "application/json"
                    },
                    url: `http://localhost:4002/contact/${id}`
                }).then(() => {
                    getActions().getContacts()
                })
            },
            saveSearch: (typeSearch) => {

                setStore({ searchCriteria: typeSearch })
            }


        }
    }
}
export default getState;