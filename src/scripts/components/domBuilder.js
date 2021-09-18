const domBuilder = () => {
  document.querySelector('#app').innerHTML = `
  <div id="navigation"></div>
    <div id="main-container">
<<<<<<< HEAD
      <div id="form-container"></div>
       <div id="shop"></div>
       <div id="button-container"></div>
=======
      <div id="button-container"></div>
       <div id="form-container"></div>
       <div id="shop"></div>
>>>>>>> Development
      <div id="view">
    </div>`;
};

export default domBuilder;
