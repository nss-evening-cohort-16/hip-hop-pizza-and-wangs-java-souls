import clearDom from '../auth/clearDom';

const showHSbuttons = (user) => {
  clearDom();

  document.querySelector('#button-container').innerHTML += `
      <div class="row card button-card">
          <div class="btn-card-body">
            <h1 id="hs-message">Start Rocking, ${user.displayName}!</h1>
            <div id="viewOrders" class=" btn btn-lg btn-outline-success hs-btn view-orders-btn">View Orders</div>
            <div id="createOrder" class="btn btn-lg btn-outline-warning hs-btn create-order-btn">Create an Order</div>
            <div id="revenue" class="btn btn-lg btn-outline-danger hs-btn view-revenue-btn">View Revenue</div>
          </div>
      </div>
      `;
};

export default showHSbuttons;
