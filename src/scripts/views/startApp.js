import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import domEvents from '../events/domEvents';
import navigationEvents from '../events/navigationEvents';
import showHSbuttons from '../helpers/data/homeScreenButtonsCard';

const startApp = () => {
  domBuilder();
  navBar();
  showHSbuttons();
  domEvents();
  navigationEvents();
};
export default startApp;
