import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';
import { orderItemForm } from '../../components/forms/OrderItemForm';

const dbUrl = firebaseConfig.databaseURL;
// get orders
const getOrders = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/orders.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// CREATE ORDER
const createOrder = (orderObject) => new Promise((resolve, reject) => {
  console.warn('create order');
  axios.post(`${dbUrl}/orders.json`, orderObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/orders/${response.data.name}.json`, body)
        .then(() => {
          orderItemForm(orderObject);
          // getOrders().then((orderCards) => resolve(orderCards));
        });
    }).catch((error) => reject(error));
});

export { getOrders, createOrder };
