import { getOrders } from './ordersData';

const getOrderTotal = () => {
  getOrders()
    .then((ordersArray) => {
      const ordersTotal = ordersArray.reduce((previous, current) => previous + current.orderTotal, 0);
      console.warn(ordersTotal);
    });
};
const getOrderTip = () => {

};
export default (getOrderTotal, getOrderTip);
