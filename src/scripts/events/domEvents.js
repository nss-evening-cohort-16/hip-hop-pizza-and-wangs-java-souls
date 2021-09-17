import showOrders from '../components/orders';
import { getOrders } from '../helpers/data/ordersData';
// import createOrders()
// import getRevenue()

const createOrders = () => {
  console.warn('Creating Orders');
};

const getRevenue = () => {
  console.warn('Getting Revenue');
};

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('view-orders-button')) {
      getOrders().then((orderCards) => showOrders(orderCards));
    }
    if (e.target.id.includes('create-order-button')) {
      createOrders();
    }
    if (e.target.id.includes('view-revenue-button')) {
      getRevenue();
    }
  });
};

export default domEvents;
