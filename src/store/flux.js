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
                    // console.log(data.token)
                    console.log(getStore().token)
                    // getActions().getContacts(data.token)
                }).then(() => {
                    getActions().getContacts(getStore().token)
                })
                    .catch((error) => {
                        console.error(error)
                    })
            },

            getContacts: (token) => {
                let headers = null;
                console.log("token", token)
                if (token) {
                    console.log("token2 ", token)
                    headers = {
                        "Authorization": `JWT ${token}`,
                        // "Access-Control-Allow-Origin"
                        "Access": "application/json",
                        "Content-Type": "application/json",

                    }
                } else if (getStore().token) {
                    console.log("token3", getStore().token)
                    headers = {

                        "Authorization": `JWT ${getStore().token}`,

                        // 'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFiY2RAbmNjaS5jb20iLCJ1c2VybmFtZSI6ImFiY2QiLCJfaWQiOiI1ZjMxYTcwNTBjYmJlYzAxNDhiNjQ5OTciLCJpYXQiOjE1OTcxNjgxOTd9.uzk_qbuWc7hS3WAa-98uBzHakZRBML7ZuqloLR7bhWA',
                        "Content-Type": "application/json"
                    }
                }
                axios.get("http://localhost:4002/contacts", {
                    headers
                    // mode: "no-cors"
                })
                    .then(response => response.data)
                    .then((data) => {
                        // console.log(data)
                        // console.log(store.token),
                        setStore({ contacts: data })
                        console.log(getStore().contacts)

                    }).catch(e => console.error(e))
            },
            getTest: () => {
                axios.get("http://localhost:4002/contacts", {
                    headers: {
                        "Authorization": `JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFiY2RAbmNjaS5jb20iLCJ1c2VybmFtZSI6ImFiY2QiLCJfaWQiOiI1ZjMxYTcwNTBjYmJlYzAxNDhiNjQ5OTciLCJpYXQiOjE1OTcxNjgxOTd9.uzk_qbuWc7hS3WAa-98uBzHakZRBML7ZuqloLR7bhWA`,
                        "Content-Type": "application/json"
                    }
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