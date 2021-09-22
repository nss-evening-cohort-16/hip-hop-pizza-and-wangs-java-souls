import { getSingleOrdeMenuItems } from './orderItemsData';
import { getMenuItemsArray, getSingleMenuItem } from './menuitems';
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
  // let menuitemsflat = 0;
  getSingleOrdeMenuItems(orderFirebaseKey).then((mitems) => {
    const menuItemArray = mitems.map((menuItem) => getSingleMenuItem(menuItem.menuItemID));
    console.warn(menuItemArray);
    Promise.all([...menuItemArray]).then((orderArray) => {
      resolve(orderArray.reduce((a, b) => (a + b.itemPrice), 0));
    });
  }).catch(reject);
});
export { viewOrderMenuItems, viewOrderTotal };
