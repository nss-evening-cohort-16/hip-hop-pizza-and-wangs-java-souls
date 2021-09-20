import showOrderItems from '../../components/showOrderItems';
import { getSingleOrder } from './ordersData';

const viewOrderItems = (orderFirebaseKey) => new Promise((resolve, reject) => {
  getSingleOrder(orderFirebaseKey)
    .then((orderObj) => {
      showOrderItems(orderObj.firebaseKey)
        .then((orderItemsObj) => {
          resolve({ orderItemsObj, ...orderObj });
        });
    }).catch(reject);
});

export default viewOrderItems;
