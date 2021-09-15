const homeLoggedOut = () => {
  const domString = '<div id="logo-container"><img src="https://github.com/nss-evening-cohort-16/hip-hop-pizza-and-wangs-java-souls/raw/Development/instructions/hhpw-record.png" alt="BuisnessLogo"></div>';
  document.querySelector('#app').innerHTML += domString;
};
export default homeLoggedOut;
