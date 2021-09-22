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
const viewOrderTotal = (orderFirebaseKey) => new Promise(() => {
  getSingleOrdeMenuItems(orderFirebaseKey)
    .then((menuitemarray) => {
      getOrderTotal(menuitemarray);
    });
});

const viewOrderItems = (orderFirebaseKey) => new Promise((resolve, reject) => {
  getSingleOrder(orderFirebaseKey)
    .then((orderObj) => {
      getMenuItemsForOrder(orderObj.firebaseKey)
        .then((menuItemObj) => {
          resolve({ menuItemObj, ...orderObj });
        });
    }).catch(reject);
});

export { viewOrderMenuItems, viewOrderTotal, viewOrderItems };
