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

const getOrderDetails = (orderID) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/orderMenuItems/${orderID}.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const createOrderitem = (orderObject) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/orderMenuItems.json`, orderObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/orderMenuItems/${response.data.name}.json`, body)
        .then(() => {
        });
    }).catch((error) => reject(error));
});

// delete menu items
const deleteMenuItem = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/orderMenuItems/${firebaseKey}.json`)
    .then(() => {
      getMenuItems().then(resolve);
    })
    .catch(reject);
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
const deleteOrderMenuItem = (firebaseKey, orderId) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/orderMenuItems/${firebaseKey}.json`)
    .then(() => {
      getSingleOrdeMenuItems(orderId).then(resolve);
    })
    .catch(reject);
});

export {
  getMenuItems,
  createOrderitem,
  getOrderDetails,
  getSingleOrdeMenuItems,
  deleteMenuItem,
  updateMenuItem,
  deleteOrderMenuItem
};
