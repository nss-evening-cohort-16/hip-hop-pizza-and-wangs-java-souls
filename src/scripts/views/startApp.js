import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import domEvents from '../Events/domEvents';
import navigationEvents from '../Events/navigationEvents';
import showHSbuttons from '../helpers/data/homeScreenButtonsCard';

const startApp = () => {
  domBuilder();
  navBar();
  showHSbuttons();
  domEvents();
  navigationEvents();
};
export default startApp;
