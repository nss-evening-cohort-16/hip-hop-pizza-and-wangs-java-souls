import { getOrders } from './ordersData';

const getTotalTips = () => {
  getOrders()
    .then((ordersArray) => {
      const reducer = (accum, currentValue) => accum + parseFloat(currentValue.tipTotal);
      const tipTotal = (ordersArray.reduce(reducer, 0));
      const totalTips = Math.round(tipTotal);
      document.querySelector('#totalTips').innerHTML += `$${totalTips}`;
    });
};
const getTotalRevenue = () => {
  getOrders()
    .then((ordersArray) => {
      const reducer = (accum, currentValue) => accum + parseFloat(currentValue.orderTotal);
      const ordersTotal = (ordersArray.reduce(reducer, 0));
      console.warn(ordersTotal);
      const reduceTips = (accum, currentValue) => accum + parseFloat(currentValue.tipTotal);
      const tipTotal = (ordersArray.reduce(reduceTips, 0));
      console.warn(tipTotal);
      const totalTips = Math.round(tipTotal);
      console.warn(totalTips);
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
const getTotalCashOrders = () => {
  getOrders()
    .then((ordersArray) => {
      const cashOrders = ordersArray.filter((order) => order.paymentMethod.includes('cash'));
      document.querySelector('#cashOrders').innerHTML += `${cashOrders.length}`;
    });
};
const getTotalCreditOrders = () => {
  getOrders()
    .then((ordersArray) => {
      const creditOrders = ordersArray.filter((order) => order.paymentMethod.includes('CreditCard'));
      document.querySelector('#creditOrders').innerHTML += `${creditOrders.length}`;
    });
};
const getTotalGiftCardOrders = () => {
  getOrders()
    .then((ordersArray) => {
      const giftCardOrders = ordersArray.filter((order) => order.paymentMethod.includes('GiftCard'));
      document.querySelector('#giftCardOrders').innerHTML += `${giftCardOrders.length}`;
    });
};
const getRangeofDates = () => {
  getOrders()
    .then((ordersArray) => {
      let orderDates = ordersArray.map((order) => new Date(order.timeStamp));
      orderDates = orderDates.sort().reverse();
      let firstDate = orderDates[0];
      let lastDate = orderDates[orderDates.length - 1];
      firstDate = new Intl.DateTimeFormat('ens-US').format(firstDate);
      lastDate = new Intl.DateTimeFormat('ens-US').format(lastDate);
      document.querySelector('#dateRange').innerHTML += `${firstDate} - ${lastDate}`;
    });
};

export {
  getTotalRevenue,
  getTotalTips,
  getTotalWalkInOrders,
  getTotalPhoneOrders,
  getTotalOnlineOrders,
  getRangeofDates,
  getTotalCashOrders,
  getTotalCreditOrders,
  getTotalGiftCardOrders
};
