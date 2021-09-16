import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import navigationEvents from '../Events/navigationEvents';

const startApp = () => {
  domBuilder();
  navBar();
  navigationEvents();
};
export default startApp;
