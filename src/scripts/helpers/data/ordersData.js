import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';
import orderItemForm from '../../components/forms/orderItemForm';
import { getSingleOrdeMenuItems } from './orderItemsData';
// import { getSingleOrdeMenuItems } from './orderItemsData';

const dbUrl = firebaseConfig.databaseURL;
// get orders
const getOrders = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/orders.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});
// GET SINGLE ORDER
const getSingleOrder = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/orders/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});
// CREATE ORDER
const createOrder = (orderObject) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/orders.json`, orderObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/orders/${response.data.name}.json`, body)
        .then(() => {
          getSingleOrder(response.data.name).then(orderItemForm);
        });
    }).catch((error) => reject(error));
});
const updateOrder = (orderObject) => {
  const body = { tipTotal: orderObject.tipTotal, paymentMethod: orderObject.paymentMethod, orderTotal: orderObject.orderTotal };
  return axios.patch(`${dbUrl}/orders/${orderObject.ordernumber}.json`, body);
};

// EDIT ORDER
const editOrder = (orderObject) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/orders/${orderObject.firebaseKey}.json`, orderObject)
    .then(() => getOrders(orderObject).then(resolve))
    .catch(reject);
});
// DELETE ordermenuitem
const deleteOrderItems = (orderID) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/orderMenuItems/${orderID}.json`)
    .then(() => {
      getOrders().then(resolve);
    })
    .catch(reject);
});
// DELETE
const deleteSingleOrder = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/orders/${firebaseKey}.json`)
    .then(() => {
      getOrders().then(resolve);
    })
    .catch(reject);
});
// DELETE ORDER
const deleteOrder = (orderFirebaseKey) => new Promise((resolve, reject) => {
  getSingleOrdeMenuItems(orderFirebaseKey).then((mitems) => {
    const deleteItems = mitems.map((orderMenuItems) => deleteOrderItems(orderMenuItems.firebaseKey));
    Promise.all([...deleteItems]).then(() => resolve(deleteSingleOrder(orderFirebaseKey)));
  }).catch(reject);
});

export {
  getOrders,
  createOrder,
  getSingleOrder,
  deleteOrder,
  updateOrder,
  editOrder
};
