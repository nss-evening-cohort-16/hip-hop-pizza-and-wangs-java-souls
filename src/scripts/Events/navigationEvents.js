import getOrders from '../helpers/data/odersData';
import showOrders from '../components/orders';
import viewRevenuePage from '../components/revenue';

const navigationEvents = () => {
  // HOME

  // VIEW ORDERS
  document.querySelector('#viewOrders')
    .addEventListener('click', () => {
      getOrders().then((orderCards) => showOrders(orderCards));
    });
  // CREATE ORDER

  // View Revenue
  document.querySelector('#revenue')
    .addEventListener('click', () => {
      viewRevenuePage();
    });
};

export default navigationEvents;
