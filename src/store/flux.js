import axios from 'axios';
import React from "react";
// import { useHistory } from "react-router-dom";
// let history = useHistory()
const getState = ({ getStore, getActions, setStore, setHistory }) => {
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
                        console.log("contacts", getStore().contacts)
                    }).catch(e => console.error(e))
            }
        }
    }
}
export default getState;