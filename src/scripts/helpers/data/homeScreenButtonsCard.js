import clearDom from '../auth/clearDom';

const showHSbuttons = () => {
  clearDom();

  document.querySelector('#button-container').innerHTML += `
      <div class="card">
          <div>
              <div id="view-orders-button" class=" btn hs-btn view-orders-btn">View Orders</div>
              <div id="create-order-button" class="btn hs-btn create-order-btn">Create an Order</div>
              <div id="view-revenue-button" class="btn hs-btn view-revenue-btn">View Revenue</div>
          </div>
      </div>
      `;
};

export default showHSbuttons;
