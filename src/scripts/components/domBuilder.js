const domBuilder = () => {
  document.querySelector('#app').innerHTML = `
  <div id="navigation"></div>
    <div id="main-container">
      <div id="form-container"></div>
       <div id="shop"></div>
       <div id="button-container"></div>
       <div id="cart-container"></div>
      <div id="view">
    </div>`;
};

export default domBuilder;
