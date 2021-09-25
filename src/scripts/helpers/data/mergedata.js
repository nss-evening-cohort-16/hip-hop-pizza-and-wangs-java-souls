import {getOrderDetails, deleteOrderMenuItem, getSingleOrdeMenuItems } from './orderItemsData';
import {
  getMenuItemsArray,
  getSingleMenuItem
} from './menuitems';

// import { getSingleOrder } from './ordersData';
//   getMenuItemsForOrder
// API CALLS FOR BOOKS

const viewOrderMenuItems = (orderFirebaseKey) => new Promise(() => {
  getSingleOrdeMenuItems(orderFirebaseKey)
    .then((menuitemarray) => {
      getMenuItemsArray(menuitemarray);
    });
});
// const viewOrderTotal = (orderFirebaseKey) => new Promise(() => {
//   getOrderTotal(orderFirebaseKey);
// });
// reduce((previousValue, currentValue, currentIndex, array) => { ... }, initialValue)

const viewOrderTotal = (orderFirebaseKey) => new Promise((resolve, reject) => {
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
    const menuItemArray = mitems.map((menuItem) => getSingleMenuItem(menuItem.menuItemID));
    console.warn(menuItemArray);
    Promise.all([...menuItemArray]).then((orderArray) => {
      resolve([...orderArray]);
    });
  }).catch(reject);
});

const deleteItemOfOrder = (orderFirebaseKey) => new Promise((resolve, reject) => {
  getSingleOrdeMenuItems(orderFirebaseKey).then((orderMenuArray) => {
    const menuItemArray = orderMenuArray.map((menuItem) => getSingleMenuItem(menuItem.menuItemID));
    if (orderMenuArray.menuItemID === firebaseKey) {
      deleteOrderMenuItem(firebaseKey);
    }
    resolve();
  });
});
export { viewOrderMenuItems, viewOrderTotal, viewOrderItems, deleteItemOfOrder };
