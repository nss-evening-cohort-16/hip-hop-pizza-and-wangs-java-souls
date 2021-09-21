import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';

const dbUrl = firebaseConfig.databaseURL;
const getSingleMenuItem = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/menuItem/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getOrderTotal = (MenuItemsArray) => {
  let menuitemsflat = 0;
  MenuItemsArray.forEach((item) => {
    console.warn('getOrderTotal', item);
    getSingleMenuItem(item.menuItemID).then((outputItem) => {
      menuitemsflat += outputItem.itemPrice;
      console.warn(menuitemsflat);
    });
  });
};

const getMenuItemsArray = (MenuItemsArray) => {
  const menuitemsflat = [];
  MenuItemsArray.forEach((item) => {
    console.warn('getMenuItemsArray', item);
    getSingleMenuItem(item.menuItemID).then((outputItem) => {
      menuitemsflat.push({ outputItem });
    });
  });
  console.warn('menuitemsflat', menuitemsflat);
};

export { getOrderTotal, getMenuItemsArray };
