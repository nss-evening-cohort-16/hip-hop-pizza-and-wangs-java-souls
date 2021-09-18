// API CALLS FOR AUTHORS
import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';
import { getOrders } from './ordersData';

// API CALLS FOR BOOKS

const dbUrl = firebaseConfig.databaseURL;
// GET ORDER ITEMS
const getOrderItems = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/orderItems.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const getOrderDetails = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/orderDetails.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const createOrderitem = (orderObject) => new Promise((resolve, reject) => {
  console.warn('create menu order');
  axios.post(`${dbUrl}/orderDetails.json`, orderObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/orderDetails/${response.data.name}.json`, body)
        .then(() => {
          getOrders().then((orderCards) => resolve(orderCards));
        });
    }).catch((error) => reject(error));
});

export { getOrderItems, createOrderitem, getOrderDetails };
