import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import showOrders from '../components/orders';
import getOrders from '../helpers/data/odersData';

const startApp = () => {
  domBuilder();
  navBar();
  getOrders().then((orderCards) => showOrders(orderCards));
};

export default startApp;
