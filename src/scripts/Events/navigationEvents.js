import showOrders from '../components/orders';
import viewRevenuePage from '../components/revenue';
import showHSbuttons from '../helpers/data/homeScreenButtonsCard';
import addOrderForm from '../components/forms/orderForm';
import { getOrders } from '../helpers/data/ordersData';

const navigationEvents = (user) => {
  // HOME
  document.querySelector('#home')
    .addEventListener('click', () => {
      showHSbuttons(user);
    });
  // VIEW ORDERS
  document.querySelector('#viewOrders')
    .addEventListener('click', () => {
      getOrders().then((orderCards) => showOrders(orderCards));
    });
  // CREATE ORDER
  document.querySelector('#createOrder')
    .addEventListener('click', () => {
      addOrderForm();
    });
  // View Revenue
  document.querySelector('#revenue')
    .addEventListener('click', () => {
      viewRevenuePage();
    });
};

export default navigationEvents;
