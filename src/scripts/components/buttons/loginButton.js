import signIn from '../../helpers/auth/signIn';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  const domString = '<button id="google-auth" class="btn btn-lg btn-outline-success">Login to Get Started</button>';
  document.querySelector('#app').innerHTML += domString;
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default loginButton;
