import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import domEvents from '../events/domEvents';
import navigationEvents from '../events/navigationEvents';
import showHSbuttons from '../components/homeScreenButtonsCard';

const startApp = (user) => {
  domBuilder();
  navBar();
  showHSbuttons(user);
  domEvents(user);
  navigationEvents(user);
};
export default startApp;
