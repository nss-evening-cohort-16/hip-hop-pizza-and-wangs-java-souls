import getOrders from '../helpers/data/odersData';
import showOrders from '../components/orders';
import viewRevenuePage from '../components/revenue';
import showHSbuttons from '../helpers/data/homeScreenButtonsCard';

const navigationEvents = () => {
  // HOME
  document.querySelector('#home')
    .addEventListener('click', () => {
      showHSbuttons();
    });
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
