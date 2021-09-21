import { getOrders } from './ordersData';

const getTotalTips = () => {
  getOrders()
    .then((ordersArray) => {
      const reducer = (accum, currentValue) => accum + currentValue.tipTotal;
      const tipTotal = (ordersArray.reduce(reducer, 0));
      const totalTips = Math.round(tipTotal);
      document.querySelector('#totalTips').innerHTML += `$${totalTips}`;
    });
};
const getTotalRevenue = () => {
  getOrders()
    .then((ordersArray) => {
      const reducer = (accum, currentValue) => accum + currentValue.orderTotal;
      const ordersTotal = (ordersArray.reduce(reducer, 0));
      const reduceTips = (accum, currentValue) => accum + currentValue.tipTotal;
      const tipTotal = (ordersArray.reduce(reduceTips, 0));
      const totalTips = Math.round(tipTotal);
      const totalRev = Math.round(ordersTotal + totalTips);
      document.querySelector('#totalRevenue').innerHTML += `$${totalRev}`;
    });
};

const getTotalWalkInOrders = () => {
  getOrders()
    .then((ordersArray) => {
      const inPersonOrders = ordersArray.filter((order) => order.orderType.includes('In-person'));
      document.querySelector('#inPersonOrders').innerHTML += `${inPersonOrders.length}`;
    });
};
const getTotalPhoneOrders = () => {
  getOrders()
    .then((ordersArray) => {
      const phoneOrders = ordersArray.filter((order) => order.orderType.includes('Phone'));
      document.querySelector('#phoneOrders').innerHTML += `${phoneOrders.length}`;
    });
};
const getTotalOnlineOrders = () => {
  getOrders()
    .then((ordersArray) => {
      const onlineOrders = ordersArray.filter((order) => order.orderType.includes('On-line'));
      document.querySelector('#onlineOrders').innerHTML += `${onlineOrders.length}`;
    });
};

export {
  getTotalRevenue,
  getTotalTips,
  getTotalWalkInOrders,
  getTotalPhoneOrders,
  getTotalOnlineOrders
};
