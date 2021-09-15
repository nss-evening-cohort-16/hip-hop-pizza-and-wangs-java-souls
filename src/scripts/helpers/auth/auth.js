import firebase from 'firebase/app';
import 'firebase/auth';
import loginButton from '../../components/buttons/loginButton';
import logoutButton from '../../components/buttons/logoutButton';
import firebaseConfig from '../../../api/apiKeys';
import startApp from '../../views/startApp';

const checkLoginStatus = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      startApp();
      logoutButton();
    } else {
      // person is NOT logged in
      loginButton();
    }
  });
};

export default checkLoginStatus;
