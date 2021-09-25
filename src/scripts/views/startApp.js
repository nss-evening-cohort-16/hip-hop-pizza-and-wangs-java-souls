import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import navigationEvents from '../events/navigationEvents';
import showHSbuttons from '../components/homeScreenButtonsCard';
import domEvents from '../Events/domEvents';

const startApp = (user) => {
  domBuilder();
  navBar();
  showHSbuttons(user);
  domEvents(user);
  navigationEvents(user);
};
export default startApp;
