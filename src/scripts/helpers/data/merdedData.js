import { getMenuItemsForOrder } from './menuitems';
import { getSingleOrder } from './ordersData';

const viewOrderItems = (orderFirebaseKey) => new Promise((resolve, reject) => {
  getSingleOrder(orderFirebaseKey)
    .then((orderObj) => {
      getMenuItemsForOrder(orderObj.firebaseKey)
        .then((menuItemObj) => {
          resolve({ menuItemObj, ...orderObj });
        });
    }).catch(reject);
});

export default viewOrderItems;
