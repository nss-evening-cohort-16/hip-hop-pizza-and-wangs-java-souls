import { getMenuItems } from './orderItemsData';
import { getSingleOrder } from './ordersData';

const viewOrderItems = (orderFirebaseKey) => new Promise((resolve, reject) => {
  getSingleOrder(orderFirebaseKey)
    .then((orderObj) => {
      getMenuItems(orderObj.menuItemID)
        .then((menuItemObj) => {
          resolve({ menuItemObj, ...orderObj });
        });
    }).catch(reject);
});

export default viewOrderItems;
