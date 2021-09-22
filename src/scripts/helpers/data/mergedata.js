import { getSingleOrdeMenuItems } from './orderItemsData';
<<<<<<< HEAD
import { getMenuItemsArray } from './menuitems';
=======
import { getOrderTotal, getMenuItemsArray, getMenuItemsForOrder } from './menuitems';
import { getSingleOrder } from './ordersData';
>>>>>>> Development
// API CALLS FOR BOOKS

const viewOrderMenuItems = (orderFirebaseKey) => new Promise(() => {
  getSingleOrdeMenuItems(orderFirebaseKey)
    .then((menuitemarray) => {
      getMenuItemsArray(menuitemarray);
<<<<<<< HEAD
      console.warn('menuitemarray');
      console.warn(menuitemarray);
    });
});

export default viewOrderMenuItems;
=======
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
>>>>>>> Development
