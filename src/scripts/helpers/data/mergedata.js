import { getSingleOrdeMenuItems } from './orderItemsData';
import { getOrderTotal, getMenuItemsArray, getMenuItemsForOrder } from './menuitems';
import { getSingleOrder } from './ordersData';
// API CALLS FOR BOOKS

const viewOrderMenuItems = (orderFirebaseKey) => new Promise(() => {
  getSingleOrdeMenuItems(orderFirebaseKey)
    .then((menuitemarray) => {
      getMenuItemsArray(menuitemarray);
    });
});

const viewOrderTotal = (orderFirebaseKey) => new Promise((resolve, reject) => {
  // let menuitemsflat = 0;
  getSingleOrdeMenuItems(orderFirebaseKey).then((mitems) => {
    const menuItemArray = mitems.map((menuItem) => getSingleMenuItem(menuItem.menuItemID));
    console.warn(menuItemArray);
    Promise.all([...menuItemArray]).then((orderArray) => {
      resolve(orderArray.reduce((a, b) => (a + b.itemPrice), 0));
    });
  }).catch(reject);
});

const viewOrderItems = (orderFirebaseKey) => new Promise((resolve, reject) => {
  getSingleOrdeMenuItems(orderFirebaseKey).then((mitems) => {
    const mitemkeys = mitems.map((menuItem) => getSingleMenuItem(menuItem.firebaseKey));
    const menuItemArray = mitems.map((menuItem) => getSingleMenuItem(menuItem.menuItemID));
    console.warn(menuItemArray);
    Promise.all([...menuItemArray]).then((orderArray) => {
      console.warn('array merge', { mitemkeys, ...orderArray });
      resolve([...orderArray]);
    });
  }).catch(reject);
});

export { viewOrderMenuItems, viewOrderTotal, viewOrderItems };
