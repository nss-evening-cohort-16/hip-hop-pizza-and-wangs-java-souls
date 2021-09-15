const domBuilder = () => {
  document.querySelector('#app').innerHTML = `
      <div id="navigation"></div>
      <div id="main-container">
          <div id="form-container"></div>
          <div id="shop-container"></div>
          <div id="button-container"></div>
          <div id="view"></div>
      </div>`;
};

export default domBuilder;
