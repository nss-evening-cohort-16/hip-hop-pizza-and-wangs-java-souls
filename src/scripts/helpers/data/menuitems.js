import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';
import { getSingleOrdeMenuItems } from './orderItemsData';

const dbUrl = firebaseConfig.databaseURL;
const getSingleMenuItem = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/menuItem/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getOrderTotal = (orderFirebaseKey) => new Promise((resolve, reject) => {
  getSingleOrdeMenuItems(orderFirebaseKey).then((mitems) => {
    const menuItemArray = mitems.map((menuItem) => getSingleMenuItem(menuItem.menuItemID));
    menuItemArray.forEach((item) => {
      Promise.all([...menuItemArray]).then(() => console.warn(item.itemPrice));
    });
  }).catch(reject);
});

const getMenuItemsForOrder = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/menuItem.json?orderBy="firebaseKey"&equalTo="${firebaseKey}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((reject));
});

const getMenuItemsArray = (MenuItemsArray) => {
  const menuitemsflat = [];
  MenuItemsArray.forEach((item) => {
    console.warn('getMenuItemsArray', item);
    getSingleMenuItem(item.menuItemID).then((outputItem) => {
      menuitemsflat.push({ outputItem });
    });
  });
};

export {
  getOrderTotal,
  getMenuItemsArray,
  getSingleMenuItem,
  getMenuItemsForOrder
};
