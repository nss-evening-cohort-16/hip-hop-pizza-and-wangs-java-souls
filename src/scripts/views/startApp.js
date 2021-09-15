import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import showOrders from '../components/orders';

const startApp = () => {
  domBuilder();
  navBar();
  showOrders();
};

export default startApp;
