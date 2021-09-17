// API CALLS FOR AUTHORS
import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';
// API CALLS FOR BOOKS

const dbUrl = firebaseConfig.databaseURL;
// GET ORDER ITEMS
const getOrderItems = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/orderItems.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

export default getOrderItems;