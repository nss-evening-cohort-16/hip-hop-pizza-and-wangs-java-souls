import firebase from 'firebase/app';
import 'firebase/auth';
import clearDom from '../../helpers/auth/clearDom';

const signMeOut = () => {
  clearDom();
  document.querySelector('#navigation').innerHTML = '';
  firebase.auth().signOut();
};

const logoutButton = () => {
  const domString = '<button id="google-auth" class="btn btn-danger">SIGNOUT</button>';
  document.querySelector('#logout-button').innerHTML = (domString);
  document.querySelector('#google-auth').addEventListener('click', signMeOut);
};

export default logoutButton;
