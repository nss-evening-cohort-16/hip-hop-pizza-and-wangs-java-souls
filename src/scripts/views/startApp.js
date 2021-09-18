import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import domEvents from '../Events/domEvents';
import navigationEvents from '../Events/navigationEvents';
import showHSbuttons from '../helpers/data/homeScreenButtonsCard';

const startApp = (user) => {
  domBuilder();
  navBar();
  showHSbuttons(user);
  domEvents();
  navigationEvents(user);
};
export default startApp;
