import axios from 'axios';
import getContacts from './requests';

const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            contacts: []
        },
        actions: {
            getContacts: () => {
                axios.get("http://localhost:4002/contacts")
                    .then(response => response.data)
                    .then((data) => {
                        console.log(data)
                        setStore({ contacts: data })

                    }).catch(e => console.error(e))
            }
        }
    }
}
export default getState;