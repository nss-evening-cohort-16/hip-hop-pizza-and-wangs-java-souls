import clearDom from '../auth/clearDom';

const showHSbuttons = () => {
  clearDom();

  document.querySelector('#button-container').innerHTML += `
      <div class="card button-card">
          <div class="btn-card-body">
              <div id="view-orders-button" class=" btn btn-lg btn-success hs-btn view-orders-btn">View Orders</div>
              <div id="create-order-button" class="btn btn-lg btn-warning hs-btn create-order-btn">Create an Order</div>
              <div id="view-revenue-button" class="btn btn-lg btn-info hs-btn view-revenue-btn">View Revenue</div>
          </div>
      </div>
      `;
};

export default showHSbuttons;
