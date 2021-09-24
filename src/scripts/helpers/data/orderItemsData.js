// API CALLS FOR AUTHORS
import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';

// API CALLS FOR BOOKS

const dbUrl = firebaseConfig.databaseURL;
// GET Menu ITEMS
const getMenuItems = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/menuItem.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const getOrderDetails = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/orderMenuItems/${firebaseKey}.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const createOrderitem = (orderObject) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/orderMenuItems.json`, orderObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/orderMenuItems/${response.data.name}.json`, body)
        .then(() => {
          console.warn('create order form');
          // getOrders().then((orderCards) => resolve(orderCards));
        });
    }).catch((error) => reject(error));
});

const getSingleOrdeMenuItems = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/orderMenuItems.json?orderBy="orderID"&equalTo="${firebaseKey}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// UPDATE MENU ITEM
const updateMenuItem = (menuItemObject) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/menuItem/${menuItemObject.firebaseKey}.json`, menuItemObject)
    .then(() => getMenuItems(menuItemObject).then(resolve))
    .catch(reject);
});
// delete OrderMenuItems
const deleteOrderMenuItems = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/orderMenuItems${firebaseKey}.json`)
    .then(() => {
      getOrderDetails().then(resolve);
    })
    .catch(reject);
});
export {
  getMenuItems,
  createOrderitem,
  getOrderDetails,
  getSingleOrdeMenuItems,
  updateMenuItem,
  deleteOrderMenuItems
};
