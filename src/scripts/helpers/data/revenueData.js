import { getOrders } from './ordersData';

const getOrdersTotal = () => {
  getOrders()
    .then((ordersArray) => {
      const reducer = (a, currentValue) => a + currentValue.orderTotal;
      const ordersTotal = (ordersArray.reduce(reducer, 0));
      const totalRev = Math.round(ordersTotal);
      document.querySelector('#totalRevenue').innerHTML += `$${totalRev}`;
    });
};

// const getOrderTip = () => {

// };
export default getOrdersTotal;
