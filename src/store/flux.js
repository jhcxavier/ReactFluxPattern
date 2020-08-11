import axios from 'axios';
import getContacts from './requests';

const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            contacts: [],
            token: "hello",
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
                    console.log(data.token)
                    // console.log(getState.store.token)
                })
                    .catch((error) => {
                        console.error(error)
                    })
            },

            getContacts: () => {
                // let headers = null;
                // if (getState.store.token !== undefined) {
                //     headers = {
                //         "Authorization": `JWT ${getState.store.token}`
                //     }
                // }
                axios.get("http://localhost:4002/")
                    .then(response => response.data)
                    .then((data) => {
                        // console.log(data)
                        // console.log(store.token),
                        setStore({ contacts: data })

                    }).catch(e => console.error(e))
            }


        }
    }
}
export default getState;