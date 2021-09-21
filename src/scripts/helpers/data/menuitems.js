import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';

const dbUrl = firebaseConfig.databaseURL;
// const geteMenuItems = (firebaseKey) => new Promise((resolve, reject) => {
//   axios.get(`${dbUrl}/menuItem.json?orderBy="firebaseKey"&equalTo="${firebaseKey}"`)
//     .then((response) => resolve(Object.values(response.data)))
//     .catch((error) => reject(error));
// });

const getMenuItemsArray = (item) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/menuItem.json?orderBy="firebaseKey"&equalTo="${item.menuItemID}"`)
    .then((response) => resolve(response.data.itemPrice))
    .catch(reject);
});

const getMenuItemsForOrder = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/menuItem.json?orderBy="firebaseKey"&equalTo="${firebaseKey}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((reject));
});

// const getAllMenuItems = (menuItemID) => new Promise((resolve, reject) => {
//   axios.get(`${dbUrl}/orderMenuItems.json?orderBy="menuItemID"&equalTo="${menuItemID}"`)
//     .then((response) => resolve(Object.values(response.data)))
//     .catch((reject));
// });

export { getMenuItemsArray, getMenuItemsForOrder };
