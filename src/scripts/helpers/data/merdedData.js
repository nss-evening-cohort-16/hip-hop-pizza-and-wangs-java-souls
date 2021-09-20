import { getMenuItems } from './orderItemsData';
import { getSingleOrder } from './ordersData';

const viewOrderItems = (orderFirebaseKey) => new Promise((resolve, reject) => {
  getSingleOrder(orderFirebaseKey)
    .then((menuObj) => {
      getMenuItems(menuObj.firebaseKey)
        .then((menuItemObj) => {
          resolve({ menuItemObj, ...menuObj });
        });
    }).catch(reject);
});

export default viewOrderItems;
