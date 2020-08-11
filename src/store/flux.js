import axios from 'axios';
import getContacts from './requests';

const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            contacts: [],
            token: null,
            currentUser: null,

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
                    console.log(getStore().token)

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
                        setStore({ contacts: data })
                        console.log(getStore().contacts)

                    }).catch(e => console.error(e))
            }
        }
    }
}
export default getState;