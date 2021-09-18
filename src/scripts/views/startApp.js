import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import domEvents from '../events/domEvents';
import navigationEvents from '../events/navigationEvents';
import showHSbuttons from '../helpers/data/homeScreenButtonsCard';

const startApp = (user) => {
  domBuilder();
  navBar();
  showHSbuttons(user);
  domEvents();
  navigationEvents(user);
};
export default startApp;
